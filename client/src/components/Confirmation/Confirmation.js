import React, {Component} from 'react'
import {Button, Divider, Icon, Item, Label, Image} from 'semantic-ui-react'

export default class Confirmation extends Component {
  render () {
    const type = (this.props.match.params.type)
    const toolId = Number(this.props.match.params.id)
    const [ selectedTool ] = this.props.tools.filter((tool) => toolId === tool.id)

    return (
      <div className='confirmation'>
      {
        (() => {
          switch(type) {
            case 'tool':
            return <h1>Confirm Your Tool Rental</h1>
            case 'workshop':
            return <h1>Confirm Your Workshop Booking</h1>
          }
        })()  // using an IIFE here, not entirely necessary probably but wanted to do it for learning
      }
      <Divider/>
      <Image src={selectedTool.image}/>
        <Item.Header as='a'>{selectedTool.name}</Item.Header>
        <Item.Meta>
          Tool subtitle
        </Item.Meta>
          {selectedTool.description}
          <br/>
          <p>Are you sure you would like to rent this tool?</p>
          <br/>
          <p>It will be available for collection from 9am Monday - Friday</p>
          <Button.Group>
            <Button>Cancel</Button>
            <Button.Or />
            <Button positive>Confirm</Button>
          </Button.Group>

      </div>
    )
  }
}

