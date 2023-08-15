import React from "react"
import NavBar from "./NavBar"
import Hero from "./Hero"
import Pricing from "./Pricing"
import Footer from "./Footer"
import Features from "./Features"
import VisualFeature from "./VisualFeature"
import Temoignage from "./Temoignage"

export default function Home (){

    return(
        <>
            <NavBar />
            <Hero />
            <VisualFeature />
            <Features />
            <Temoignage />
            <Pricing />
            <Footer />
        </>
    )
}   