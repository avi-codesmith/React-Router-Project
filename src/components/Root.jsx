import { Outlet } from "react-router-dom"; // It is kind a marker where to put children
import MainNav from "./MainNav";
export default function Root() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
        {/*here is the marker to put children components */}
      </main>
    </>
  );
}
