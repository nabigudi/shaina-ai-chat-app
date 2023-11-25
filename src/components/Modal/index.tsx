type ModalProps = {
  children: React.ReactNode,
  title?: string
}

const Modal = ({children, title}: ModalProps) => {
  return ( 
    <>
    <div className="bg-gray-900 w-full h-full absolute top-0 left-0 opacity-50"></div>
    <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
      <div className="w-10/12 z-40 shadow-md rounded-md divide-y divide-gray-300 bg-white md:w-[30rem]">
        <div className="text-lg font-bold p-5 text-black">
          {title}
        </div>
        {children}
      </div>
    </div>
    </>
  )
}

export default Modal;