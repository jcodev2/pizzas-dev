import Image from 'next/image'
import loadingImage from '../public/loading-image.jpg'

const Loading = ({ message = 'Loading...' }) => {
  return (
    <section className='not-logged'>
      <h2>{message}</h2>
      <Image
        src={loadingImage}
        alt='Loading...'
        priority
      />
    </section>
  )
}

export default Loading
