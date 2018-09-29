import {connect} from 'react-redux'

<<<<<<< HEAD
import styles from './styles.css'

export default function ToolDetail (props) {
  return (
    <div>
      <h1>{props.tool.name}</h1>
      <Divider/>
      <img src={props.tool.image}/>
      <h3>Description:</h3>
      <p>{props.tool.description}</p>
      <Link to={`/confirm/tool/${props.tool.id}`}>
        <Button basic color='green'>Rent</Button>
      </Link>
    </div>
  )
=======
import {fetchCategories} from '../CategoryFilter/actions'

import ToolDetail from './ToolDetail'

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
>>>>>>> d921b530a1da30a38e34b95aacbe7aaff8ec66dd
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolDetail)
