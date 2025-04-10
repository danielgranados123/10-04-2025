import { useState, useEffect } from 'react'
import DragonBallCard from '../components/CardDragonBall'
import "./DragonBall.css";

const DragonBall = () => {
  const apiUrl = 'https://dragonball-api.com/api/characters';
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCharacters = async () => {
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)
      setCharacters(data.items)
    } catch (error) {
      console.error('Error fetching characters:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <div className='content1'>
      <h1 className="text-center text-2xl">Personajes</h1>
      {loading ? (
        <p>Cargando personajes...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <DragonBallCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  )
}

export default DragonBall
