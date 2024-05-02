import { useState } from "react"
import { Link } from "react-router-dom"
import "./Pokedex.css"
import { pokeData } from "../../data/pokeData"
console.log(pokeData)


const Pokedex = () => {
  const displayCount = 10
  const [currIdx, setCurrIdx] = useState(0)
  function filterPokemonData(newIndex) {
    const filteredPokemon = pokeData.filter((pokemon, index) => index >= newIndex && index < newIndex + displayCount)
    return filteredPokemon
  }
  const [displayedPokemon, setDisplayedPokemon] = useState(filterPokemonData(0))

  const handleIncreaseCurrIdx = () => {
    const newIdx = currIdx + displayCount
    if (newIdx > pokeData.length) return
    setCurrIdx(newIdx)
    const filteredPokemon = filterPokemonData(newIdx)
    setDisplayedPokemon(filteredPokemon)
  }

  const handleDecreaseCurrIdx = () => {
    const newIdx = currIdx - displayCount
    if (newIdx < 0 ) return
    setCurrIdx(newIdx)
    const filteredPokemon = filterPokemonData(newIdx)
    setDisplayedPokemon(filteredPokemon)
  }

  return ( 
    <>
      <h1>Pokemon List</h1>
      <div className="pagination-container">
        <button onClick={() => handleDecreaseCurrIdx()}>{'<'}</button>
        <button onClick={() => handleIncreaseCurrIdx()}>{'>'}</button>
      </div>
      <div className="num-results-container">
        Results ## - ## of {pokeData.length}
      </div>
      <div className="pokemon-container">
        {displayedPokemon.map(pokemon => 
          <Link to={`/pokemon/${pokemon.number - 1}`} key={pokemon._id}>
            <div className="pokemon-link">
              <img src={pokemon.image} alt="a fierce pokemon" />
              <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>  
            </div>
          </Link>
        )}
      </div>
    </>
  )
}

export default Pokedex