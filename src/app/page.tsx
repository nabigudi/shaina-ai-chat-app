"use client"
import Send from '@/assets/svg/send.svg'
import { updateCurrentUser } from '@/redux/slices/commonSlice'
import { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch(); 
  const router = useRouter()

  const onClickAction = () => {
    dispatch(updateCurrentUser(value));
    router.push('/search')
  }

  return (
    <main className="flex h-[90dvh] bg-gray-100 text-black flex-col items-center justify-center p-10">
      <div className="h-auto shadow-md rounded-md divide-y divide-gray-300 bg-white sm:w-full md:w-2/3 lg:w-1/4">
        <div className="text-lg font-bold p-5">
          Bienvenido a Renaiss AI Chat
        </div>
        <div className="px-10 py-5">
          <p className="text-gray-500 pb-3">Para ingresar te pedimos que ingreses tu nombre:</p>
          <p className="text-gray-500 text-sm font-bold pb-3 italic">(Hack: los usuarios José y Ana Clara tienen búsquedas realizadas)</p>
          
          <div className="relative w-full">
            <input type="text" value={value} className="border-2 border-slate-300 rounded h-8 w-full px-2 py-1" placeholder="Ingresa tu nombre" 
              onChange={e => {setValue(e.currentTarget.value)}} 
              onKeyDown={(e) =>{if (e.key === 'Enter' && value) {
                e.preventDefault();
                e.stopPropagation();
                onClickAction();
              }}}/>
            <div className="absolute right-0.5 top-0.5">
            <button className= "p-1 text-base inline-flex items-center cursor-pointer" onClick={()=>onClickAction()}>
              <Send className="text-sm"/>
            </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
