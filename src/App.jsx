import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homelayout from "./layout/Homelayout";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homelayout />}>
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
