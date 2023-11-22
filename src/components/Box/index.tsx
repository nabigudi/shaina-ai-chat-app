type BoxProps = {
  children: React.ReactNode,
  title?: string
}

const Box = ({children, title}: BoxProps) => {
  return ( 
    <div className="h-full shadow-md rounded-md divide-y divide-gray-300 bg-white">
      {title &&
        <div className="text-lg font-bold p-5">
          {title}
        </div>
      }
    <div>{children}</div>
    </div>
  )
}

export default Box;