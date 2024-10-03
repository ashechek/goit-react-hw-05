import { useEffect, useState } from "react";
import { getMoreInfoFu } from "../../../api";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";
import toast from "react-hot-toast";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    try {
      const getMoreInfoForMovie = async () => {
        const { cast } = await getMoreInfoFu(movieId, "credits");
        setActors(cast);
      };
      getMoreInfoForMovie();
    } catch {
      toast.error("Something wrong.. Try again!");
    }
  }, [movieId]);

  if (!actors) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul className={s.actors}>
        {actors.map(({ name, profile_path, id }) => (
          <li key={id} className={s.actorsItem}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster"
              }
              alt={name}
              className={s.actorsImg}
            />
            <h4>{name}</h4>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
