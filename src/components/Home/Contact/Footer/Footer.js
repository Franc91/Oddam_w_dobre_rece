import React from 'react'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    const scrollToTop = () =>{
        scroll.scrollToTop()
    }
    return (
        <div>
            <button onClick={scrollToTop}>Na góre!</button>
        </div>
    )
}

export default Footer
