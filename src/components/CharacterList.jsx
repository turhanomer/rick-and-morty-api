const CharacterList = ({ characters }) => {
  //If there is no character, return empty
  if (!characters || characters.length === 0) {
    return <p>No characters found.</p>;
  }

  return (
    //Get character's information
    <ul className="character-list">
      {characters.map((character) => (
        <li key={character.id} className="character-item">
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
          <p>Status: {character.status}</p>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;