import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import PokeCard from "../components/PokedexPage/PokeCard"
import "./styles/PokedexPage.css"
import SelectType from "../components/PokedexPage/SelectType"
import Pagination from "../components/Pagination/Pagination"

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("")
  const [selectValue, setSelectValue] = useState("allPokemons")
  const [currentPage, setCurrentPage] = useState(1)

  const trainer = useSelector(reducer => reducer.trainer)

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1300"
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
    setCurrentPage(1)
    setSelectValue('allPokemons')
  }
  
  const cbFilter = poke => (inputValue ? poke.name.includes(inputValue) : true)

  // Obtener la longitud de los pokemons después de aplicar el filtro
  const filteredPokemons = pokemons?.results.filter(cbFilter) || []
  const totalResidents = filteredPokemons.length

  // Calcular el número total de páginas después de aplicar el filtro
  const [residentsPerPage, setResidentsPerPage] = useState(6)
  // const residentsPerPage = 
  const totalPages = Math.ceil(totalResidents / residentsPerPage)

  // Calcular el índice de inicio y fin de los pokemons en la página actual después de aplicar el filtro
  const endIndex = (currentPage) * residentsPerPage
  const startIndex =  endIndex - residentsPerPage

  // Obtener los pokemons que se mostrarán en la página actual después de aplicar el filtro y paginación
  const pokemonsToShow = filteredPokemons.slice(startIndex, endIndex)

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  return (
    <div className="pokedex">
      <header className="pokedex__header">
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
      <p className="pokedex__welcome">
        <span className="pokedex__name">Welcome {trainer}</span>, here you can
        find your favorite pokemon
      </p>
      <form className="pokedex__form" onSubmit={handleSubmit}>
        <input
          className="pokedex__search-input"
          ref={inputSearch}
          type="text"
          placeholder="pokemon name"
        />
        <button className="pokedex__serach-btn">Search</button>

        <SelectType
          setSelectValue={setSelectValue}
          setInputValue={setInputValue}
          inputSearch={inputSearch}
          selectValue={selectValue}
          setResidentsPerPage={setResidentsPerPage}
        />
      </form>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pagesToShow={10}
      />

      <div className="pokedex__card-container">
        {pokemonsToShow.map(poke => (
          <PokeCard key={poke.url} url={poke.url} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pagesToShow={10}
      />
    </div>
  )
}

export default PokedexPage
