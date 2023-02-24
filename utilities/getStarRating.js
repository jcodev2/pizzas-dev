import { StarEmptySVG, StarHalfSVG, StarSVG } from 'components/svg/StarSVG'

const getStarRating = (rating) => {
  // Create an empty array to hold the star elements
  const stars = []
  // Get the number of full stars
  const full = Math.floor(rating)
  // Get the number of half stars
  const half = Math.ceil(rating - full)
  // Calculate the number of empty stars
  const empty = 5 - full - half

  // Loop over the number of full stars
  for (let i = 0; i < full; i++) {
    // Add a full star to the stars array
    stars.push(<StarSVG key={i} />)
  }

  // Loop over the number of half stars
  for (let i = 0; i < half; i++) {
    // Add a half star to the stars array
    stars.push(<StarHalfSVG key={i} />)
  }

  // Loop over the number of empty stars
  for (let i = 0; i < empty; i++) {
    // Add an empty star to the stars array
    stars.push(<StarEmptySVG key={i} />)
  }

  // Return the array of stars
  return stars
}

export default getStarRating
