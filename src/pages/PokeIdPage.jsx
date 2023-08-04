import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"

const PokeIdPage = () => {
  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  }, [id])

  console.log(pokemon)

  return (
    <article>
      <img
        className="pokecard__image"
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <h2>{pokemon?.id}</h2>
      <h2>{pokemon?.name}</h2>
      <hr />
      <ul>
        <li>
          <h2>Peso</h2>
          <span>{pokemon?.weight}</span>
        </li>
        <li>
          <h2>altura</h2>
          <span>{pokemon?.height}</span>
        </li>
      </ul>
      <div className="type">
        <h2>Type</h2>
        <ul>
          {pokemon?.types.map(typeinfo => (
            <li key={typeinfo.type.url}>{typeinfo.type.name}</li>
          ))}
        </ul>
      </div>

      <div className="skills">
        <h2>skills</h2>
        <ul>
          {pokemon?.abilities.map(abilitiesinfo => (
            <li key={abilitiesinfo.ability.name}>
              {abilitiesinfo.ability.name}
            </li>
          ))}
        </ul>
      </div>
      <hr />
        <h2>Stats</h2>
      <ul>
        {pokemon?.stats.map(statinfo =>(
          <li key={statinfo.stat.url}>
            <h3>{statinfo.stat.name}:</h3>
            <span>{statinfo.base_stat}/150</span>

          </li>
        ))

        }
      </ul>
    </article>
  )
}

export default PokeIdPage
