import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../shared/pages/home/Home";
import Checkout from "../shared/pages/checkout/Checkout";
import Login from "../shared/pages/login/Login";
import Signup from "../shared/pages/signup/Signup";
import PrivateRoute from "./PrivateRoute";
import OnPrivate from "./OnPrivate";
import OrderReview from "../shared/pages/orderReview/OrderReview";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3500/services/${params.id}`)
            }
        ]
    },
    {
        path: "/order",
        element: <PrivateRoute> <OrderReview /> </PrivateRoute>,
    },
    {
        path: "/login",
        element: <OnPrivate><Login /></OnPrivate>
    },
    {
        path: "/signup",
        element: <OnPrivate><Signup /></OnPrivate>
    }
]);

export default router;