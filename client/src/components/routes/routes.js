import Auths from "../../pages/Auths";
import Admin from "../../pages/Admin";
import User from "../../pages/User";
import Intro from "../../pages/intro";
import { ACCOUNT_ROUTE, ADMIN_ROUTE, AQUA_ROUTE, CARD_ROUTE, GROUPWORKOUT_ROUTE, GYM_ROUTE, INTRO_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SALES_ROUTE, SHEDULE_ROUTE, SPA_ROUTE, STORE_ROUTE, USER_ROUTE } from "../../utils/configRoutes";
import StoreInfo from "../../pages/StoreInfo";
import Product from "../../pages/Product";
import Account from "../../pages/Account";
import Gym from "../../pages/gym";
import Aqua from "../../pages/Aqua";
import GroupWorkout from "../../pages/groupWorkout";
import Spa from "../../pages/Spa";
import Sales from "../../pages/Sales";
import Shedule from "../../pages/Shedule";
import Cards from "../../pages/Cards";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>,
        exact: true
    },
    {
        path: USER_ROUTE,
        Component: <User/>,
        exact: true
    },
    {
        path: INTRO_ROUTE,
        Component: <Intro/>,
        exact: true
    },
    {
        path: STORE_ROUTE,
        Component: <StoreInfo/>,
        exact: true
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: <Product/>,
        exact: true
    },
    {
        path: ACCOUNT_ROUTE,
        Component: <Account/>,
        exact: true
    },
    {
        path: GYM_ROUTE,
        Component: <Gym/>,
        exact: true
    },
    {
        path: AQUA_ROUTE,
        Component: <Aqua/>,
        exact: true
    },
    {
        path: GROUPWORKOUT_ROUTE,
        Component: <GroupWorkout/>,
        exact: true
    },
    {
        path: SPA_ROUTE,
        Component: <Spa/>,
        exact: true
    },
    {
        path: SALES_ROUTE,
        Component: <Sales/>,
        exact: true
    },
    {
        path: SHEDULE_ROUTE,
        Component: <Shedule/>,
        exact: true
    },
    {
        path: CARD_ROUTE,
        Component: <Cards/>,
        exact: true
    },
    {
        path: '*',
        Component: <Intro />,
        exact: true
    }
]

export const publicRoutes = [
    
    {
        path: LOGIN_ROUTE,
        Component: <Auths/>,
        exact: true
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auths/>,
        exact: true
    },
    {
        path: INTRO_ROUTE,
        Component: <Intro/>,
        exact: true
    },
    {
        path: '*',
        Component: <Intro/>,
        exact: true
    }
    
]