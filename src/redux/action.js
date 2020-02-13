const ADDING = "Adding data";
const ADDED = "Success add data";
const ADD_ERROR = "Added data error"

const startAdding = () =>({
    type: ADDING
})

const add = () => dispatch =>{
    dispatch(startAdding)
}