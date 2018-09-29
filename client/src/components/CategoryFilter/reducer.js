import {RECEIVE_CATEGORIES, ADD_CATEGORY_FILTER} from './actions'

const defaultState = [
  {
    id: 77701,
    name: 'Sewing',
    description: 'Everything to do with sewing',
    image: '/placeholder-image.jpeg'
  }
]

export function categories (state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories

    default:
      return state
  }
}

export function toolCategoryId (state = null, action) {
  switch (action.type) {
    case ADD_CATEGORY_FILTER:
      return action.categoryId

    default:
      return state
  }
}
