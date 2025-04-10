import { useState, useEffect } from "react";
import CardMorty from "../components/CardMorty";
import "./Morty.css";


const Morty = () => {
  const apiUrl = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data); // Verifica los datos que llegan
      setCharacters(data.results); // Accede a los resultados de los personajes
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="content2">
      <h1 className="text-center text-2xl mb-4">Personajes de Rick y Morty</h1>
      {loading ? (
        <p>Cargando personajes...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <CardMorty key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Morty;
