import { useRef } from 'react'
import SearchSVG from './svg/SearchSVG'

const Search = ({ value, onChange }) => {
  const inputRef = useRef()

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <form className='search'>
      <SearchSVG onClick={focusInput} />
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Search'
        ref={inputRef}
      />
    </form>
  )
}

export default Search
