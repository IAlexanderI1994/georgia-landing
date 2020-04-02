import React from 'react';
import HeaderElement from "./components/Header";
import './styles/main.scss';
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <HeaderElement/>
            <AboutUs/>
            <Gallery/>
            <Footer/>
        </div>

    );
}

export default App;
