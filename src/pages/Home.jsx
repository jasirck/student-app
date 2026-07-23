import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="text-center">

      <h1 className="mb-3">
        Welcome to Student Portal
      </h1>

      <p className="lead">
        Learn React Router using Bootstrap.
      </p>

      <button
        className="btn btn-primary"
        onClick={() => navigate("/students")}
      >
        View Students
      </button>

    </div>
  );
}

export default Home;