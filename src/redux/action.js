import firebase from '../config/fbConfig'

const ADDING = "Adding data";
const ADDED = "Success add data";
const ADD_ERROR = "Added data error"

const startAdding = () =>({
    type: ADDING
})

export const add = data => dispatch =>{
    dispatch(startAdding);

    firebase.firestore().doc('form').collection('dupa').set({stepOne:{
        data
        }
    },{merge: true}
    )
    .then(
        item => console.log(item)
    )
    .catch(()=>'dupa')
}