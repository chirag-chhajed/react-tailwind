import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";

// Layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<LandingPage/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
