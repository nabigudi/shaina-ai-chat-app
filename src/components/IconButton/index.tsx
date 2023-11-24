type IconButtonProps = {
  onClick: () => void,
  children: React.ReactNode,
}

const IconButton = ({onClick, children}: IconButtonProps) => {
  return ( 
    <button className= "p-1 text-base inline-flex items-center cursor-pointer" onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton;