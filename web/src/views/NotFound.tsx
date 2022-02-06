import Layout from "@components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <p className="text-xl">
      404, go <Link to="/">home</Link>
    </p>
  );
};

export default NotFound;
