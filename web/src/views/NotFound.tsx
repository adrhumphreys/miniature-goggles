import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <p>
      404, go <Link to="/">home</Link>
    </p>
  );
};

export default NotFound;
