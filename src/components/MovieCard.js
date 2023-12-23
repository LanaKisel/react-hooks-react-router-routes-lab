import React from 'react'

const MovieCard = ({ title, time, genres }) => {


    return (
        <div>
            {title}
            {time}
            {genres.map((genre) => {
                return <ul key={genre}>
                    <li>{genre}</li>
                </ul>
            })}
        </div>
    )
}

export default MovieCard
