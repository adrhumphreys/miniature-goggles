import { Link } from "react-router-dom";

const Home = () => {
  return (
    <p>
      home <Link to="/abc">404</Link>
    </p>
  );
};

export default Home;
