import { useState, useEffect } from "react";
import { Card } from "./../../components/Card";
import { GET } from "./../../libs/http";
import styles from "./style.module.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

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
      <form className={styles.search}>
        <label htmlFor="search">Search by title or categories:</label>
        <input
          placeholder="ex: deadpool"
          type="text"
          name="search"
          autoComplete="off"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
      <ul className={styles.list}>
        {movies.map((movie, index) => (
          <Card>
            <li key={index}>{movie.title}</li>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Home;
