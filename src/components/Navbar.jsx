import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-primary ml-2">
      <div className="navLeft text-light">
        <h4 onClick={() => navigate("/")}>React Movie App</h4>
      </div>
      <div className="navRight g-1">
        <button
          className="btn text-light border "
          onClick={() => navigate("login")}
        >
          Login
        </button>
        <button
          className="btn text-light border"
          onClick={() => navigate("register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
