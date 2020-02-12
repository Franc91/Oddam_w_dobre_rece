import React from 'react'
import { makeStyles, Button } from '@material-ui/core';

    const useStyle= makeStyles(()=>({

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
    
    const Pagniation = ({data, dataPerPage, paginate})=> {
    const classes = useStyle()

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <div id='page-numbers' className={classes.whoWeHelp__organizationNumberPage}>
            {
                pageNumbers.map(number=>(
                    <Button className={classes.whoWeHelp__NumberPageButton}
                    variant="outlined"
                    name={number}
                    key={number}
                    onClick={paginate(number)}
                    >
                        {number}
                    </Button>
                ))
            }
        </div>

    );
}

export default Pagniation
