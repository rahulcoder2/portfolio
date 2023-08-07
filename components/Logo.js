import Image from 'next/image'
import {logo} from '../public/page'

function Logo(props) {
  return (
    <>
      <Image
        src={logo}
        width={50}
        height={50}
        alt='logo'
        className='rounded-full object-cover'
      />
    </>
  )
}

export default Logo;