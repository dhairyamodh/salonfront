import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/home";
import Profile from "../pages/profile";
import { useMedia } from "../utils/use-media";
import ProductDetailsPage from "../pages/products";
import CheckoutPage from "../pages/checkout";
import Booking from "../pages/booking";
import UtilComponent from "./UtilComponent";
import Services from "../pages/services";
import OffersDeals from '../pages/offer'
import AppointmentBook from "../pages/appointment-book";
import Order from "../pages/order";
import About from "../pages/about";
import Contact from "../pages/contact";


const MasterRoutes = () => {
    const mobile = useMedia("(max-width: 580px)");
    const tablet = useMedia("(max-width: 991px)");
    const desktop = useMedia("(min-width: 992px)");
    const deviceType = { mobile, tablet, desktop }
    const ScrollToTop = () => {
        window.scrollTo(0, 0);
        return null;
    };
    return (
        <div class="page-wrapper">
            <UtilComponent />
            <Route component={ScrollToTop} />
            <Route exact path="/" component={(props) => <Home deviceType={deviceType} {...props} />} />
            <Route exact path="/about" component={(props) => <About deviceType={deviceType} {...props} />} />
            <Route exact path="/contact" component={(props) => <Contact deviceType={deviceType} {...props} />} />
            <Route exact path="/services/:id" component={(props) => <Services deviceType={deviceType} {...props} />} />
            <Route exact path="/profile" component={(props) => <Profile deviceType={deviceType} {...props} />} />
            <Route exact path="/booking" component={(props) => <Booking deviceType={deviceType} {...props} />} />
            <Route exact path="/offers-deals/:value" component={(props) => <OffersDeals deviceType={deviceType} {...props} />} />
            {/* <Route path="/products/:id" component={ProductDetailsPage} /> */}
            <Route exact path="/checkout" component={(props) => <CheckoutPage deviceType={deviceType} {...props} />} />
            <Route exact path="/appointment-book/:id" component={(props) => <AppointmentBook deviceType={deviceType} {...props} />} />
            <Route exact path="/my-bookings" component={(props) => <Order deviceType={deviceType} {...props} />} />

        </div>
    );
};

export default MasterRoutes;
