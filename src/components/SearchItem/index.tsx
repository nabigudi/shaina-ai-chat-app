import Search from '@/assets/svg/search.svg'
import Left from '@/assets/svg/time-quarter.svg'
import Trash from '@/assets/svg/trash.svg'
import Check from '@/assets/svg/check.svg'
import Cross from '@/assets/svg/cross.svg'
import moment from 'moment';
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { selectSelectedHistory, selectPromptLeft, } from '@/redux/selectors/searchesSelectors'
import { deleteHistory, deselectHistory } from '@/redux/slices/searchesSlice'
import { useState } from 'react'
import { HistorySearch } from '@/types/historyTypes';

type SearchItemProps = {
  item: HistorySearch
  onClick: () => void,
  isSelected: boolean, 
}

const SearchItem = ({item, onClick, isSelected}: SearchItemProps) => {
  const dispatch = useAppDispatch();
  const [deleteClicked, setDeleteClicked] = useState<boolean>(false);
  const currentSelectedHistory = useAppSelector(selectSelectedHistory);
  const itemsLeftonSelectedHistory = useAppSelector(selectPromptLeft);
  const itemsLeft =  item.id === currentSelectedHistory?.id ? itemsLeftonSelectedHistory : item.left;
  moment.updateLocale('es', {
    relativeTime : {
        future: "en %s",
        past:   "hace %s",
        s  : 'hace pocos segundos',
        ss : '%d segundos',
        m:  "un minuto",
        mm: "%d minutos",
        h:  "una hora",
        hh: "%d horas",
        d:  "ayer",
        dd: "%d días",
        w:  "una semana",
        ww: "%d semanas",
        M:  "un mes",
        MM: "%d meses",
        y:  "un año",
        yy: "%d años"
    }
  });

  const confirmDeleteItem = (item: HistorySearch) => {
    dispatch(deleteHistory(item))
  };

  const deselectHistoryAction = () => {
    dispatch(deselectHistory());
    setDeleteClicked(false);
  };

  return ( 
    <div className={`mx-5 my-3 p-3 text-base flex items-center ${isSelected ? 'bg-orange-50' : 'bg-white'}`}>
      <div className= "bg-orange-300 p-2 mr-3 text-base items-center rounded-full hidden lg:inline-flex">
        <Search className="text-sm"/>
      </div>
      <div className= "flex-1 cursor-pointer" onClick={onClick}>
        <h2>{item.title}</h2>
        <div className= "flex items-center text-gray-400 text-sm ">
          <Left className="mr-2 hidden lg:inline-flex text-md"/>
          <span>{moment(item.createdAt, 'YYYY-MM-DD HH:mm').fromNow()}, queda{item.left > 1 && 'n'} {itemsLeft} token{item.left > 1 && 's'} disponible{item.left>1 && 's'}</span>
        </div>
      </div>
      <div className="flex flex-row justify-items-end">
      {deleteClicked ?
          <div className="flex flex-row context-end" >
            <div className=" mr-3">
              <button title="Confirmar Borrado de Búsqueda" onClick={()=>confirmDeleteItem(item)}>
                <Check className="text-sm cursor-pointer"/>
              </button>
            </div>
            <button title="Cancelar Borrado de Búsqueda" onClick={()=>deselectHistoryAction()}>
              <Cross className="text-sm cursor-pointer" />
            </button>
          </div> 
      :
          <button title={'Borrar Búsqueda'} onClick={()=>setDeleteClicked(true)}>
             <Trash className="text-sm cursor-pointer"/>
          </button> 
      }
      </div>
    </div>
  )
}

export default SearchItem;
