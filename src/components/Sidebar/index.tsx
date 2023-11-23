import Box from '@/components/Box'
import Prompt from '@/components/Prompt';
import SearchItem from '@/components/SearchItem';
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { updateSelectedHistory } from '@/redux/slices/searchesSlice'
import { selectHistoryList, selectSelectedHistory } from '@/redux/selectors/searchesSelectors';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const historyList = useAppSelector(selectHistoryList);
  const selectedHistoryItem = useAppSelector(selectSelectedHistory);

  return ( 
    <aside className="w-full flex flex-col h-full">
      <div className="basis-1/4 mb-5 grow-0 shrink-0">
        <Box>
          <div className="p-5">
            <h1 className="text-2xl font-bold pb-3">Sistema</h1>
            <p className="text-gray-500 pb-3">Para conseguir una respuesta adecuada a tus necesidades, escribe un prompt para el sistema.</p>
            <Prompt />
          </div>
        </Box>
      </div>
      
      <div className="basis-3/4 grow">
        <Box title="Historial de Búsquedas">
          <div className="">
            <div className='overflow-auto h-[54dvh]'>
              {historyList.map((item) => 
               <SearchItem 
                  key={item.id} 
                  title={item.title} 
                  createdAt={item.createdAt} 
                  left={item.left} 
                  onClick={()=>dispatch(updateSelectedHistory(item))} 
                  isSelected={selectedHistoryItem ? selectedHistoryItem.id === item.id : false}
                />
            )}
            </div>
            
          </div>
        </Box>
      </div>
    </aside>
  )
}

export default Sidebar;