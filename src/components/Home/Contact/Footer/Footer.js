import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    const scrollToTop = () =>{
        scroll.scrollToTop()
    }
    return (
        <div>
            <a onClick={scrollToTop}>Na góre!</a>
        </div>
    )
}

export default Footer
