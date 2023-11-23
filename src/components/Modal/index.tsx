import Button from "../Button";

type ModalProps = {
  children: React.ReactNode,
  title?: string
}

const Modal = ({children, title}: ModalProps) => {
  return ( 
    <>
    <div className="bg-gray-900 w-full h-full absolute top-0 left-0 opacity-50"></div>
    <div className="w-[30rem] z-40 shadow-md rounded-md divide-y divide-gray-300 bg-white absolute top-28 left-auto">
      <div className="text-lg font-bold p-5">
        {title}
      </div>
      {children}
    </div>
    </>
  )
}

export default Modal;