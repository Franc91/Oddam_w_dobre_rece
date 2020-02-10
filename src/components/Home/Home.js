import React from 'react'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Header from './Header'
import WhoWeHelp from './WhoWeHelp'
import WhatsGoingOn from './WhatsGoingOn'
import { makeStyles, Fab } from '@material-ui/core'
import {animateScroll as scroll} from 'react-scroll'
import NavigationIcon from '@material-ui/icons/Navigation';
import Footer from './Contact/Footer/Footer'

const useStyle= makeStyles(()=>({
    root:{
        backgroundColor:'#FFFFFF',
        margin:0
    },
    fabButton:{
        position:'fixed',
        zIndex: 1000,
        bottom: 30,
        right: 10

    }
}))

export const Home = () => {
    const scrollToTop = () =>{
        scroll.scrollToTop()
    }
    const classes=useStyle()
    return (
        <>
        <Header className="Header" />
        <WhatsGoingOn className="WhatsGoingOn" />
        <AboutUs className="AboutUs" />
        <WhoWeHelp className="WhoWeHelp" />
        <Contact className="Contact" />
        <Footer/>
        <Fab className={classes.fabButton} onClick={scrollToTop}>
            <NavigationIcon/>
        </Fab>
        </>
    )
}

export default Home