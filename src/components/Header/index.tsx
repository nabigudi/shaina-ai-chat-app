"use client";
import Sidebar from '../../assets/svg/sidebar.svg'
import SidebarSelected from '../../assets/svg/sidebar-selected.svg'
import ChevronLeft from 'src/assets/svg/chevron-left.svg'
import Settings from 'src/assets/svg/settings.svg'
import Button from '../Button'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { resetShowSidebar, updateShowSidebar } from '@/redux/slices/commonSlice'
import { selectCurrentUser, selectShowSidebar } from '@/redux/selectors/commonSelectors';
import { updateCurrentUser } from '@/redux/slices/commonSlice'
import { useRouter, usePathname } from 'next/navigation';
import { updateSelectedHistory } from '@/redux/slices/searchesSlice';
import Modal from '@/components/Modal';
import { useState } from 'react';

const Header = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const currentSidebar = useAppSelector(selectShowSidebar);
  const router = useRouter();
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const backButtonAction = () => {
    dispatch(updateCurrentUser(''));
    dispatch(updateSelectedHistory(undefined));
    dispatch(resetShowSidebar());
    router.push('/')
  }

  return ( 
    <div className="bg-orange-500 h-[80px] px-10 flex justify-between">
      {pathname !== '/' &&
        <>
          <div className="flex items-center">
            <div className="mr-3">
              <Button title={'Atrás'} onClick={backButtonAction}>
                <ChevronLeft className="text-sm"/> Atrás
              </Button>
            </div>

            <Button title={'Mostrar/Ocultar Sidebar'} onClick={()=>{dispatch(updateShowSidebar())}} isSelected={currentSidebar}>
              {currentSidebar ? <Sidebar className="text-sm"/> : <SidebarSelected className="text-sm"/>}
            </Button>
          </div>
          <div className="flex items-center">
            <Button title={'Configuración'} onClick={()=>{setOpenModal(true)}}>
              <Settings className="text-sm"/>
            </Button>
          </div>
          { openModal && 
            <Modal title="Configuración">
              <div className="flex flex-col p-5">
                <p className="pb-3 text-gray-500">Actualmente te encuentras logueado como: <span className="pb-3 text-gray-500 italic text-sm font-bold">{currentUser}</span></p>
                <div className="pt-3 w-full flex flex-row justify-end items-center">
                  <Button onClick={()=>setOpenModal(false)}> 
                    <div className="text-white flex items-center text-sm">
                      Volver
                    </div>
                  </Button>
                </div>
              </div>
            </Modal> 
          }
        </>
      }
    </div>
  )
}

export default Header;