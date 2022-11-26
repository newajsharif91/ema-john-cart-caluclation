import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Main from "./Layout/Main";
import Enventory from "./components/Enventory/Enventory";
import Orders from "./components/Orders/Orders";
import { ProductsAndCartLoader } from "./components/Loader/ProductsAndCartLoader";
import HomeMiddlePart from "./components/Home-middle-part/HomeMiddlePart";
import Login from "./components/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/shop",
          loader: async () => fetch("products.json"),
          element: <Shop></Shop>,
        },

        {
          path: "/home",
          element: <HomeMiddlePart></HomeMiddlePart>,
        },
        { path: "/about", element: <About></About> },
        { path: "/inventory", element: <Enventory></Enventory> },
        {
          path: "/orders",
          loader: ProductsAndCartLoader,
          element: <Orders></Orders>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
