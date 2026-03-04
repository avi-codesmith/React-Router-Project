import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "product1" },
  { id: "p2", title: "product2" },
  { id: "p3", title: "product3" },
];

export default function Products() {
  return (
    <>
      <h1 className="centre">This is my ultimate Products Page!</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li>
            <Link to={`${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
