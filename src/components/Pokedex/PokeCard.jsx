import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import './styles/PokeCard.css'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ pokemon }) => {

  const navigate = useNavigate()

  const [poke, setPoke] = useState()

  useEffect(() => {
    axios.get(pokemon.url)
      .then(res => setPoke(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleClick = () => {
    navigate(`/pokedex/${poke.id}`)
  }

  // console.log(poke?.types[0].type.name);

  return (
    <article onClick={handleClick} className={`pokecard border-${poke?.types[0].type.name}`}>
      <header className={`pokecard__header bg-${poke?.types[0].type.name}`}>
        <img className={`pokecard__header-img`} src={poke?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <div className='pokecard__header-space'></div>
      <h2 className={`pokecard__name name-${poke?.types[0].type.name}`}>{poke?.name}</h2>
      <ul className='pokecard__container-type'>
        {
          poke?.types.map(type => (
            <li className='pokecard__type' key={type.type.name}> {type.type.name} </li>
          ))
        }
      </ul>

      <hr className='pokecard__hr'/>

      <ul className='pokecard__container-stats'>
        {
          poke?.stats.map(stat => (
            <li className='pokecard__stats-data' key={stat.stat.url}>
              <span className='pokecard__stats-name'>{stat.stat.name}</span>
              <span className={`pokecard__stats-base color-${poke?.types[0].type.name}`}>{stat.base_stat}</span>
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default PokeCard