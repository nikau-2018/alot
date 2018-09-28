import React, {Component} from 'react'
import {Button, Icon, Item, Label, Image} from 'semantic-ui-react'

export default class Confirmation extends Component {
  render (props) {
    const toolId = Number(props.match.params.id)
    const selectedTool = props.tools.filter((tool) => toolId === tool.id)
    return (
      <div className='confirmation'>
        <Item>
          <Item.Image src=''/>
          <Item.Content>
            <Item.Header as='a'>{selectedTool.name}</Item.Header>
            <Item.Meta>
              Tool subtitle
            </Item.Meta>
            <Item.Description>
              {selectedTool.description}
              <p>Are you sure you would like to rent this tool?</p>
            </Item.Description>
            <Item.Extra>
              <Button.Group>
                <Button>Cancel</Button>
                <Button.Or />
                <Button positive>Confirm</Button>
              </Button.Group>
            </Item.Extra>
          </Item.Content>
        </Item>
      </div>
    )
  }
}
