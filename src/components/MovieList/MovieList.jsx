import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ list, state }) => {
  const location = useLocation();
  return (
    <>
      <ul className={s.movieList}>
        {list.map(({ title, id, poster_path }) => (
          <Link to={`/movies/${id}`} key={id} state={location}>
            <li className={s.movieItem}>
              <h4>{title}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
