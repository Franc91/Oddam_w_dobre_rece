import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import People from '../../../assets/People.jpg';
import aboutUsDecoration from '../../../assets/Decoration.svg';
import Signature from '../../../assets/Signature.svg';
const useStyle=makeStyles(()=>({
    aboutUs:{
        flexGrow: 1,
        margin: 0,
        background: '#F0F1F1 no-repeat padding-box',
        opacity: 1
    },
    aboutUs__leftSide:{
        margin:'0 auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding: '180px 0',
    },

    aboutUs__photo:{
        backgroundImage: `url(${People})`,
        backgroundSize: 'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        height: '100%',
        boxSizing:'padding-box',
        opacity: 1,       // height: 935
    },
    aboutUs__title:{
        textAlign: 'center',
        font: '400 38px Open Sans',
        letterSpacing:' -0.76px',
        color: '#3C3C3C',
        opacity: 1
    },
    aboutUs__description:{
        textAlign: 'center',
        font: '400 30px Open Sans',
        letterSpacing: '-0.6px',
        color: '#3C3C3C',
        margin: '0 70px',
        opacity: 1
    },
    aboutUs__decoration:{
        background: `url(${aboutUsDecoration})`,
        backgroundRepeat: 'no-repeat',
        height: 40,
        width: 250,
        margin: '25px 0 120px 0'
    },
    aboutUs__signature:{
        background:`url(${Signature})`,
        backgroundRepeat: 'no-repeat',
        height: 150,
        width: 210,
        marginTop: 40,
        marginRight:20,
        alignSelf: 'flex-end'
    },
    }))
export const AboutUs = () => {
    const classes=useStyle()
    return (
        <Grid container direction='row' spacing={0} className={classes.aboutUs} >
            <Grid item lg={6} className={classes.aboutUs__leftSide}>
                <h2 className={classes.aboutUs__title}>O nas</h2>
                <div className={classes.aboutUs__decoration}></div>
                <p className={classes.aboutUs__description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa blanditiis distinctio, maiores, accusantium vel hic natus laborum quisquam nam.
                </p>
                <div className={classes.aboutUs__signature}> </div>
            </Grid>
            <Grid item lg={6} className={classes.aboutUs__rightSide}> 
                <div className={classes.aboutUs__photo}></div>
            </Grid>
        </Grid>
    )
}

export default AboutUs
