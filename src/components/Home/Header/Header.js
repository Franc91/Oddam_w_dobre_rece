import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu'
import Nav from '../Nav'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HomeImg from '../../../assets/Home-Hero-Image.jpg'
import HomeDecoration from '../../../assets/Decoration.svg'
import Button from '@material-ui/core/Button';

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
        font: '300 36px/45px Open Sans'
    },
    header__button:{
        height:120,
        width:310,
        border:'0.75px solid #3C3C3C',
        margin: 20
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
        flexWrap:'wrap'
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
    },

    navigation:{
        width: '100%',
        display:'flex',
        flexDirection:'column',
    },
    header__rightSide:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        paddingRight: '50px'

    }

}))

export const Header = () => {
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
                        <Nav/>
                        <Menu/>
                    </Grid >
                    <Grid item className={classes.header__content}>
                        <Grid item className={classes.header__title}>
                            <h1 className={classes.header__titleText}>Zacznij pomagać!<br/>
                            Oddaj niechciane rzeczy w zaufane ręce</h1>
                        </Grid>
                        <div className={classes.header__decoration}></div>
                        <Grid item className={classes.header__control}>
                            <Button  variant='outlined' className={classes.header__button}>
                                <Link className={classes.Link} to='/logowanie'>Oddaj rzeczy</Link>
                            </Button>
                            <Button variant='outlined' className={classes.header__button}>
                                <Link className={classes.Link} to='/logowanie'>Zorganizuj zbiórke</Link>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header
