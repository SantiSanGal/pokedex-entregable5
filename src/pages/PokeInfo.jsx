import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/shared/Header'
import './styles/PokeInfo.css'
import { PokeGraphStats } from '../components/PokeInfo/PokeGraphStats'

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

    // console.log(poke);

    if (hasError) {
        return <h1> The Pokemon With Name "{id}" not found🍕🍔🍟🌭🍿</h1>
    } else {
        return (
            <div className='pokeinfo'>
                <Header />
                <div className='pokeinfo__container'>
                    <div className='pokeinfo__header'>
                        <div className='pokeinfo__header-img'>
                            <img src={poke?.sprites.other['official-artwork'].front_default} alt="" />
                        </div>
                    </div>
                    <div className='pokeinfo__main'>

                        <div className='pokeinfo__main-id'>
                            <span className='pokeinfo-id'>
                                #{poke?.id}
                            </span>
                        </div>

                        <div className='pokeinfo__main-name'>
                            <div className='pokeinfo-name-hr'><hr /></div>
                            <h1>{poke?.name}</h1>
                            <div className='pokeinfo-name-hr'><hr /></div>
                        </div>

                        <div className='pokeinfo__main-height-weight'>
                            <div className='pokeinfo-height-weight'>
                                <p>Height</p>
                                <span>{poke?.height}</span>
                            </div>
                            <div className='pokeinfo-height-weight'>
                                <p>Weight</p>
                                <span>{poke?.weight}</span>
                            </div>
                        </div>

                        <div className='pokeinfo__main-type-abilities'>
                            <div className='pokeinfo-type-abilities'>
                                <p>Types</p>
                                <div>
                                    {
                                        poke?.types.map(type => (
                                            <span key={type.type.name}>{type.type.name}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='pokeinfo-type-abilities'>
                                <p>Abilities</p>
                                <div>
                                    {
                                        poke?.abilities.map(abilitie => (
                                            <span key={abilitie.ability.name}>{abilitie.ability.name}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='pokeinfo__stats'>
                            <PokeGraphStats poke={poke}/>
                            {/* <p>Stats</p>
                            {
                                poke?.stats.map(stat => (
                                    <span key={stat.stat.name}>{stat.stat.name} {stat.base_stat}</span>
                                ))
                            } */}
                        </div>



                    </div>
                </div>

                <div className='pokeinfo__movements'>
                    {
                        poke?.moves.map(move => (
                            <span key={move.move.name}>{move.move.name}</span>
                        ))
                    }
                </div>

            </div>
        )
    }
}

export default PokeInfo