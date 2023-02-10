import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import {LandingPage,ContactPage,Docs,About,NotFound} from './pages'

// Layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<LandingPage/>}/>
      <Route path="contact" element={<ContactPage/>}/>
      <Route path="docs" element={<Docs/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
