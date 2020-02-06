import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import simpleStepsDecoration from '../../../../assets/Decoration.svg'
import Icon1 from '../../../../assets/Icon-1.svg'
import Icon2 from '../../../../assets/Icon-2.svg'
import Icon3 from '../../../../assets/Icon-3.svg'
import Icon4 from '../../../../assets/Icon-4.svg'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const useStyle=makeStyles(()=>({
    simpleStepsContentRoot:{
        background: '#F0F1F1 0% 0% no-repeat padding-box'
    },
    simpleSteps:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    simpleSteps__title:{
        textAlign: 'center',
        font: '400 38px/55px Open Sans',
        letterSpacing: '-0.76px',
        color: '#3C3C3C',
        opacity: 1,
        marginTop: 55
    },
    simpleSteps__img:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background:`url(${simpleStepsDecoration}) no-repeat`,
        height: 40,
        width: 250,
        margin: '0 auto',
        marginBottom: 35,

    },
    simpleStepsControl:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        '& Button':{
            width: 300,
            height: 120,
            margin: '35px 0 80px 0',
        },
    },
    Link:{
        textDecoration: 'none',
        textAlign: 'center',
        font: '300 36px/45px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1
    },
    simpleStepsContent:{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '70px 0'
    },

    simpleStepsContent__Icon1:{
        background:`url(${Icon1}) no-repeat`,
        height:100,
        width:100,
        backgroundPosition:'center'
    
    },
    simpleStepsContent__Icon2:{
        background:`url(${Icon2}) no-repeat`,
        height:100,
        width:100,
        backgroundPosition:'center'
    },
    simpleStepsContent__Icon3:{
        background:`url(${Icon3}) no-repeat`,
        height:100,
        width:100,
        backgroundPosition:'center'
    },
    simpleStepsContent__Icon4:{
        background:`url(${Icon4}) no-repeat`,
        height:100,
        width:100,
        backgroundPosition:'center'
    },
    simpleStepsContent__title:{
        margin: 10,
        textAlign: 'center',
        font: '400 18px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1,
        width: 130
    },
    simpleStepsContent__line:{
        border: '1px solid #707070',
        opacity: 1,
        width: 70
    },
    simpleStepsContent__description:{
        margin: 10,
        width: 150,
        textAlign: 'center',
        font: '400 16px Open Sans',
        color: '#3C3C3C',
        letterSpacing: 0,
        opacity: 1
    }

})
)

const SimpleSteps = () => {
    const classes = useStyle()
    return (
        <>
        <div className={classes.simpleSteps}>
            <div>
                <h2 className={classes.simpleSteps__title}>
                    Wystarczą 4 proste kroki
                </h2>
                <div className={classes.simpleSteps__img}></div>
            </div>
        </div>
        <Grid className={classes.simpleStepsContentRoot} container alignItems='center' justify='center'>
            <Grid item lg={2} className={classes.simpleStepsContent}>
                <div className={classes.simpleStepsContent__Icon1}></div>
                <p className={classes.simpleStepsContent__title}>
                    Wybierz rzeczy
                </p>
                <div className={classes.simpleStepsContent__line}></div>
                <p className={classes.simpleStepsContent__description}>
                    ubrania, zabawki, sprzet i inne 
                </p>
            </Grid>
            <Grid item lg={2} className={classes.simpleStepsContent}>
                <div className={classes.simpleStepsContent__Icon2}></div>
                <p className={classes.simpleStepsContent__title}>
                    Spakuj je
                </p>
                <div className={classes.simpleStepsContent__line}></div>
                <p className={classes.simpleStepsContent__description}>
                    skorzystaj z worków na śmieci
                </p>
            </Grid>
            <Grid item lg={2} className={classes.simpleStepsContent}>
                <div className={classes.simpleStepsContent__Icon3}></div>
                <p className={classes.simpleStepsContent__title}>Zdecyduj komu chcesz pomóc</p>
                <div className={classes.simpleStepsContent__line}></div>
                <p className={classes.simpleStepsContent__description}>wybierz zaufane miejsce</p>
            </Grid>
            <Grid item lg={2} className={classes.simpleStepsContent}>
                <div className={classes.simpleStepsContent__Icon4}></div>
                <p className={classes.simpleStepsContent__title}>Zamów kuriera</p>
                <div className={classes.simpleStepsContent__line}></div>
                <p className={classes.simpleStepsContent__description}>kurier przyjedzie w dogodnym terminie</p>
            </Grid>
        </Grid>
        <div className={classes.simpleStepsControl}>
            <Button variant='outlined'><Link className={classes.Link} to='/logowanie'> oddaj rzeczy</Link></Button>
        </div>
        </>
    )
}

export default SimpleSteps
