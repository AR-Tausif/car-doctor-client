import React from "react";
import Slider from "./header/Slider";
import About from "../../components/about/About";
import Services from "./services/Services";
const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <Services />
        </>
    );
};

export default Home;