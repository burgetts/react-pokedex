import React from 'react'
import Pokecard from './Pokecard'

const Pokedex = ({pokemon}) => (
    <>
        {pokemon.map(p => (
            <Pokecard key = {p.id} id = {p.id} name = {p.name} type = {p.type} baseExperience = {p.baseExperience} img = {p.img} />
        ))}
    </>
)

export default Pokedex;