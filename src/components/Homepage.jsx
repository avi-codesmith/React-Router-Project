import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate(); // useNavigator hook

  const navigateHanlder = () => {
    navigate("/products"); // we have to just provide the URL
  };
  return (
    <>
      <p>
        <h1 className="centre">This is my ultimate homepage!</h1>
      </p>
      <p>
        <button onClick={navigateHanlder}>Navigate</button>
        {/*Navigate directly*/}
      </p>
    </>
  );
}
