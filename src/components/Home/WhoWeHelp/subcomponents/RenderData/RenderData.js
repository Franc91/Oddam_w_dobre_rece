import React from 'react'
import { makeStyles, Grid, } from '@material-ui/core'

const useStyle = makeStyles(()=>({
    whoWeHelp__ListItem:{
        borderBottom:'1px solid #707070',
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap'
    },
    whoWeHelp__organizationItem:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        paddingBottom: 30
    },
    whoWeHelp__organizationItemTitle:{
        textAlign: 'left',
        font: '300 26px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1,
        margin:'5px 0'
    },
    whoWeHelp__organizationItemDescription:{
        textAlign: 'left',
        font: '300 Italic 18px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1,
        margin: 2
    },
    whoWeHelp__shortCut:{
        alignSelf:'center',
        justifySelf:'flex-end',
        textAlign: 'left',
        font: '300 18px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1
    },
}))

const RenderData = ({data, currentPage, dataPerPage}) => {
    const classes= useStyle()
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData)

        return (
        <>
        {
            currentData.map((data,index)=>(
            <Grid container className={classes.whoWeHelp__ListItem}  key={index}>
            <Grid lg={8} item className={classes.whoWeHelp__organizationItem}>
                <h3 className={classes.whoWeHelp__organizationItemTitle}>
                    {data.name}
                </h3>
                <p className={classes.whoWeHelp__organizationItemDescription}>
                    {data.description}
                </p>
            </Grid >
            <Grid item lg={2} className={classes.whoWeHelp__shortCut} key={index+1}>
                {data.shortCut}
            </Grid >
            </Grid>
            ))
        }
        </>
    );
}

export default RenderData
