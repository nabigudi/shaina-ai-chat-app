"use client"
import Chat from '@/components/Chat'
import Sidebar from '@/components/Sidebar'
import { useAppSelector } from '@/redux/hooks';
import { selectCurrentUser, selectShowSidebar } from '@/redux/selectors/commonSelectors';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { push } = useRouter();
  const isShowSidebar = useAppSelector(selectShowSidebar);
  const currentUser = useAppSelector(selectCurrentUser);

  useEffect(()=>{
    if(!currentUser){
      push('/');
    }
  }, []);

  return (
    <main style={{height: 'calc(100dvh - 80px)'}} className="flex bg-gray-100 text-black flex-col items-center justify-between p-10">
      <div className="grid grid-cols-3 gap-5 h-full w-full">
        {isShowSidebar ?
          <>
            <div className={`col-span-3 flex transition-[display] duration-700 ease-in-out h-[85dvh] md:col-span-1`}>
              <Sidebar/>
            </div>
            <div className={`hidden md:col-span-2 md:grid`}>
              <Chat />
            </div>
          </>
        :
          <>
            <div className={`hidden transition-[display] duration-700 ease-in-out h-[85dvh]`}>
              <Sidebar/>
            </div>
            <div className={`col-span-3`}>
              <Chat />
            </div>
          </>
        }
      </div>
    </main>
  )
}
