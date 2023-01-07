import MenuSVG from './svg/MenuSVG'
import UserSVG from './svg/UserSVG'

const Header = () => {
  return (
    <header className='header'>
      <div className='menu'>
        <MenuSVG />
      </div>
      <div className='logo'>
        <h1>Love Pizza</h1>
      </div>
      <div className='user'>
        <UserSVG />
      </div>
    </header>
  )
}

export default Header
