import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../layout/root";
import NotFound from "../pages/not-found";
import PlayerPage from "../pages/player";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/player/:playlistId",
        element: <PlayerPage />,
      }
    ],
  },
]);
