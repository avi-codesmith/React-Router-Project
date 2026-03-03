import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1>This is my ultimate homepage!</h1>
      <Link to="/products">Go to Products List</Link>
    </>
  );
}
