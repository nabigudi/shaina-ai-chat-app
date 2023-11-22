"use client";
import Sidebar from '../../assets/svg/sidebar.svg'
import SidebarSelected from '../../assets/svg/sidebar-selected.svg'
import ChevronLeft from 'src/assets/svg/chevron-left.svg'
import Settings from 'src/assets/svg/settings.svg'
import Button from '../Button'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { updateShowSidebar } from '@/redux/slices/commonSlice'
import { selectShowSidebar } from '@/redux/selectors/commonSelectors';

const Header = () => {
  const dispatch = useAppDispatch();
  const currentSidebar = useAppSelector(selectShowSidebar);
  return ( 
    <div className="bg-orange-500 h-[10dvh] px-10 flex justify-between">
      <div className="flex items-center">
        <Button>
          <ChevronLeft className="text-sm"/> Atrás
        </Button>
        
        <Button onClick={()=>{dispatch(updateShowSidebar())}} isSelected={currentSidebar}>
          {currentSidebar ? <Sidebar className="text-sm"/> : <SidebarSelected className="text-sm"/>}
        </Button>
      </div>
      
      <div className="flex items-center">
        <Button>
          <Settings className="text-sm"/>
        </Button>
      </div>
    </div>
  )
}

export default Header;