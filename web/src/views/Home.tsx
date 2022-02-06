import Layout from "@components/Layout";
import ListOfNotes from "@components/ListOfNotes";
import TwoColumn from "@components/TwoColumn";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-2">
      <Link to="/notebooks/1">Notebook 1</Link>
    </div>
  );
};

export default Home;
