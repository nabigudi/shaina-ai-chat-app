type IconButtonProps = {
  onClick: () => void,
  title?: string,
  children: React.ReactNode,
}

const IconButton = ({onClick, title, children}: IconButtonProps) => {
  return ( 
    <button title={title} className= "p-1 text-base inline-flex items-center cursor-pointer" onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton;