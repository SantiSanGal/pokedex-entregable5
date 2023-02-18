import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/shared/Header'

const PokeInfo = () => {

    const { id } = useParams()
    //trae el id de la url, enviada como parámetro desde pokedex/pokecard

    const [poke, setPoke] = useState()
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(url)
            .then(res => {
                setPoke(res.data)
                setHasError(false)
            })
            .catch(err => {
                setHasError(true)
                console.log(err)
            })
    }, [])

    if (hasError) {
        return <h1> The Pokemon With Name "{id}" not found🍕🍔🍟🌭🍿</h1>
    } else {
        return (
            <div>
                <Header/>
                <img src={poke?.sprites.other['official-artwork'].front_default} alt="" />
                <h1>{poke?.name}</h1>
            </div>
        )
    }
}

export default PokeInfo