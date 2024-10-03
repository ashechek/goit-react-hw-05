import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchMoviesForQueryFu } from "../../../api";
import { useLocation, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

const MoviesPage = () => {
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const location = useLocation();

  useEffect(() => {
    const takeMoviesForQueryFu = async () => {
      try {
        const data = await searchMoviesForQueryFu(query);
        setSearchingMovies(data.results);
      } catch {
        toast.error("Something wrong.. Try again!");
      }
    };
    takeMoviesForQueryFu();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  return (
    <>
      <SearchForm setSearchingWord={handleChangeQuery} />
      {searchingMovies.length > 0 && (
        <MovieList list={searchingMovies} state={location} />
      )}
    </>
  );
};

export default MoviesPage;
