import { useEffect, useState, useCallback } from "react";
import "./App.css";

import logo from "./assets/2.png";
import lupa from "./assets/Lupa2.0.png";

import Rodape from "./components/Rodape/Rodape";
import MovieCard from "./components/MovieCard/MovieCard";
import Switch from "./components/Switch/Switch";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  //Utilizando uma CHAVE de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Criando a conexão com a API e trazendo informações
  const searchMovies = useCallback(
    async (title) => {
      const response = await fetch(`${apiUrl}&s=${title}`);
      const data = await response.json();

      //Alimentando a variavel movies
      setMovies(data.Search);
    },
    [apiUrl]
  );

  useEffect(() => {
    (async () => {
      await searchMovies("Hulk"); // termo para pesquina ao carregar o site
    })();
  }, [searchMovies]);

  const trocaTema = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div id="App" className={darkMode ? "dark" : "light"}>
      <Switch troca={trocaTema} isLight={!darkMode} />
      
      <img
        id="Logo"
        src={logo}
        alt="Logotipo do serviço de streaming Devflix, com letras vermelhas e fundo preto, promovendo conteúdo de séries, filmes e entretenimento online." />

      <div className="search">
        <input
          onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise por filmes" />
        <img
          onClick={() => searchMovies(search)}
          src={lupa}
          alt="Botão de ação para pesquisa!" />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} apiUrl={apiUrl} />
          ))}
        </div>
      ) : (
        <h2 className="empty">😢 Filme não encontrado 😢</h2>
      )}

      <Rodape link={"https://github.com/MaykThomazete"}>MaykThomazete</Rodape>
    </div>
  );
}

export default App;
