import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";

const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from api
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1");
      const data = await response.json();
      setMovies(data.results);
    };

    fetchData();
  }, []);

  // Function to handle input search submit
  const handleInputSubmit = (e) => {
    e.preventDefualt();

    const fetchSearch = async () => {
      const response = await fetch(searchApi + searchTerm);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchSearch();
  };

  // function to handle input search search change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Header handleInputSubmit={handleInputSubmit} handleInputChange={handleInputChange} />
      <MovieGrid movieItem={movies} />
    </div>
  );
}

export default App;
