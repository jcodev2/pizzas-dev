import Image from 'next/image'
import Link from 'next/link'

const AutocompleteItem = ({ name, price, id, image }) => {
  return (
    <Link href={`/menu/pizza/${id}`}>
      <li>
        <Image
          height={48}
          width={48}
          src={image}
          alt={name}
          priority
        />

        <div className='item-details'>
          <h3>{name}</h3>
          <p>$ {price}</p>
        </div>
      </li>
    </Link>
  )
}

export default AutocompleteItem
