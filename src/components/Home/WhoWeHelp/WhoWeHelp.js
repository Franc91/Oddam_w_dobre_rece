import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { makeStyles, Grid, Button, ListItem, List } from '@material-ui/core';
import whoWeHelpDecoration from '../../../assets/Decoration.svg'
import firebase from '../../../config/fbConfig'

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
    whoWeHelp__organizationNumberPage:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        width: '5%',
        margin: '0 auto',
        paddingTop: 50
    },
    whoWeHelp__NumberPage:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin: 5,
        padding: 0
        
    },
    whoWeHelp__NumberPageButton:{
        padding:5,
        '&:hover':{
            background: '#F0F1F1',
            opacity: 1
        }
    },

}))
export const WhoWeHelp = () => {

    const classes = useStyle()
    const [ state, setState ] = useState({
        data: [],
        currentPage: 1,
        dataPerPage: 3,
    })

    const GetFirebase = (name)=> {firebase.firestore()
    .collection('layout')
    .doc('whoWeHelp')
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
        console.log(e.target.name, 'dupa')
        setState(prev=>({
            ...prev,
            currentPage: Number(number)
        }))
    }

    const handleChangeFundation = (name) => (e) => {
        GetFirebase(name)
    }


    useEffect(() => {
        firebase.firestore()
        .collection('layout')
        .doc('whoWeHelp')
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
    // const data = []
    // Object.values(state.fundation).map(el => data.push(el))
    // setState({
    //     todos: data
    // })

    const { data, currentPage, dataPerPage } = state;
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);

    const renderData = currentData.map((data, index) => {
        return <Grid container className={classes.whoWeHelp__ListItem} key={index}>
            <Grid lg={8} item className={classes.whoWeHelp__organizationItem} >
                <h3 className={classes.whoWeHelp__organizationItemTitle}>
                    {data.name}
                </h3>
                <p className={classes.whoWeHelp__organizationItemDescription}>
                    {data.description}
                </p>
            </Grid >
            <Grid item lg={2} className={classes.whoWeHelp__shortCut}>
                {data.shortCut}
            </Grid >
        </Grid>;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log(pageNumbers)

    const renderPageNumbers = pageNumbers.map((number) => {
        return (
            <Button className={classes.whoWeHelp__NumberPageButton}
            variant="outlined"
            name={number}
            key={number}
            onClick={handleOnClick(number)}
            >
                {number}
            </Button>
        );
      });

    return (
        <Grid direction='column'alignItems='center' justify='center' className={classes.whoWeHelp} container>
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
                <List className={classes.whoWeHelp__organization}>
                    {renderData}
                </List>
                <div id='page-numbers' className={classes.whoWeHelp__organizationNumberPage}>
                    {renderPageNumbers}
                </div>
            </Grid>
        </Grid>
    )
}

export default WhoWeHelp
