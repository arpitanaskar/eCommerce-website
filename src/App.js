import About from "./components/Pages/About/About";
import Products from "./components/Pages/Products/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayOut from "./components/Pages/root";
import Home from "./components/Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

let App = () => {
  return <RouterProvider router={router} />;
};

export default App;
