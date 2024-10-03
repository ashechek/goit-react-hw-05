import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoreInfoFu } from "../../../api";
import s from "./MovieReviews.module.css";
import toast from "react-hot-toast";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    try {
      const getMoreInfoForMovie = async () => {
        const { results } = await getMoreInfoFu(movieId, "reviews");
        setReviews(results);
      };
      getMoreInfoForMovie();
    } catch {
      toast.error("Something wrong.. Try again!");
    }
  }, [movieId]);

  if (!reviews) {
    return <div>Loading...</div>;
  }
  if (reviews.length === 0) {
    return <div>No reviews available for this movie.</div>;
  }

  return (
    <>
      <ul className={s.revList}>
        {reviews.map(({ author, content, id }) => (
          <li key={id} className={s.revListItem}>
            <h4>Author: {author}</h4>
            <p className={s.rewComment}>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieReviews;
