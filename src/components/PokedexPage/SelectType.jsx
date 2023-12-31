import useFetch from "../../hooks/useFetch"
import React, { useState, useEffect } from "react"
import "../styles/SelectType.css"

const SelectType = ({
  setSelectValue,
  setInputValue,
  inputSearch,
  selectValue,
  setResidentsPerPage,
}) => {
  const url = "https://pokeapi.co/api/v2/type"
  const [types, getAllTypes] = useFetch(url)

  useEffect(() => {
    getAllTypes()
  }, [])

  const handleChange = e => {
    setSelectValue(e.target.value)
    setInputValue("")
    inputSearch.current.value = ""
  }

  const handleChangeCard = e => {
    setResidentsPerPage(e.target.value)
  }

  return (
    <div className="custom-container">
      <select
        value={selectValue}
        onChange={handleChange}
        className="custom-select"
      >
        <option className="allpokemons" value="allPokemons">
          All Pokemons
        </option>
        {types?.results.map(type => (
          <option key={type.url} value={type.url} className={type.name}>
            {type.name}
          </option> 
        ))}
      </select>
      <h3 className="card-num"># Card</h3>
      <span>
        <select  className="custom__card-number" onChange={handleChangeCard}>
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="15">15</option>
        </select>
      </span>
    </div>
  )
}



export default SelectType
