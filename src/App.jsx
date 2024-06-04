import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homelayout from "./layout/Homelayout";
import { Project } from "./pages";






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/"  element={<Homelayout />} />
      <Route path="project"  element={<Project />} />
    </Route>
   
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
