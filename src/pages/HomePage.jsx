import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"
import "./styles/HomePage.css"

const HomePage = () => {
  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    //e.target.inputTrainer.value
    dispatch(setTrainerG(inputTrainer.current.value))
    navigate("/pokedex")
  }

  return (
    <div className="home-container">
      <div className="home">
        <img className="home__img" src="/img/pokedextittle.png" alt="" />
        <h2 className="home__title">¡Hi trainer!</h2>
        <p className="home__description">
          To get started with the application, give me your trainer name 😉.
        </p>
        <form className="home__form" onSubmit={handleSubmit}>
          <input
            className="home__form-input"
            id="inputTrainer"
            ref={inputTrainer}
            type="text"
            placeholder="trainer's name"
          />
          <button className="home__form-btn">Gotta catch'em all!</button>
        </form>
      </div>
      <footer className="home__footer">
        <div className="home__rectangle-red"></div>
        <div className="home__rectangle-black"><img className="pokebola" src="/img/botonpokebola.svg" alt="" /></div>
      </footer>
    </div>
  )
}

export default HomePage
