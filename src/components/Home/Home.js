import React from 'react'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Header from './Header'
import WhoWeHelp from './WhoWeHelp'
import WhatsGoingOn from './WhatsGoingOn'

export const Home = () => {
    return (
        <div>
            <Header className="Header" />
            <WhatsGoingOn className="WhatsGoingOn" />
            <AboutUs className="AboutUs" />
            <WhoWeHelp className="WhoWeHelp" />
            <Contact className="Contact" />

        </div>
    )
}

export default Home