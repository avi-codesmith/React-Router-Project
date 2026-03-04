import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./components/Homepage";
import Products from "./components/Products";
import Root from "./components/Root";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";

// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage />} />
//     <Route path="/products" element={<Products />} />
//   </Route>,
// );

// const routerJSX = createBrowserRouter(routerDefinition); // older

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <Error />, // we can add error as fallback page
    children: [
      { path: "/", element: <Homepage /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetails /> }, // It will give PoductDetails page with products as the "useParams().id" to be setted (in the ProductDetails and Products.jsx)
    ],
  },
]); // we can handle children and main like that and also we have to add a marker where to put our children (in Root.jsx)

// small and easy to mantian (new)

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* small and easy to mantian (new)*/}

      {/*<RouterProvider router={routerJSX} /> older*/}
    </>
  );
}

export default App;

// Step1:
// connect your expecting components to the router with path name by using createBrowserRouter
// then use that expecting components in App component by using RouterProvider
// connect createBrowserRouter to ReactProvider
