import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { searchTrendingMoviesFu } from "../../../api";
import s from "./HomePage.module.css";
import toast from "react-hot-toast";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const { results } = await searchTrendingMoviesFu();
        setTrendingMovies(results);
      };
      getTrendingMovies();
    } catch {
      toast.error("Something wrong.. Try again!");
    }
  }, []);

  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      <MovieList list={trendingMovies} />
    </>
  );
};

export default HomePage;
