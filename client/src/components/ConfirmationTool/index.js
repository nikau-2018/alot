import React from 'react'
import {Button, Divider, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const ConfirmationTool = (props) => (
  <div className='confirmation'>
    <h1>Confirm Your Tool Rental</h1>
    <Divider/>
    <Image
      src={props.selectedTool.image}
      size='small'
    />
    <h2>{props.selectedTool.name}</h2>
    <br/>
    <p>Would like to rent this tool?</p>
    <br/>
    <p>It will be available for collection from 9am Monday - Friday</p>
    <Button.Group>
      <Link to='#'>
        <Button positive>Confirm</Button>
      </Link>
      <Button.Or />
      <Link to='#'>
        <Button>Cancel</Button>
      </Link>
    </Button.Group>
  </div>
)

export default ConfirmationTool
