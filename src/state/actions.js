export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST'
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS'
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE'

export const fetchRequest = () => {
  return {
    type: FETCH_PROJECTS_REQUEST
  }
}

export const fetchSuccess = projectData => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: projectData
  }
}

export const fetchFailure = error => {
  return {
    type: FETCH_PROJECTS_FAILURE,
    payload: error
  }
}