import {RECEIVE_CATEGORIES} from './actions'

const defaultState = {
  categories: [{
    id: 77701,
    name: 'Sewing',
    description: 'Everything to do with sewing',
    image: '/placeholder-image.jpeg'
  }],
  ready: false
}

function categories (state = defaultState, {type, categories}) {
  switch (type) {
    case RECEIVE_CATEGORIES:
      return {
        categories,
        ready: true
      }

    default:
      return state
  }
}

export default categories
