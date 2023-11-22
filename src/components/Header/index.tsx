import Image from 'next/image'
import Sidebar from '../../assets/svg/sidebar.svg'
import ChevronLeft from 'src/assets/svg/chevron-left.svg'
import Settings from 'src/assets/svg/settings.svg'
import Button from '../Button'

const Header = () => {
  return ( 
    <div className="bg-orange-500 h-[10dvh] px-10 flex justify-between">
      <div className="flex items-center">
        <Button>
          <ChevronLeft className="text-sm"/> Atrás
        </Button>

        <Button>
          <Sidebar className="text-sm"/>
        </Button>
      </div>
      
      <div className="flex items-center">
        <Button>
          <Settings className="text-sm"/>
        </Button>
      </div>
    </div>
  )
}

export default Header;