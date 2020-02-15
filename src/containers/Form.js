import { connect } from 'react-redux'
import Form from '../components/Form'
import { add } from '../redux/action'

const mapState = ({todo})=>({
    pending: todo.pending,
    items: todo.stepOne
});
const mapDispatch = dispatch => ({
    add: (task)=>dispatch(add(task))
})

export default connect (mapState, mapDispatch)(Form)