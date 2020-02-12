import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { makeStyles, Grid, Button } from '@material-ui/core';
import whoWeHelpDecoration from '../../../assets/Decoration.svg'
import firebase from '../../../config/fbConfig'
import Pagniation from './subcomponents/Pagniation/Pagniation';
import RenderData from './subcomponents/RenderData';

const useStyle = makeStyles(()=>({

    whoWeHelp:{
        flexGrow:1,
        background: '#FFFFFF',
        marginBottom: 80
    },
    whoWeHelp__decoration:{
        background:`url(${whoWeHelpDecoration})`,
        backgroundRepeat: 'no-repeat',
        height: 35,
        width: 250,
        margin: '25px 0 25px 0'
    },
    whoWeHelp__header:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center'
    },
    whoWeHelp__title:{
        textAlign: 'center',
        font: '400 38px Open Sans',
        letterSpacing: '-0.76px',
        color: '#3C3C3C',
        opacity: 1
    },
    whoWeHelp__control:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        margin: '0 auto',
        flexWrap:'wrap',
        width:'40%',
        marginBottom: 50
    },
    whoWeHelp__button:{
        width: 210,
        height: 80,
        textAlign: 'center',
        font: '400 24px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1,
        
        '&:hover':{
            background: '#F0F1F1',
            opacity: 1
        }
    },
    whoWeHelp__description:{
        textAlign: 'center',
        font: '400 22px Open Sans',
        letterSpacing: 0,
        color: '#3C3C3C',
        opacity: 1,
        width: '33%'
    },
    whoWeHelp__list:{
        width:'80%',
        margin: '0 auto'
    },
    whoWeHelp__organization:{
        margin:'0 auto',
        width: '90%'
    },
}))
export const WhoWeHelp = () => {

    const classes = useStyle()
    const db = firebase.firestore().collection('layout').doc('whoWeHelp')
    const [ state, setState ] = useState({
        data: [],
        currentPage: 1,
        dataPerPage: 3,
    })

    const GetFirebase = (name)=> {
    db
    .get()
    .then(doc=>{
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            setState(prev=>({
                ...prev,
                data: _.toArray(doc.data()[name]),
            }))
        }
    })}

    const handleOnClick = (number) => (e)=>{
        setState(prev=>({
            ...prev,
            currentPage: Number(number)
        }))
    }

    const handleChangeFundation = (name) => (e) => {
        GetFirebase(name)
    }
    
    useEffect(() => {
        db
        .get()
        .then(doc=>{
            if (!doc.exists) {
                console.log('No such document!');
            } else {
                setState(prev=>({
                    ...prev,
                    data: _.toArray(doc.data().Fundation),
                    // organization: doc.data().Oganization
                }))
            }
        })
    }, [])

    return (
        <Grid direction='column'alignItems='center' justify='center' className={classes.whoWeHelp} container
        id='WhoWeHelp'>
            <Grid className={classes.whoWeHelp__header} item>
                <h2 className={classes.whoWeHelp__title}>
                    Komu pomagamy?
                </h2>
                <div className={classes.whoWeHelp__decoration}></div>
            </Grid>
            <Grid item className={classes.whoWeHelp__control}>
                <Button 
                onClick={handleChangeFundation('Fundation')}
                name='whoWeHelpBtn'
                id='contactBTN'
                size='large'
                className={classes.whoWeHelp__button}
                >
                    Fundacjom
                </Button>
                <Button 
                onClick={handleChangeFundation('Organization')}
                name='whoWeHelpBtn'
                id='contactBTN'
                size='large'
                className={classes.whoWeHelp__button}
                >
                    Organizacją pozarządowym
                </Button>
                <Button 
                onClick={handleChangeFundation('Local')}
                name='whoWeHelpBtn'
                id='contactBTN'
                size='large'
                className={classes.whoWeHelp__button}
                >
                    Lokalnym zbiórkom
                </Button>
            </Grid>
            <Grid className={classes.whoWeHelp__description} item>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit minima quasi sint sequi delectus quisquam, necessitatibus corrupti at dolorum.</p>
            </Grid>
            <Grid className={classes.whoWeHelp__list} item>
                <div className={classes.whoWeHelp__organization}>
                    <RenderData data={state.data} currentPage={state.currentPage} dataPerPage={state.dataPerPage} />
                </div>
                <Pagniation data={state.data} paginate={handleOnClick} dataPerPage={state.dataPerPage} />
            </Grid>
        </Grid>
    )
}

export default WhoWeHelp
