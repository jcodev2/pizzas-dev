const { useEffect, useState, useMemo } = require('react')

const GoTop = () => {
  const [show, setShow] = useState(false)

  const handleScroll = useMemo(() => {
    return () => {
      setShow(window.pageYOffset > 200)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className='go-top'
      onClick={scrollTop}
      style={{ visibility: show ? 'visible' : 'hidden', opacity: show ? 1 : 0 }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
      >
        <path
          stroke='none'
          d='M0 0h24v24H0z'
          fill='none'
        />
        <path d='M12 5l0 14' />
        <path d='M16 9l-4 -4' />
        <path d='M8 9l4 -4' />
      </svg>
    </div>
  )
}

export default GoTop
