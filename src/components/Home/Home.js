import React from 'react'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Header from './Header'
import WhoWeHelp from './WhoWeHelp'
import WhatsGoingOn from './WhatsGoingOn'
import { Container, makeStyles } from '@material-ui/core'

const useStyle= makeStyles(()=>({
    root:{
        backgroundColor:'#FFFFFF'
    }
}))

export const Home = () => {
    const classes=useStyle()
    return (
        <Container className={classes.root} maxWidth='xl'>
            <Header className="Header" />
            <WhatsGoingOn className="WhatsGoingOn" />
            <AboutUs className="AboutUs" />
            <WhoWeHelp className="WhoWeHelp" />
            <Contact className="Contact" />
        </Container>
    )
}

export default Home