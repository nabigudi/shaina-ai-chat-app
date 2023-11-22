import Box from '@/components/Box'

type ChatBubble = {
  name: string,
  time: string,
  message: string,
  originUser: 'user' | 'ai',
}
const ChatBubble = ({name, time, message, originUser}: ChatBubble) =>{
  const origin = {
    user: 'text-green-600',
    ai: 'text-orange-400'
  }
  return ( 
    <div className="mx-5 my-5">
      <Box>
        <div className="p-5">
          <div className="divide-y-2">
            <div className="flex flex-row items-center pb-3">
              <h1 className={`text-lg font-bold mr-3 ${origin[originUser]}`}>{name}</h1>
              <span className="text-gray-500 text-xs">{time}</span>
            </div>
            <p className="text-gray-500 py-3">{message}</p>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default ChatBubble;