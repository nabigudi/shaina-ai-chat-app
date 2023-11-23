import Search from '@/assets/svg/search.svg'
import Left from '@/assets/svg/time-quarter.svg'
import Trash from '@/assets/svg/trash.svg'
import Check from '@/assets/svg/check.svg'
import Cross from '@/assets/svg/cross.svg'
import moment from 'moment';

type SearchItemProps = {
  title: string,
  createdAt: string,
  left: number,
  onClick: () => void,
  isSelected: boolean
}

const SearchItem = ({title, createdAt, left, onClick, isSelected}: SearchItemProps) => {
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

  return ( 
    <div className={`mx-5 my-3 p-3 text-base flex items-center h-[70px] ${isSelected ? 'bg-orange-50' : 'bg-white'}`} onClick={onClick}>
      <div className= "bg-orange-300 p-2 mr-3 text-base inline-flex items-center rounded-full">
        <Search className="text-sm"/>
      </div>
      <div className= "flex-1">
        <h2>{title}</h2>
        <div className= "flex items-center text-gray-400 text-sm">
          <Left className="mr-2"/>
          <span>{moment(createdAt, "YYYY-M-D").fromNow()}, queda{left > 1 && 'n'} {left} token{left > 1 && 's'} disponible{left>1 && 's'}</span>
        </div>
      </div>
      <div className="flex flex-row justify-items-end">
      {isSelected ?
          <div className="flex flex-row context-end">
            <Check className="text-sm"/>
            <Cross className="text-sm"/>
          </div> 
        : 
          <Trash className="text-sm"/>
      }
      </div>
      
    </div>
  )
}

export default SearchItem;