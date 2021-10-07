import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from '../state/actions'

export const initialState = {
  projectData: null, 
  error: null
}

export const reducer = (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case FETCH_PROJECTS_REQUEST:
      return {
        ...initialState
      }
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projectData: payload
      }
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}
