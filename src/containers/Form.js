import { connect } from 'react-redux'
import Form from '../components/Form'

const mapState = ({todo})=>({
    pending: todo.pending,
    items: todo.items
});
const mapDispatch = dispatch => ({
    add: ()=>{}
})

export default connect (mapState, mapDispatch)(Form)