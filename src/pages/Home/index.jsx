import { useState, useEffect } from "react";
import { GET } from "./../../libs/http";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await GET("/movies");
    setMovies(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <h1>Edgemony Movie DataBase</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
