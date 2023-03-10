import { MenuContext } from 'context/menu'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import MenuSVG from './svg/MenuSVG'
import User from './User'

const Header = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext)
  const router = useRouter()

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='header'
      >
        <div
          className='menu'
          onClick={toggleMenu}
        >
          <MenuSVG />
        </div>
        <div className='logo'>
          <h1>Love Pizza</h1>
        </div>
        <div className='user'>
          <User />
        </div>
      </motion.header>

      <nav className={`overlay ${isOpen ? 'open' : ''}`}>
        <ul className='overlay-menu-list'>
          <li className='overlay-menu-list-item'>
            <Link
              href='/home'
              onClick={toggleMenu}
              className={router.pathname === '/home' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li className='overlay-menu-list-item'>
            <Link
              href='/menu'
              onClick={toggleMenu}
              className={router.pathname === '/menu' ? 'active' : ''}
            >
              Menu
            </Link>
          </li>
          <li className='overlay-menu-list-item'>
            <Link
              href='/account'
              onClick={toggleMenu}
              className={router.pathname === '/account' ? 'active' : ''}
            >
              Account
            </Link>
          </li>
          <li className='overlay-menu-list-item'>
            <Link
              href='/cart'
              onClick={toggleMenu}
              className={router.pathname === '/cart' ? 'active' : ''}
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
