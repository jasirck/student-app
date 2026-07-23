import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">

      <h1 className="display-1">
        404
      </h1>

      <h3>Page Not Found</h3>

      <Link
        to="/"
        className="btn btn-danger mt-3"
      >
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;