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

    const [pokeInit, setPokeInit] = useState(0)
    const [pokeLast, setPokeLast] = useState(10)

    useEffect(() => {
        if (selectValue == 'allpokemons') {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=${pokeLast}&offset=${pokeInit}`
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
    }, [selectValue, pokeInit])

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.pokemon.value.trim().toLowerCase()
        navigate(`/pokedex/${inputValue}`)
        e.target.pokemon.value = ''
    }

    const handlePaginationPrev = e =>{
        pokeInit == 0 ? '' :
            setPokeInit(pokeInit-10);
            setPokeLast(pokeLast-10);
    }

    const handlePaginationNext = e =>{
        setPokeInit(pokeInit+10);
        setPokeLast(pokeLast+10);
    }

    console.log(pokemons);

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
            <div className='pokedex__pagination'>
                {
                    pokeInit == 0 ? '' :
                    <button className='pokedex__pagination-btn-prev' id='prev' onClick={handlePaginationPrev}>&lt;</button>
                }
                <button className='pokedex__pagination-btn-next' id='next' onClick={handlePaginationNext}>&gt;</button>
            </div>
        </div>
    )
}

export default Pokedex