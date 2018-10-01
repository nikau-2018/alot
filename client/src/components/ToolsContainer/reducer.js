import {REQUEST_TOOLS, RECEIVE_TOOLS, RECEIVE_TOOLS_ERROR} from './actions'

const defaultState = {
  tools: [{
    id: 55501,
    categoryId: 77702,
    name: 'lawn Mower',
    description: 'Ryobi 190cc....',
    image: '/placeholder-image.jpeg',
    active: true
  }],
  error: null,
  ready: false
}

export default function (state = defaultState, {type, tools, error}) {
  switch (type) {
    case REQUEST_TOOLS:
      return {
        ...state,
        error: null,
        ready: true
      }
    case RECEIVE_TOOLS:
      return {
        ...state,
        error: null,
        tools,
        ready: false
      }
    case RECEIVE_TOOLS_ERROR:
      return {
        ...state,
        error,
        tools: null,
        ready: false
      }
    default:
      return state
  }
}
