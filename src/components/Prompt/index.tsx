import Send from '@/assets/svg/send.svg'
import Magic from '@/assets/svg/magic.svg'
import IconButton from '@/components/IconButton';

type PromptProps = {
  isMagic?: boolean,
}

const Prompt = ({isMagic = false}: PromptProps) => {
  return (
    <div className="relative w-full">
      <input className="border-2 border-slate-300 rounded h-8 w-full px-2 py-1" placeholder="Insertar prompt"/>
      <div className="absolute right-0.5 top-0.5">
        <IconButton>
          <Send className="text-sm"/>
        </IconButton>
        {isMagic &&
          <IconButton>
            <Magic className="text-sm"/>
        </IconButton>
        }
      </div>
    </div>
  )
}

export default Prompt;