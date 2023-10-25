"use client"
import React from "react";
import Navigation from "./components/nav";
import About from "./components/about";
import Services from "./components/services";
import SpecialServices from "./components/offer-services";
import Locations from "./components/locations";
import Contact from "./components/contact";
import Jumbo from "./components/jumbo-intro";
import ThreeMonthOffer from "./components/3-month-offer";
import Head from "next/head";

const secondaryJumbo = <div
    className="relative md:h-[100vh] h-[50vh] md:bg-center bg-top flex items-center justify-center"
    style={{
        backgroundImage: 'url(./baby-hand.jpg)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }}>
    <div className="absolute inset-0 bg-lightcyan bg-opacity-20" />
    <div className="relative md:px-3 lg:px-7 md:py-5 py-3 px-[5px] bg-white">
        <h1 className="text-aliceblue md:text-6xl text-lg text-center font-medium">Connecting families with quality care and assurance.</h1>
    </div>
</div>;


export default function App() {
  return (
    <div className="min-h-screen bg-lightcyan">
        <Navigation />
        <Jumbo />
        <About />
        {secondaryJumbo}
        <Services />
        <SpecialServices />
        <Locations />
        <Contact />
    </div>
  )
}
