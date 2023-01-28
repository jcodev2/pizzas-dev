const SearchSVG = (props) => (
  <svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
    ref={props.ref}
  >
    <g clipPath='url(#a)'>
      <path
        d='m14.867 15.8-4.534-4.533a6.336 6.336 0 0 1-4 1.4C2.867 12.667 0 9.8 0 6.333 0 2.867 2.867 0 6.333 0c3.467 0 6.334 2.867 6.334 6.333 0 1.534-.534 2.867-1.4 4l4.533 4.534-.933.933ZM6.333 1.333c-2.733 0-5 2.267-5 5 0 2.734 2.267 5 5 5 2.734 0 5-2.266 5-5 0-2.733-2.266-5-5-5Z'
        fill='#000'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default SearchSVG
