import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./components/Homepage";
import Products from "./components/Products";

// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage />} />
//     <Route path="/products" element={<Products />} />
//   </Route>,
// );

// const routerJSX = createBrowserRouter(routerDefinition); // older

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/products", element: <Products /> },
]);

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
