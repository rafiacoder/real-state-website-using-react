import React from 'react'
import Navbar from './components/navbar/navbar'
import{ HashRouter, Outlet } from 'react-router-dom'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import Partners from './components/body/partners'
import Words from './components/home/words'
import Agents from './components/body/agents'
import HeroBanner from './components/body/herobanner'
import Properties from './components/body/properties'
import Contactus from './components/home/contactus'
import Page from './components/pages/page'


function Layout() {
    return (
        <>
           <Navbar />
           <Outlet />
           <Properties />
           <HeroBanner />
           <Agents />
           <Words />
           <Partners />
           <Footer />
        </>
    
    )
}

export default Layout
