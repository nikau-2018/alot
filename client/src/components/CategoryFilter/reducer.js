import {RECEIVE_CATEGORIES} from './actions'

const defaultState = [
  {
    id: 77701,
    name: 'Sewing',
    description: 'Everything to do with sewing',
    image: '/placeholder-image.jpeg'
  }
]

function categories (state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories

    default:
      return state
  }
}

export default categories
