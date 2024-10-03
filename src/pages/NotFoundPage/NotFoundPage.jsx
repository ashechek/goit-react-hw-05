import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h2>Not Found Page!</h2>
      <Link to="/"><h3>Go to Home Page</h3></Link>
    </>
  );
};

export default NotFoundPage;
