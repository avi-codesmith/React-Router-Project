import { useParams } from "react-router-dom"; // It get the object parameters

export default function ProductDetails() {
  const params = useParams();
  return (
    <>
      <h1>This is a product with details!</h1>
      <p>Product - {params.id}</p>
      {/* We can use the after products/ parameter by .id */}
    </>
  );
}
