import React from 'react'

export const Card = (pokemon) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <h2>{pokemon.id}</h2>
    </div>
  )
}
