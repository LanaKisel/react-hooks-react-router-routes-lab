import React from 'react'

const DirectorsCard = ({name, movies}) => {
    const movie=movies.map(movie =>
    { return <ul key={movie}>
        <li>{movie}</li>
        </ul>
    })
  return (
    <div>
        {name}
        {movie}     
    </div>
  )
}

export default DirectorsCard
