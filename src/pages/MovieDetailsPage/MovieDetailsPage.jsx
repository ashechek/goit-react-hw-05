import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { searchMovieForId } from "../../../api";
import clsx from "clsx";
import s from "./MovieDetailsPage.module.css";
import { BackLink } from "../../components/BackLink/BackLink";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [oneMovie, setOneMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getOneMovie = async () => {
      const movie = await searchMovieForId(movieId);
      setOneMovie(movie);
    };
    getOneMovie();
  }, [movieId]);

  if (!oneMovie) {
    return <div>Loading...</div>;
  }

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <>
      <BackLink to={goBackRef.current}>Back</BackLink>
      <div className={s.mainInfo}>
        <img src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`} />
        <div className={s.infoColumn}>
          <h3>{oneMovie.title}</h3>
          <h4>Overview:</h4>
          <p>{oneMovie.overview}</p>
          <h4>Genres:</h4>
          <ul>
            {oneMovie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <span className={s.span}>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </span>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsPage;
