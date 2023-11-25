type ButtonProps = {
  onClick?: () => void,
  isSelected?: boolean,
  children: React.ReactNode,
  title?: string,
}

const Button = ({onClick, isSelected = true, title, children}: ButtonProps) => {
  return ( 
    <button title={title} onClick={onClick} className={`${isSelected ? 'bg-orange-500 text-white' : 'bg-white text-orange-500 '} hover:bg-grey p-3 text-base rounded-md inline-flex items-center border-2 border-slate-100 cursor-pointer`}>
      {children}
    </button>
  )
}

export default Button;