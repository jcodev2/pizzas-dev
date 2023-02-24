import { createAutocomplete } from '@algolia/autocomplete-core'
import useMenu from 'hooks/useMenu'
import { debounce } from 'lodash'
import { useMemo, useRef, useState } from 'react'
import AutocompleteItem from './AutocompleteItem'
import SearchSVG from './svg/SearchSVG'

const Search = ({ value, onChange }) => {
  const inputRef = useRef()
  const formRef = useRef()
  const panelRef = useRef()
  const [menu] = useMenu()

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
                return menu.filter((item) =>
                  item.name.toLowerCase().includes(query.toLowerCase())
                )
              }
              return []
            }
          }
        ]
      }),
    [menu]
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
    <form
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
        <section
          className='autocomplete-panel'
          ref={panelRef}
          {...autocomplete.getPanelProps()}
        >
          {autocompleteState.collections.map((collection, index) => {
            const { items } = collection

            return (
              items.length > 0 && (
                <article key={`section-${index}`}>
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
        </section>
      )}
      {autocompleteState.isOpen === false &&
        autocompleteState.query.length > 0 && (
          <section
            className='autocomplete-panel'
            ref={panelRef}
          >
            <p className='no-results'>No results found</p>
          </section>
          // eslint-disable-next-line indent
        )}
    </form>
  )
}

export default Search
