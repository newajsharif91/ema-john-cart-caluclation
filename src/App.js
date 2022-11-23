import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Main from "./Layout/Main";
import Enventory from "./components/Enventory/Enventory";
import Orders from "./components/Orders/Orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Shop></Shop> },
        {
          path: "/shop",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        { path: "/home", element: <Shop></Shop> },
        { path: "/about", element: <About></About> },
        { path: "/inventory", element: <Enventory></Enventory> },
        {
          path: "/orders",
          loader: () => fetch("products.json"),
          element: <Orders></Orders>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
