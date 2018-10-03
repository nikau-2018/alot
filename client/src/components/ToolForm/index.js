import React, {Component} from 'react'
import {Button, Form, Dropdown} from 'semantic-ui-react'

import styles from './styles.css'

export default class ToolForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedCategory: 'Select',
      toolId: 0,
      name: '',
      categoryId: null,
      description: '',
      body: '',
      image: 'https://www.fillmurray.com/200/300',
      active: true
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    if(this.props.parent === 'edit') {
      let {name, categoryId, id, description, image, active, body} = this.props.editing
      this.setState({
        selectedCategory: this.props.categoryName,
        name: name,
        toolId: id,
        categoryId: categoryId,
        description: description,
        image: image,
        active: active,
        body: body
      })
    }
  }

  render () {
    const { name, description, body } = this.state
    let {selectedCategory, error, toolId, ...rest} = this.state
    return (
      <div className={styles.toolForm}>
      {
      this.props.parent === 'edit'
      ? <h2 className={styles.header}>Edit this tool:</h2>
      : <h2 className={styles.header}>Add a tool:</h2>
      }
      <Form>
        <Form.Field className={styles.field} required>
          <p className={styles.label}>Name</p>
          <Form.Input
            transparent
            className={styles.input}
            name='name'
            placeholder='Tool Name'
            value={name}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field className={styles.field} required>
          <p className={styles.label}>Category</p>
          <Dropdown className={styles.dropdown} text={this.state.selectedCategory}>
            <Dropdown.Menu >
              {this.props.categories.map(category => (
                <Dropdown.Item
                  key={category.id}
                  text={category.name}
                  name='category'
                  onClick={() => this.setState({
                    categoryId: category.id,
                    selectedCategory: category.name
                  })}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Field>
        <Form.Field className={styles.field} required>
          <p className={styles.label}>Description</p>
          <Form.Input
            transparent
            className={styles.input}
            name='description'
            placeholder='Tool Description'
            value={description}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field className={styles.field} required>
          <p className={styles.label}>Details</p>
          <Form.Input
            transparent
            className={styles.input}
            name='body'
            placeholder='Tool Details'
            value={body}
            onChange={this.handleChange}
          />
        </Form.Field>
        <div className={styles.buttonContainer}>
          <Button className={styles.submit} onClick={() => this.props.handleSubmit(rest, toolId)}>Submit</Button>
          <Button className={styles.back} onClick={() => this.props.goBack()}>Go Back</Button>
        </div>
      </Form>
      </div>
    )
  }
}
