import { useState, useEffect } from "react";
import { getCharacters } from "../../api/api";
import "../index.css"
import ClipLoader from "react-spinners/ClipLoader";


const RickAndMortyApp = () => {
  const [characters, setCharacters] = useState([]); //Characters
  const [filters, setFilters] = useState({ name: "", status: "" }); // Filters
  const [page, setPage] = useState(1); //Page Numbers
  const [isLoading, setIsLoading] = useState(false); //Loading Pages

  // Fetch from API
  const fetchCharacters = async () => {
    setIsLoading(true); 
    try {
      const response = await getCharacters(page, filters);
      setCharacters(response.data.results); // save the characters from state
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Reload characters when the page and filters change again
  useEffect(() => {
    fetchCharacters();
  }, [page, filters]);

  // Update filters
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Filtering field */}
      <div className="filters">
        <input
          type="text"
          name="name"
          placeholder="Filter by name"
          onChange={(e) => handleFilterChange("name", e.target.value)}
        />
        <select
          name="status"
          onChange={(e) => handleFilterChange("status", e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {/* Character list */}
      {isLoading ? (
        <div className="loading-overlay">
        <ClipLoader color="#ffffff" size={100} />
      </div>
      ) : (
        <ul className="character-list">
          {characters.map((character) => (
            <li className="character-item" key={character.id}>
              <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
              <p>Status: {character.status}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Change page */}
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default RickAndMortyApp;