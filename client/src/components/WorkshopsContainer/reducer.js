import {REQUEST_WORKSHOPS, RECEIVE_WORKSHOPS, RECEIVE_WORKSHOPS_ERROR} from './actions'

const defaultState = {
  workshops: [{
    id: 88801,
    categoryId: 77701,
    userId: null,
    name: 'Basic Sewing Workshop',
    description: '1-2 hours, great for beginners',
    body: 'In this workshop you will learn how to use a sewing machine and the stitching basics',
    image: '/placeholder-image.jpeg',
    instructor: 'Mary Valentine',
    dateTime: null,
    createdAt: '2018-09-27 23:01:38',
    updatedAt: '2018-09-27 23:01:38'
  }],
  error: null,
  pending: false
}

export default function (state = defaultState, {type, workshops, error}) {
  switch (type) {
    case REQUEST_WORKSHOPS:
      return {
        ...state,
        error: null,
        pending: true
      }
    case RECEIVE_WORKSHOPS:
      return {
        ...state,
        error: null,
        workshops,
        pending: false
      }
    case RECEIVE_WORKSHOPS_ERROR:
      return {
        ...state,
        error,
        tools: null,
        pending: false
      }
    default:
      return state
  }
}
