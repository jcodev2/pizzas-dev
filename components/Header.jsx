import useUser from 'hooks/useUser'
import Image from 'next/image'
import MenuSVG from './svg/MenuSVG'
import UserSVG from './svg/UserSVG'

const Header = () => {
  const { user } = useUser()

  return (
    <header className='header'>
      <div className='menu'>
        <MenuSVG />
      </div>
      <div className='logo'>
        <h1>Love Pizza</h1>
      </div>
      <div className='user'>
        {user ? (
          <Image
            src={user.user_metadata.avatar_url}
            alt='user avatar'
            width={40}
            height={40}
          />
        ) : (
          <UserSVG />
        )}
      </div>
    </header>
  )
}

export default Header
