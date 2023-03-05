/* eslint-disable indent */
import { createAutocomplete } from '@algolia/autocomplete-core'
import { motion } from 'framer-motion'
import useMenu from 'hooks/useMenu'
import { debounce } from 'lodash'
import { useMemo, useRef, useState } from 'react'
import AutocompleteItem from './AutocompleteItem'
import SearchSVG from './svg/SearchSVG'

const Search = ({ value, onChange }) => {
  const inputRef = useRef()
  const formRef = useRef()
  const panelRef = useRef()
  const { menu, isLoading } = useMenu()

  const [autocompleteState, setAutocompleteState] = useState({
    collection: [],
    isOpen: false,
    query: ''
  })

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: 'Search for a pizza',
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: 'products-pizza-menu',
            getItems: ({ query }) => {
              if (!!query) {
                return isLoading
                  ? []
                  : menu[0].filter((item) =>
                      item.name.toLowerCase().includes(query.toLowerCase())
                    )
              }
              return []
            }
          }
        ]
      }),
    [isLoading, menu]
  )

  const focusInput = () => {
    inputRef.current.focus()
  }

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  const debouncedOnChange = debounce((e) => {
    onChange(e.target.value)
  }, 500)

  return (
    <motion.form
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='search'
      {...formProps}
      ref={formRef}
    >
      <SearchSVG onClick={focusInput} />
      <input
        type='text'
        value={value}
        onChange={debouncedOnChange}
        ref={inputRef}
        {...inputProps}
      />
      {autocompleteState.isOpen && (
        <motion.section
          initial={{ opacity: 0, y: -10, pointerEvents: 'none' }}
          animate={{ opacity: 1, y: 0, pointerEvents: 'all' }}
          transition={{ duration: 0.5 }}
          className='autocomplete-panel'
          ref={panelRef}
          {...autocomplete.getPanelProps()}
        >
          {autocompleteState.collections.map((collection, index) => {
            const { items } = collection

            return (
              items.length > 0 && (
                <article key={'collection-' + index}>
                  <ul {...autocomplete.getListProps()}>
                    {items.map((item) => (
                      <AutocompleteItem
                        key={item.id}
                        {...item}
                      />
                    ))}
                  </ul>
                </article>
              )
            )
          })}
        </motion.section>
      )}
      {autocompleteState.isOpen === false &&
        autocompleteState.query.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='autocomplete-panel'
            ref={panelRef}
          >
            <p className='no-results'>No results found</p>
          </motion.section>
          // eslint-disable-next-line indent
        )}
    </motion.form>
  )
}

export default Search
