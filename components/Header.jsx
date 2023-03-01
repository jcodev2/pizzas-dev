import MenuSVG from './svg/MenuSVG'
import User from './User'

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
        <User />
      </div>
    </header>
  )
}

export default Header
