import Products from './Products'
import {
    createBrowserRouter,
  
  } from "react-router-dom";


    export default createBrowserRouter([
    {
      path: "/",
      element: <Products/>,
    },
  ]);

