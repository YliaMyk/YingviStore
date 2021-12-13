import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    BLOG_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    HOME_ROUT,
    SHOP_ROUTE
} from "./utils/consts";
import Basket from "./pages/Basket/Basket";
import Shop from "./pages/Shop/Shop";
import Auth from "./pages/Auth";
import Product from "./pages/Product/Product";
import Blog from "./pages/Blog";
import HomePade from "./pages/HomePage/HomePade";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BLOG_ROUTE,
        Component: Blog
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    },
    {
        path: HOME_ROUT,
        Component: HomePade
    }
]
