type IconButtonProps = {
  children: React.ReactNode,
}

const IconButton = ({children}: IconButtonProps) => {
  return ( 
    <button className= "p-1 text-base inline-flex items-center cursor-pointer">
      {children}
    </button>
  )
}

export default IconButton;