import Image from 'next/image'
import ChevronLeft from 'src/assets/svg/chevron-left.svg'
import CirclePlus from 'src/assets/svg/circle-plus.svg'
import Button from '../Button'
import Prompt from '@/components/Prompt'
import ChatBubble from '@/components/ChatBubble'

const Chat = () => {
  return ( 
    <div className="rounded-lg border-slate-200 border-2 divide-y-2 h-full flex flex-col">
      <div className='flex flex-row items-center justify-between bg-white px-5 py-3 rounded-t-lg'>
        <h3 className="font-bold text-lg">OdamaChat</h3>
        <Button>
          <div className="text-white flex items-center text-sm">
            <CirclePlus className="mr-1"/>
            Nueva Búsqueda
          </div>
        </Button>
      </div>
      <div className="bg-gray-100 flex flex-1 flex-col">
        <ChatBubble name={'Ana Clara'} time={'05:00 pm'} message={'Necesito los archivos que te pedí ayer.'} originUser={'user'} />

        <ChatBubble name={'OdamaChat'} time={'05:00 pm'} message={'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '} originUser={'ai'} />
      </div>
      <div className="bg-white flex p-5 rounded-b-lg">
        <Prompt isMagic/>
      </div>
    </div>
  )
}

export default Chat;