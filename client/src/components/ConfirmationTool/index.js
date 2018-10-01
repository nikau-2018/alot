import React from 'react'
import {Button, Divider, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default class ConfirmationTool extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tool: {}
    }
  }

  componentDidMount () {
    this.setState({tool: this.props.selectedTool})
  }

  render () {
    const tool = this.state.tool
    const returnPath = `/tools/${tool.categoryId}/${tool.id}`
    return (
      <div className='confirmation'>
        <h1>Confirm Your Tool Rental</h1>
        <Divider/>
        <Link to={`/tools/${tool.id}`}>
          <Image
            src={tool.image}
            size='small'
          />
        </Link>
        <h2>{tool.name}</h2>
        <br/>
        <p>Would like to rent this tool?</p>
        <br/>
        <p>It will be available for collection from 9am Monday - Friday</p>
        <Button.Group>
          <Link to='#'>
            <Button positive>Confirm</Button>
          </Link>
          <Button.Or />
          <Link to={returnPath}>
            <Button>Cancel</Button>
          </Link>
        </Button.Group>
      </div>
    )
  }
}
