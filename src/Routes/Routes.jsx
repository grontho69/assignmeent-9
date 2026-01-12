import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

import Errorpage from "../Pages/Errorpage";

import AllGames from "../Pages/AllGames";
import Login from "../Pages/Login";
import GameDetails from "../Pages/GameDetails";
import Register from "../Pages/Register";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
   errorElement:<Errorpage/>,
    children: [
      {
        index: true,
        element: <Home />,
        
        
      },
      {
        path: '/all-games',
        element:<AllGames/>,
      },
      {
        path: '/login',
        element: <Login />,
        
      },
      {
        path: '/game-details/:id',
        element: <GameDetails />,
        
      },
      {
        path: '/register',
        element:<Register/>,
      },
      {
        path: '*',
        element:<Errorpage/>
      }


    ]
}
  
]);
