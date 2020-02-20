import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../Home/Menu'
import Nav from '../../Home/Nav'
import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HomeImg from '../../../assets/Form-Hero-Image.jpg'
import HomeDecoration from '../../../assets/Decoration.svg'

const useStyles = makeStyles(()=>({
    root:{
        flexGrow:1,
    },
    header__img:{
        background: `url(${HomeImg})`,
        backgroundSize: 'cover',
        backgroundPosition:'right',
        backgroundRepeat:'no-repeat',
        height: '100%',
        boxSizing:'padding-box',
        opacity: 1,
    },
    Link:{
        textDecoration: 'none',
        color:'#3C3C3C',
        opacity: 1,
        textAlign: 'center',
        font: '40 18px/24px Open Sans'
    },
    header__titleText:{
        textAlign:'center',
        color: '#3C3C3C',
        letterSpacing: '-0.76px',
        font:'400 38px/55px Open Sans'
    },
    header__title:{
        width:'100%'
    },
    header__control:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
        flexWrap:'wrap',
        margin: '50px 0'
    },
    header__decoration:{
        backgroundImage:`url(${HomeDecoration})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        height:40,
        width: '100%'

    },
    header__content:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        flexWrap:'wrap',
        marginBottom: 50
    },

    navigation:{
        width: '100%',
        display:'flex',
        alignItems:'center',
        justifyContent: 'flex-end'
    },
    header__rightSide:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        paddingRight: '50px'

    },
    square:{
        border: '0.75px solid #3C3C3C',
        transform: 'rotate(45deg)',
        width: 150,
        height: 150,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginRight:20,
        padding: 10,
        
    },
    squareFlip:{
        transform: 'rotate(-45deg)',

        '& p':{
            textAlign:'center',
            letterSpacing: 0,
            color: '#3C3C3C',
            opacity: 1
        }
    },
    number:{
        font: '300 32px Open Sans',
    },
    stepDescription:{
        font: '300 24px Open Sans',
        
    }
    

}))

const FormHeader = () => {
    const classes = useStyles()
    return (
        <Grid 
        container 
        direction="row"
        spacing={0}
        className={classes.root}
        id='header'
        >
            <Grid item lg={5} >
            <div className={classes.header__img}></div>
            </Grid>
            <Grid className={classes.header__rightSide} item lg={7} sm={12}>
                <Grid container direction='column' justify='space-between'>
                    <Grid item className={classes.navigation}>
                        <div>
                            <Button>
                                <Link className={classes.Link} to='/'> Strona główna</Link>
                            </Button>
                        </div>
                    </Grid >
                    <Grid item className={classes.header__content}>
                        <Grid item className={classes.header__title}>
                            <h1 className={classes.header__titleText}>Oddaj rzeczy, których już nie chcesz Potrzebującym!</h1>
                        </Grid>
                        <Grid item className={classes.header__decoration}></Grid>
                        <Grid item className={classes.header__control}>
                            <div className={classes.square}>
                                <div className={classes.squareFlip}>
                                    <p className={classes.number}>1</p>
                                    <p className={classes.stepDescription}>Wybierz rzeczy</p>
                                </div>

                            </div>
                            <div className={classes.square}>
                                <div className={classes.squareFlip}>
                                    <p  className={classes.number}>2</p>
                                    <p className={classes.stepDescription}>Spakuj je w worki</p>
                                </div>
                            </div>
                            <div className={classes.square}>
                                <div className={classes.squareFlip}>
                                    <p  className={classes.number}>3</p>
                                    <p className={classes.stepDescription}>Wybierz fundacje</p>
                                </div>
                            </div>
                            <div className={classes.square}>
                                <div className={classes.squareFlip}>
                                    <p  className={classes.number}>4</p>
                                    <p className={classes.stepDescription}>Zamów kuriera</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FormHeader
