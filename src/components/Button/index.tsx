type ButtonProps = {
  children: React.ReactNode,
}

const Button = ({children}: ButtonProps) => {
  return ( 
    <button className="bg-orange-500 hover:bg-grey p-3 text-base rounded-md inline-flex items-center border-2 border-slate-100 mr-3">
      {children}
    </button>
  )
}

export default Button;