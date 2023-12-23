import React from 'react'

const ActorsCard = ({ name, movies }) => {

    return (
        <div>
            {name}
            {movies.map(movie => {
                return <ul key={movie}>
                    <li>{movie}</li>
                </ul>
            })}

        </div>
    )
}

export default ActorsCard
