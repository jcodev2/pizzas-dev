import { CartContext } from 'context/cart'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import addZero from 'utilities/addZero'
import capitalizeFirstLetter from 'utilities/capitalizeFirstLetter'
import getStarRating from 'utilities/getStarRating'
import ButtonCounter from './ButtonCounter'
import CaloriesSVG from './svg/CaloriesSVG'
import LogoSVG from './svg/LogoSVG'

const Pizza = ({
  id,
  name,
  ingredients,
  price,
  rating,
  weight,
  kilocalories,
  image
}) => {
  const starRating = getStarRating(rating)
  const capitalizedName = capitalizeFirstLetter(name)
  const numRating = addZero(rating)
  const { addToCart } = useContext(CartContext)

  return (
    <>
      <Head>
        <title>{capitalizedName} - Pizza</title>
        <meta
          name='description'
          content={ingredients}
        />
        <meta
          name='keywords'
          content={ingredients}
        />
      </Head>
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
      />
      <article className='pizza-content'>
        <header className='pizza-header'>
          <h2>{capitalizedName}</h2>
          <p>$ {price}</p>
        </header>
        <aside className='pizza-body'>
          <div className='rating'>
            {starRating.map((star, index) => (
              <span key={index}>{star}</span>
            ))}
            <span className='span-bl'>{numRating}</span>
            <span className='reviews'>reviews</span>
          </div>
          <p>
            <span className='span-bl'>Ingredients: </span>
            {ingredients}
            <span className='span-bl'>.</span>
          </p>
          <div className='pizza-info'>
            <div className='pizza-info-item'>
              <LogoSVG />
              <div className='pizza-info-item-text'>
                {weight}
                <span className='span-bl'> kg</span>
              </div>
            </div>
            <div className='pizza-info-item'>
              <CaloriesSVG />
              <div className='pizza-info-item-text'>
                {kilocalories}
                <span className='span-bl'> kcal/100g</span>
              </div>
            </div>
          </div>
        </aside>
        <footer className='pizza-footer'>
          <ButtonCounter
            name={name}
            ingredients={ingredients}
            price={price}
            rating={rating}
            weight={weight}
            kilocalories={kilocalories}
            image={image}
            id={id}
          />
          <button
            className='btn'
            onClick={
              () =>
                addToCart({
                  name,
                  ingredients,
                  price,
                  rating,
                  weight,
                  kilocalories,
                  image,
                  id
                })
              // eslint-disable-next-line react/jsx-curly-newline
            }
          >
            Add to cart
          </button>
        </footer>
      </article>
    </>
  )
}

export default Pizza
