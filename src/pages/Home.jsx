import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Home/Footer'
import { setNameTrainer } from '../store/slices/trainerName.slice'
import './styles/Home.css'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setNameTrainer(e.target.name.value.trim()))
        //trim() remueve los espacios del inicio y el final del string
        e.target.name.value = '' //reset
        navigate('/pokedex')
    }

    return (
        <div className='home'>
            <div className="home-img-container">
                <img className='home-img' src="./images/pokedex.png" alt="" />
            </div>
            <h2 className='home-tittle'>¡HI TRAINER!</h2>
            <p>Give me your name to start</p>
            <form onSubmit={handleSubmit}>
                <input className='home-input' id="name" type="text" placeholder=' Enter your name' />
                <button className='home-btn'>Start</button>
            </form>
            <Footer />
        </div>
    )
}

export default Home