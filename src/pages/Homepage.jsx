import { Link } from "react-router-dom";
import NavPage from "../components/NavPage";

const Homepage = () => {
  return (
    <div>
      <NavPage />

      <h4>worldwise</h4>

      <Link to="/App">go to App</Link>
    </div>
  );
};

export default Homepage;
