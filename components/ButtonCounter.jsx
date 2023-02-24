/* eslint-disable react/jsx-curly-newline */
import { CartContext } from 'context/cart'
import { useContext } from 'react'

const ButtonCounter = ({
  id,
  name,
  ingredients,
  price,
  rating,
  weight,
  kilocalories,
  image
}) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext)
  const { quantity } = cart.find((item) => item.name === name) || {
    quantity: 0
  }

  return (
    <div className='counter'>
      {quantity > 0 ? (
        <button
          className='btn-a'
          onClick={() =>
            removeFromCart({
              id,
              name,
              ingredients,
              price,
              rating,
              weight,
              kilocalories,
              image
            })
          }
        >
          -
        </button>
      ) : (
        <button
          className='btn-a'
          disabled
        >
          -
        </button>
      )}
      <span className='btn-count'>{quantity}</span>
      <button
        className='btn-a'
        onClick={() => {
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
        }}
      >
        +
      </button>
    </div>
  )
}

export default ButtonCounter
