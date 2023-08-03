import useFetch from "../../hooks/useFetch";
import React, { useState, useEffect } from "react";
import '../styles/SelectType.css'

const SelectType = ({ setSelectValue }) => {
  const url = "https://pokeapi.co/api/v2/type";
  const [types, getAllTypes] = useFetch(url);

  useEffect(() => {
    getAllTypes();
  }, []);


  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <select onChange={handleChange} className="custom-select">
      <option className='allpokemons' value="allPokemons">All Pokemons</option>
      {types?.results.map((type) => (
            <option key={type.url} value={type.url} className={type.name}>
                {type.name}
            </option>
        ))
      }
    </select>
  );
};

export default SelectType;
