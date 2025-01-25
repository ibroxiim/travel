import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../page/Home";
import AboutUs from "../page/aboutUs";
import Destination from "../page/destination";
import Tips from "../page/tips";
import Contact from "../page/contact";
import Unknown from "../page/unknown";
import HomeLayout from "../layout";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about-us", element: <AboutUs /> },
        { path: "/destination", element: <Destination /> },
        { path: "/tips", element: <Tips /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    {
      path: "*",
      element: <Unknown />,
    },
  ]);

  return <RouterProvider router={router} />;
}
