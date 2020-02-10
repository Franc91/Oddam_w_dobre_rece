import React from 'react'
import Instagram from '../../../../assets/Instagram.svg'
import Facebook from '../../../../assets/Facebook.svg'
import { Grid, makeStyles } from '@material-ui/core'

const useStyle=makeStyles(()=>({
    footer:{
        flexGrow:1
    },
    instagram:{
        background:`url(${Facebook})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 30,
        width: 30,
        boxSizing:'padding-box',
        opacity: 1, 
    },
    facebook:{
        background:`url(${Instagram})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 30,
        width: 30,
        marginLeft:20,
        boxSizing:'padding-box',
        opacity: 1, 
    },
    socialMedia:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        height: '100%',
        marginRight: 60
    },
    copyRight:{
        textAlign: 'center',
        fontFamily: 'Open Sans',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: '#3C3C3C',
        flexWrap: 'wrap'
    }

}))

const Footer = () => {

    const classes=useStyle()

    return (
        <Grid container className={classes.footer} >
            <Grid item xs={6} sm={6} lg={7}> 
                <div className={classes.copyRight}>Copyright by CodersLab & Szalony_Kojot</div> 
            </Grid>
            <Grid  item xs={6} sm={6} lg={5}>
                <div className={classes.socialMedia} >
                    <div className={classes.instagram}></div>
                    <div className={classes.facebook}></div>
                </div>
            </Grid>


        </Grid>
    )
}

export default Footer
