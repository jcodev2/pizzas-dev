import MyLink from './myLink'
import HomeSVG from './svg/HomeSVG'
import LogoSVG from './svg/LogoSVG'
import MarketCarSVG from './svg/MarketCarSVG'
import UserSVG from './svg/UserSVG'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation-list'>
        <li className='navigation-list-item'>
          <MyLink href='/home'>
            <HomeSVG />
          </MyLink>
        </li>
        <li className='navigation-list-item'>
          <MyLink href='/menu'>
            <LogoSVG />
          </MyLink>
        </li>
        <li className='navigation-list-item'>
          <MyLink href='/account'>
            <UserSVG />
          </MyLink>
        </li>
        <li className='navigation-list-item'>
          <MyLink href='/cart'>
            <MarketCarSVG />
          </MyLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
