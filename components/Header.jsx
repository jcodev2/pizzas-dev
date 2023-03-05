import { motion } from 'framer-motion'
import MenuSVG from './svg/MenuSVG'
import User from './User'

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='header'
    >
      <div className='menu'>
        <MenuSVG />
      </div>
      <div className='logo'>
        <h1>Love Pizza</h1>
      </div>
      <div className='user'>
        <User />
      </div>
    </motion.header>
  )
}

export default Header
