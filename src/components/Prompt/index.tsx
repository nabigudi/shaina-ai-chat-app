import Send from '@/assets/svg/send.svg'
import Magic from '@/assets/svg/magic.svg'
import IconButton from '@/components/IconButton';
import moment from 'moment';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { createNewHistory, doCreateNewQuestionAnswer, doSearchOnIA } from '@/redux/slices/searchesSlice';
import { selectCurrentUser } from '@/redux/selectors/commonSelectors';
import { useEffect, useState } from 'react';
import { updateShowSidebar } from '@/redux/slices/commonSlice';
import Modal from '@/components/Modal';
import Button from '@/components/Button';

type PromptProps = {
  role: 'system' | 'user'
  isMagic?: boolean,
  isLoadingAction?: (e:boolean) => void
}

const Prompt = ({role, isMagic = false, isLoadingAction=()=>{}}: PromptProps) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const [valueSearch, setValueSearch] = useState<string>('');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(()=>{
    setIsMobile(window.innerWidth <= 640)
  }, [])

  const createNewSearch = () => {
    const newSearch = {
      id: Math.floor(Math.random() * 100),
      title: valueSearch,
      createdAt: moment().format('YYYY-MM-DD HH:mm'),
      left: 1000,
      createdBy: currentUser,
      history: [
        {
          id: 1,
          role: 'system' as const,
          user: currentUser,
          message: valueSearch,
          typeMessage: 'string',
          date: moment().format('YYYY-MM-DD HH:mm'),
        }
      ],
    }
    dispatch(createNewHistory(newSearch));
    isMobile && dispatch(updateShowSidebar());
  }

  const createQuestionToAI = () => {
    const newQuestion = {
      id: Math.floor(Math.random() * 100),
      role: 'user' as const,
      user: currentUser,
      message: valueSearch,
      typeMessage: 'string',
      date: moment().format('YYYY-MM-DD HH:mm'),
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
    <>
      <div className="relative w-full">
        <input className="border-2 border-slate-300 rounded h-8 w-full px-2 py-1" placeholder="Insertar prompt" 
          value={valueSearch} onChange={(e) => setValueSearch(e.currentTarget.value)} 
          onKeyDown={(e) =>{if (e.key === 'Enter' && valueSearch) {
            e.preventDefault();
            e.stopPropagation();
            doSearch(role);
          }}}/>

        <div className="absolute right-0.5 top-0.5">
          <IconButton title={'Enviar'} onClick={()=>doSearch(role)}>
            <Send className="text-sm"/>
          </IconButton>
          {isMagic &&
            <IconButton title={'Sobre esta IA'} onClick={()=>setOpenModal(true)}>
              <Magic className="text-sm"/>
          </IconButton>
          }
        </div>
      </div>
      {openModal &&
        <Modal title='Sobre esta IA'>
          <div className="flex flex-col p-5">
            <p className="pb-3 text-gray-500">Hola, soy <span className="font-bold">Shaina Chat</span> GPT-3, un modelo de lenguaje desarrollado por OpenAI. Estoy aquí para ayudarte con cualquier pregunta o tarea que tengas.</p>
            <p className="pb-3 text-gray-500">Puedo comunicarme en varios idiomas, incluyendo inglés, español, francés, alemán, italiano, portugués, neerlandés, ruso, chino y japonés, entre otros.</p>
            <p className="pb-3 text-gray-500">¿En qué puedo ayudarte hoy?</p>
            
            <div className="pt-3 w-full flex flex-row justify-end items-center">
              <Button onClick={()=>setOpenModal(false)}> 
                <div className="text-white flex items-center text-sm">
                  Hazme una pregunta
                </div>
              </Button>
            </div>
          </div>
        </Modal>
      }
      
    </>
  )
}

export default Prompt;