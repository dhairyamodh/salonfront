import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/home";
import Profile from "../pages/profile";
import { useMedia } from "../utils/use-media";
import ProductDetailsPage from "../pages/products";
import CheckoutPage from "../pages/checkout";
import UtilComponent from "./UtilComponent";


const MasterRoutes = () => {
    const mobile = useMedia("(max-width: 580px)");
    const tablet = useMedia("(max-width: 991px)");
    const desktop = useMedia("(min-width: 992px)");
    const deviceType = { mobile, tablet, desktop }
    return (
        <div class="page-wrapper">
            {/* <UtilComponent /> */}
            <Route exact path="/" component={(props) => <Home deviceType={deviceType} {...props} />} />
            <Route exact path="/profile" component={(props) => <Profile deviceType={deviceType} {...props} />} />
            {/* <Route path="/products/:id" component={ProductDetailsPage} /> */}
            <Route exact path="/checkout" component={(props) => <CheckoutPage deviceType={deviceType} {...props} />} />

        </div>
    );
};

export default MasterRoutes;
