import React from "react"
import NavBar from "./NavBar"
import Hero from "./Hero"
import Pricing from "./Pricing"
import Footer from "./Footer"
import Features from "./Features"
import VisualFeature from "./VisualFeature"

export default function Home (){

    return(
        <>
            <NavBar />
            <Hero />
            <VisualFeature />
            <Features />
            <Pricing />
            <Footer />
        </>
    )
}   