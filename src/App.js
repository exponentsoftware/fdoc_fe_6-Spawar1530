import './App.css';
import { movies } from "./Data"
import Poster from "./components/Poster"

function App() {
  return (
    <div className="App">
      <Poster movies = {movies} />
    </div>
  );
}

export default App;
