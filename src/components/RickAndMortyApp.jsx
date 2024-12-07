import { useState, useEffect } from "react";
import { getCharacters } from "../../api/api";
import Filters from "./Table";
import CharacterList from "./CharacterList";
import Pagination from "./Pagination";

const RickAndMortyApp = () => {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({ name: "", status: "" });
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  //Fetch from data and error message
  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await getCharacters(page, filters);
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  //Reload process
  useEffect(() => {
    fetchCharacters();
  }, [page, filters]);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Update Page
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      {isLoading ? <p>Loading...</p> : <CharacterList characters={characters} />}
      <Pagination page={page} onPageChange={handlePageChange} />
    </div>
  );
};

export default RickAndMortyApp;