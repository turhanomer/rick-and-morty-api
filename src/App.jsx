import RickAndMortyApp from "./components/RickAndMortyApp";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Rick and Morty Characters</h1>
      </header>
      <main className="app-main">
        <RickAndMortyApp /> 
      </main>
    </div>
  );
};

export default App;

