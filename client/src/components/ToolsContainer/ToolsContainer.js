import React, {Component} from 'react'

// Components
import CategoryFilter from '../CategoryFilter'
import ToolCard from '../ToolCard'
import Tools from '../Tools'

export default class ToolsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayedCategory: [
        77701, 77702, 77703, 77704
      ], // will need to be set from the store in redux not sure if the action & reducer for this belong with this component yet?
      tools: [{
        id: 55501,
        category_id: 77702,
        name: 'lawn Mower',
        description: 'Ryobi 190cc....',
        image: '/placeholder-image.jpeg',
        active: true
      }]
    }
    this.filterCategory = this.filterCategory.bind(this)
  }

  componentDidMount () {
    this.props.fetchTools()
  }

  filterCategory (selectedCategory) {
    this.setState({
      displayedCategory: [Number(selectedCategory)]
    })
  }

  render () {
    return (
    <CategoryFilter filterCategory={this.filterCategory}/>
    this.state.tools.map((tool) => {
      if (displayedCategory.contains(this.state.tool.categoryId)) {
        return <ToolCard
          key={tool.id}
          name={tool.name}
          image={tool.image}
          description={tool.description}/>
      }
    })
  )
  }
}
