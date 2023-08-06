import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import "./styles/PokeIdPage.css"

const PokeIdPage = () => {
  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  }, [id])

  console.log(pokemon)

  const firstType = pokemon?.types[0].type.name

  return (
    <div className="page-info">
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

      <article className="pokeinfo">
        <section className="pokeinfo__info">
          <header className={`pokeinfo__header ${firstType}-header`}>
            <img
              className="pokeinfo__image"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </header>

          <div className="pokeinfo__id-rectangle">
            <h2 className={`pokeinfo__id ${firstType}-text `}>
              # {pokemon?.id}
            </h2>
          </div>

          <div className="pokeinfo__name-countainer">
            <h2 className={`pokeinfo__name ${firstType}-text`}>
              {pokemon?.name}
            </h2>
            <hr className="pokeinfo__separator-name" />
          </div>

          <ul className="pokeinfo__weight-and-height">
            <li className="pokeinfo__item">
              <h3 className="pokeinfo__item-title">Peso</h3>
              <span className="pokeinfo__item-value">{pokemon?.weight}</span>
            </li>
            <li className="pokeinfo__item">
              <h3 className="pokeinfo__item-title">Altura</h3>
              <span className="pokeinfo__item-value">{pokemon?.height}</span>
            </li>
          </ul>

          <div className="pokeinfo__type-skills">
            <div className="pokeinfo__type">
              <h2 className="pokeinfo__subheading">Type</h2>
              <ul className="pokeinfo__type-list">
                {pokemon?.types.map(typeinfo => (
                  <li
                    key={typeinfo.type.url}
                    className={`pokeinfo__type-list-name ${typeinfo.type.name}-header`}
                  >
                    {typeinfo.type.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pokeinfo__skills">
              <h2 className="pokeinfo__subheading">Skills</h2>
              <ul className="pokeinfo__skills-list">
                {pokemon?.abilities.map(abilitiesinfo => (
                  <li
                    key={abilitiesinfo.ability.name}
                    className="pokeinfo__skill-item"
                  >
                    {abilitiesinfo.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <footer class="pokeinfo__footer">
            <div className="pokeinfo__footer-tittle">
              <h2 className="pokeinfo__footer__subheading">Stats</h2>
              <hr className="pokeinfo__separator" />
              <img
                className="pokeinfo__footer-img"
                src="/img/pokeballdetalle.svg"
                alt=""
              />
            </div>

            <div class="pokeinfo__statistics">
              <ul class="pokeinfo__stat-list">
                {pokemon?.stats.map(statinfo => (
                  <li key={statinfo.stat.url} class="pokeinfo__stat-item">
                    <div className="pokeinfo__statistics-name-value">
                      <div className="pokeinfo__name-value">
                        <h3 class="pokeinfo__stat-name">
                          {statinfo.stat.name}
                        </h3>
                        <span class="pokeinfo__stat-number">
                          {statinfo.base_stat}/160
                        </span>
                      </div>

                      <div class="pokeinfo__stat-bar-container">
                        <div class="pokeinfo__stat-bar">
                          <span
                            class="pokeinfo__stat-value"
                            style={{
                              width: `${(statinfo.base_stat / 160) * 100}%`,
                            }}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </section>

        <section className="pokeinfo__movements">
          <div className="pokeinfo__movements-tittle">
            <h1 className="pokeinfo__movements-name">Movements</h1>
            <hr className="pokeinfo__separator"/>
            <img
                className="pokeinfo__footer-img"
                src="/img/pokeballdetalle.svg"
                alt=""
              />
          </div>
          <ul className="pokeinfo-attacks">
            {pokemon?.moves.map(moveinfo => (
              <li key={moveinfo.move.url} className="pokeinfo__movement-item">
                <span className="pokeinfo__movement-name">
                  {moveinfo.move.name}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  )
}

export default PokeIdPage
