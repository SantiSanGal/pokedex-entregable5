import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PokeCard from '../components/Pokedex/PokeCard'
import { useNavigate } from 'react-router-dom'
import SelectTypes from '../components/Pokedex/SelectTypes'
import Header from '../components/shared/Header'
import './styles/Pokedex.css'

const Pokedex = () => {
    const { nameTrainer } = useSelector(state => state)

    const navigate = useNavigate()

    const [pokemons, setPokemons] = useState()
    const [selectValue, setSelectValue] = useState('allpokemons')

    useEffect(() => {
        if (selectValue == 'allpokemons') {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
            axios.get(url)
                .then(res => setPokemons(res.data))
                .catch(err => console.log(err))
        } else {
            axios.get(selectValue)
                .then(res => {
                    const results = res.data.pokemon.map(e => e.pokemon)
                    setPokemons({ results })
                })
                .catch(err => console.log(err))
        }
    }, [selectValue])

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.pokemon.value.trim().toLowerCase()
        navigate(`/pokedex/${inputValue}`)
        e.target.pokemon.value = ''
    }

    return (
        <div className='pokedex'>
            <Header />
            <h1 className='pokedex__title'><span className='pokedex__title-name'>Hi {nameTrainer} </span>, here find your favourite pokemon.</h1>
            <div className="pokedex__container-form-select">
                <form className='pokedex__container-form' onSubmit={handleSubmit}>
                    <input className='pokedex__container-form-input' id='pokemon' type="text" />
                    <button className='pokedex__container-form-btn'>Search</button>
                </form>
                <SelectTypes className="pokedex__container-select" setSelectValue={setSelectValue} />
            </div>
            <div className='pokedex-pokemon'>
                {
                    pokemons?.results.map(pokemon => (
                        <PokeCard
                            key={pokemon.url}
                            pokemon={pokemon}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Pokedex