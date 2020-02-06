import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import threeColsBg from '../../../../assets/3_ColumnsBackground.png'

const useStyle = makeStyles(()=>({
    threeColumns:{
        // height:'40vh',
        flexGrow: 1,
        background:`transparent url(${threeColsBg}) 0% 0% no-repeat padding-box`,
        opacity: 1,
    },
    threeColumns__item:{
        height: '100%'
    },
    threeColumns__itemContent:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        width: 400,
        margin: '0 auto',
        '& p':{
            margin: '10px 0 50px 0',
            textAlign:'center',
            letterSpacing:'-0.32px',
            color: '#3C3C3C',
            opacity: 1,
            font: '300 16px/18px Open Sans',
        },
        '& h2':{
            font: '300 90px/122px Open Sans',
            letterSpacing: 0,
            color: '#5E5322',
            opacity: 1,
            margin: 0,
        },
        '& h3':{
            margin:0,
            font: '400 18px/30px Open Sans',
            letterSpacing: '-0.36px',
            color: '#3C3C3C',
            opacity: 1,
            textTransform: 'uppercase'
        }
    }
}))


export const ThreeColumns = () => {
    const classes = useStyle();

    return (
        <Grid container direction='row' alignItems='center' justify='space-around' className={classes.threeColumns}>
            <Grid lg={4} item className={classes.threeColumns__item}>
                <div className={classes.threeColumns__itemContent}>
                    <h2>10</h2>
                    <h3>ODDANYCH WORKÓW</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Error laboriosam consequatur velit </p>
                </div>
            </Grid>
            <Grid lg={4} item className={classes.threeColumns__item}>
                <div className={classes.threeColumns__itemContent}>
                    <h2>5</h2>
                    <h3>wspartych organizacji</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod ratione assumenda sit nobis optio aliquam excepturi architecto omnis iusto.</p>
                </div>
            </Grid>
            <Grid lg={4} item className={classes.threeColumns__item}>
                <div className={classes.threeColumns__itemContent}>
                    <h2>7</h2>
                    <h3>ODDANYCH WORKÓW</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod ratione assumenda sit nobis optio aliquam excepturi architecto omnis iusto? Error laboriosam consequatur.</p>
                </div>
            </Grid>
        </Grid>
    )
}

export default ThreeColumns
