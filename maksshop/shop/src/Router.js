import {
    createBrowserRouter,
} from "react-router-dom";

import Products from "./components/products/Index";
import View from "./components/product/View";
import WishList from "./components/wishlist/index";

export default createBrowserRouter([
    {
        path: "/",
        element: <Products/>,
    },
    {
        path: "/products",
        element: <Products/>,
    },
    {
        path: "/products/:id",
        element: <View/>,
    },
    {
        path: "/wishlist",
        element: <WishList/>
    }

]);
