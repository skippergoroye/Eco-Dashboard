import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import LandingPageOne from "./layout/LandingPageOne";
import ProjectLayout from "./layout/ProjectLayout";







const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/"  element={<LandingPageOne />} />
      <Route path="dashboard"  element={<DashboardLayout />} />
      <Route path="project"  element={<ProjectLayout />} />
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
