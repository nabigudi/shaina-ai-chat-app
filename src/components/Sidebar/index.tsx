import Box from '@/components/Box'
import Image from 'next/image'
import NoResults from '@/assets/no-results.png';
import Prompt from '@/components/Prompt';
import SearchItem from '@/components/SearchItem';
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { updateSelectedHistory } from '@/redux/slices/searchesSlice'
import { selectHistoryList, selectSelectedHistory } from '@/redux/selectors/searchesSelectors';
import { selectCurrentUser } from '@/redux/selectors/commonSelectors';
import { useEffect, useState } from 'react';
import { HistorySearch } from '@/types/historyTypes';
import { updateShowSidebar } from '@/redux/slices/commonSlice';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const historyList = useAppSelector(selectHistoryList);
  const currentUser = useAppSelector(selectCurrentUser);
  const currentUserHistoryList = historyList.filter(item => item.createdBy === currentUser)
  const selectedHistoryItem = useAppSelector(selectSelectedHistory);  
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(()=>{
    setIsMobile(window.innerWidth <= 640)
  }, [])

  const selectItem = (item: HistorySearch) => {
    dispatch(updateSelectedHistory(item));
    isMobile && dispatch(updateShowSidebar());
  }

  return ( 
    <aside className="w-full flex flex-col h-full">
      <div className="basis-1/4 mb-5 grow-0 shrink-0">
        <Box>
          <div className="p-5">
            <h1 className="text-2xl font-bold pb-3">Sistema</h1>
            <p className="text-gray-500 pb-3">Para conseguir una respuesta adecuada a tus necesidades, escribe un prompt para el sistema.</p>
            <Prompt role='system' />
          </div>
        </Box>
      </div>
      
      <div className="basis-3/4 grow">
        <Box title="Historial de Búsquedas">
          <div>
            {currentUserHistoryList.length ? 
              <div className='overflow-auto lg:h-[54dvh] md:h-[52dvh] h-[50dvh]'>
                {currentUserHistoryList.map((item) => 
                <SearchItem 
                    key={item.id + item.title} 
                    item={item}
                    onClick={()=>selectItem(item)} 
                    isSelected={selectedHistoryItem ? selectedHistoryItem.id === item.id : false}
                  />
              )}
              </div>
            :
              <div className="p-10 text-md text-gray-500 font-bold italic flex flex-col items-center">
                <Image
                  src={NoResults}
                  alt="Picture of the author"
                  className="h-20 w-20 mb-10"
                />
                <p>No hay búsquedas realizadas con este usuario.</p>
                <p>Por favor haga una búsqueda nueva.</p>
              </div>
            }
          </div>
        </Box>
      </div>
    </aside>
  )
}

export default Sidebar;