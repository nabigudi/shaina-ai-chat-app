import React, { useEffect, useState } from "react";;
import CirclePlus from 'src/assets/svg/circle-plus.svg';
import Button from '@/components/Button';
import Prompt from '@/components/Prompt';
import ChatBubble from '@/components/ChatBubble';
import Modal from "@/components/Modal";
import moment from 'moment';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { createNewHistory, getHistoryChat } from '@/redux/slices/searchesSlice';
import { selectCurrentUser } from '@/redux/selectors/commonSelectors';
import { selectSelectedHistory, selectSelectedHistoryChat } from "@/redux/selectors/searchesSelectors";

const Chat = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const selectedSearch = useAppSelector(selectSelectedHistory);
  const selectedHistoryChat = useAppSelector(selectSelectedHistoryChat);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState<string>('');

  const closeModal = () => {
    setOpenModal(false);
    setValueSearch('');
  }
  const createNewSearch = () => {
    const newSearch = {
      id: Math.random(),
      title: valueSearch,
      createdAt: moment().format('YYYY-MM-DD'),
      left: 1000,
      createdBy: currentUser,
      history: [],
    }
    dispatch(createNewHistory(newSearch));
    closeModal();
  }

  useEffect(()=>{
    dispatch(getHistoryChat());
  }, [dispatch, selectedSearch]);

  return ( 
    <>
     {selectedSearch ?
        <div className="rounded-lg border-slate-200 border-2 divide-y-2 h-full flex flex-col">
          <div className='flex flex-row items-center justify-between bg-white px-5 py-3 rounded-t-lg'>
            <h3 className="font-bold text-lg">OdamaChat</h3>
            <Button onClick={()=>setOpenModal(true)}> 
              <div className="text-white flex items-center text-sm">
                <CirclePlus className="mr-1"/>
                Nueva Búsqueda
              </div>
            </Button>
          </div>
          <div className="bg-gray-100 flex flex-1 flex-col">
            {
              selectedHistoryChat?.map(item => <ChatBubble key={item.id} name={item.user} time={item.date} message={item.message} originUser={item.typeUser} />)
            }
          </div>
          <div className="bg-white flex p-5 rounded-b-lg">
            <Prompt isMagic/>
          </div>
        </div>
      :
        <div className="rounded-lg border-slate-200 border-2 divide-y-2 h-full flex flex-col">
          <div className='flex bg-white rounded-t-lg p-5'>
          </div>
          <div className="bg-gray-100 flex flex-1 flex-col">
            <div className="p-10 text-md text-gray-500 font-bold italic flex flex-col items-center">
              <p>No se ha seleccionado una búsqueda para ver el chat con la AI.</p>
              <p>Por favor seleccione una de la lista en el barra lateral.</p>
            </div>
          </div>
          <div className="bg-white flex p-5 rounded-b-lg">
            
          </div>
        </div>
        
      }
      
      { openModal && 
        <Modal title="Crear una nueva búsqueda">
          <div className="flex flex-col p-5">
            <p className="pb-3 text-gray-500">Defina la nueva busqueda y esa será el título con la que podrá buscarla en el historial:</p>
            <input className="border-2 border-slate-300 rounded h-8 w-full px-2 py-1" placeholder="Insertar prompt" value={valueSearch} onChange={(e) => setValueSearch(e.currentTarget.value)}/>
            <div className="pt-3 w-full flex flex-row justify-end items-center">
              <Button  onClick={createNewSearch}> 
                <div className="text-white flex items-center text-sm">
                  Crear Nueva Búsqueda
                </div>
              </Button>
              <div className="text-gray-500" onClick={()=>closeModal()}>Cancel</div>
            </div>
          </div>
        </Modal> 
      }
    </>
  )
}

export default Chat;