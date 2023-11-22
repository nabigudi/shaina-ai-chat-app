import Box from '@/components/Box'
import Prompt from '@/components/Prompt';
import SearchItem from '@/components/SearchItem';

const Sidebar = () => {
  return ( 
    <aside className="w-full h-100 flex flex-col content-stretch">
      <div className="mb-5">
        <Box>
          <div className="p-5">
            <h1 className="text-2xl font-bold pb-3">Sistema</h1>
            <p className="text-gray-500 pb-3">Para conseguir una respuesta adecuada a tus necesidades, escribe un prompt para el sistema.</p>
            <Prompt />
          </div>
        </Box>
      </div>
      
      <div className="h-full">
        <Box title="Historial de Búsquedas">
          <div className="w-full">
            <SearchItem title="User Flow" createdAt="2023-11-2" left={24} isSelected={true}/>
            <SearchItem title="User Persona" createdAt="2023-11-21" left={1} isSelected={false}/>
          </div>
        </Box>
      </div>
    </aside>
  )
}

export default Sidebar;