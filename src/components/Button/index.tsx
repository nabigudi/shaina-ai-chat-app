type ButtonProps = {
  onClick?: () => void,
  isSelected?: boolean,
  children: React.ReactNode,
}

const Button = ({onClick, isSelected = true, children}: ButtonProps) => {
  return ( 
    <button onClick={onClick} className={`${isSelected ? 'bg-orange-500 text-white' : 'bg-white text-orange-500 '} hover:bg-grey p-3 text-base rounded-md inline-flex items-center border-2 border-slate-100 cursor-pointer`}>
      {children}
    </button>
  )
}

export default Button;