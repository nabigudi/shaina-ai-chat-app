import Send from '@/assets/svg/send.svg'
import Magic from '@/assets/svg/magic.svg'
import IconButton from '@/components/IconButton';
import moment from 'moment';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { createNewHistory, doCreateNewQuestionAnswer, doSearchOnIA } from '@/redux/slices/searchesSlice';
import { selectCurrentUser } from '@/redux/selectors/commonSelectors';
import { useEffect, useState } from 'react';
import { selectSelectedHistory } from '@/redux/selectors/searchesSelectors';
import { getOpenAI } from '@/api/openAi';

type PromptProps = {
  role: 'system' | 'user'
  isMagic?: boolean,
  isLoadingAction?: (e:boolean) => void
}

const Prompt = ({role, isMagic = false, isLoadingAction=()=>{}}: PromptProps) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const [valueSearch, setValueSearch] = useState<string>('');

  const createNewSearch = () => {
    const newSearch = {
      id: Math.floor(Math.random() * 100),
      title: valueSearch,
      createdAt: moment().format('YYYY-MM-DD'),
      left: 1000,
      createdBy: currentUser,
      history: [
        {
          id: 1,
          role: 'system' as const,
          user: currentUser,
          message: valueSearch,
          typeMessage: 'string',
          date: moment().format('YYYY-MM-DD'),
        }
      ],
    }
    dispatch(createNewHistory(newSearch));
  }

  const createQuestionToAI = () => {
    const newQuestion = {
      id: Math.floor(Math.random() * 100),
      role: 'user' as const,
      user: currentUser,
      message: valueSearch,
      typeMessage: 'string',
      date: moment().format('YYYY-MM-DD'),
    };
    isLoadingAction(true);
    dispatch(doCreateNewQuestionAnswer(newQuestion)).unwrap().then(() => {
      dispatch(doSearchOnIA(newQuestion));
    });
  }

  const doSearch = (role: 'system' | 'user') => {
    setValueSearch('');
    switch(role) {
      case 'system': 
        createNewSearch();
        break;
      case 'user':
        createQuestionToAI();
        break;
      default: break;
    }
  }

  return (
    <div className="relative w-full">
      <input className="border-2 border-slate-300 rounded h-8 w-full px-2 py-1" placeholder="Insertar prompt" 
        value={valueSearch} onChange={(e) => setValueSearch(e.currentTarget.value)}/>

      <div className="absolute right-0.5 top-0.5">
        <IconButton onClick={()=>doSearch(role)}>
          <Send className="text-sm"/>
        </IconButton>
        {isMagic &&
          <IconButton onClick={()=>{}}>
            <Magic className="text-sm"/>
        </IconButton>
        }
      </div>
    </div>
  )
}

export default Prompt;