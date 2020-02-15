import { combineReducers } from 'redux'

const statuses = ['in progres', 'done']

const initState={
    pending: false,
    items:[
        {
            name: 'Przyklad',
            status: statuses[0],
            date:'',
            hour:'',
        }
    ]
}

const todo = (state=initState, action)=>{
    return state
}


export default  combineReducers({
    todo
})