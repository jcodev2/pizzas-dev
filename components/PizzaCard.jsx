import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import capitalizeFirstLetter from 'utilities/capitalizeFirstLetter'
import AddSVG from './svg/AddSVG'

const PizzaCard = ({ id, name, image, price }) => {
  const capitalizedName = capitalizeFirstLetter(name)

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className='pizza-card'
    >
      <Link
        href={`/menu/pizza/${id}`}
        passHref
      >
        <article className='pizza-card-image'>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            priority
          />
        </article>
        <article className='pizza-card-content'>
          <div className='pizza-card-content-words'>
            <h3>{capitalizedName}</h3>
            <p>$ {price}</p>
          </div>
          <div className='pizza-card-content-button'>
            <AddSVG />
          </div>
        </article>
      </Link>
    </motion.section>
  )
}

export default PizzaCard
