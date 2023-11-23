"use client";
import Sidebar from '../../assets/svg/sidebar.svg'
import SidebarSelected from '../../assets/svg/sidebar-selected.svg'
import ChevronLeft from 'src/assets/svg/chevron-left.svg'
import Settings from 'src/assets/svg/settings.svg'
import Button from '../Button'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { updateShowSidebar } from '@/redux/slices/commonSlice'
import { selectShowSidebar } from '@/redux/selectors/commonSelectors';
import { updateCurrentUser } from '@/redux/slices/commonSlice'
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const dispatch = useAppDispatch();
  const currentSidebar = useAppSelector(selectShowSidebar);
  const router = useRouter();
  const pathname = usePathname();

  const backButtonAction = () => {
    dispatch(updateCurrentUser(''));
    router.push('/')
  }

  return ( 
    <div className="bg-orange-500 h-[80px] px-10 flex justify-between">
      {pathname !== '/' &&
        <>
          <div className="flex items-center">
            <Button onClick={backButtonAction}>
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
        </>
      }
    </div>
  )
}

export default Header;