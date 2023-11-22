"use client"
import Chat from '@/components/Chat'
import Sidebar from '@/components/Sidebar'
import { useEffect, useState } from 'react';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  useEffect(()=>{
    console.log(isCollapsed);
  }, [isCollapsed]);

  return (
    <main className="flex h-[90dvh] bg-gray-100 text-black flex-col items-center justify-between p-10">
      <div className="grid grid-cols-3 gap-4 w-full h-full">
        <div className={`${isCollapsed ? 'hidden' : 'flex'} transition-[display] duration-700 ease-in-out`}>
          <Sidebar/>
        </div>
        <div className={`${isCollapsed ? 'col-span-3' : 'col-span-2'}`}>
          <Chat />
          <button onClick={()=>{setIsCollapsed(!isCollapsed)}}>Collapse</button>
        </div>
      </div>
    </main>
  )
}
