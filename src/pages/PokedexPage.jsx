import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import "./styles/PokedexPage.css"
import SelectType from "../components/PokedexPage/SelectType"

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("")
  const [selectValue, setSelectValue] = useState("allPokemons")

  const trainer = useSelector(reducer => reducer.trainer)

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12"
  const [pokemons, getAllPokemons, getPokemonsByType] = useFetch(url)

  useEffect(() => {
    selectValue === "allPokemons"
      ? getAllPokemons()
      : getPokemonsByType(selectValue)
  }, [selectValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const cbFilter = poke => poke.name.includes(inputValue)

  return (
    <div class="pokedex">
      <header class="pokedex__header">
        <div className="pokedex__rectangle-red">
          <img
            className="pokedex__tittle"
            src="/img/pokedextittle.png"
            alt=""
          />
        </div>
        <div className="pokedex__rectangle-black">
          <img className="pokeball__ext" src="/img/externa.svg" alt="" />
          <img className="pokeball__int " src="/img/interna.svg" alt="" />
        </div>
      </header>
      <p class="pokedex__welcome">
        <span className="pokedex__name">Welcome {trainer}</span>, here you can
        find your favorite pokemon
      </p>
      <form class="pokedex__form" onSubmit={handleSubmit}>
        <input class="pokedex__search-input" ref={inputSearch} type="text" placeholder="pokemon name" />
        <button class="pokedex__serach-btn">Search</button>
        <SelectType setSelectValue={setSelectValue} />
      </form>
      <div class="pokedex__card-container">
        {pokemons?.results.filter(cbFilter).map(poke => (
          <PokeCard key={poke.url} url={poke.url} />
        ))}
      </div>
    </div>
  )
}

export default PokedexPage
