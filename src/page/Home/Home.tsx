import React from "react"
import NavBar from "./NavBar"
import Hero from "./Hero"
import Pricing from "./Pricing"
import Footer from "./Footer"
import Features from "./Features"
import VisualFeature from "./VisualFeature"
import Temoignage from "./Temoignage"
import Banner from "../Banner"

export default function Home (){

    return(
        <>
                <NavBar />
            <div id="Hero">
                <div className="z-40 mt-20">
                <Banner />
                </div>
                <Hero />
            </div>    
            <div id="Features">
                <VisualFeature />
            </div>
            <div>
                <Features />
            </div>
            <div id="Testimony">
                <Temoignage />
            </div>
            <div id="Pricing">
                <Pricing />
                </div>    
            <div>
                <Footer />
            </div>
        </>
    )
}   