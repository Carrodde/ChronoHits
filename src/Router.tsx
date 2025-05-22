import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Playlists } from "./pages/Playlists";
import { Quiz } from "./pages/Quiz";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/playlists",
        element: <Playlists />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
