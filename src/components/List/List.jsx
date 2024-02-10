import { React, useState, useEffect } from 'react'
import './List.css'
import { Item } from '../Item/Item'

const List = () => {

    const [pokemons, setPokemons] = useState([])

    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

    const getPokemons = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setPokemons(data)
    }

    console.log(pokemons)

    useEffect(() => {
        getPokemons()
    }, [])

    return(
        <>
            <ul>
                <Item name={pokemons.name} img={pokemons.sprites.front_default}/>
            </ul>
        </>
    )
}

export { List }