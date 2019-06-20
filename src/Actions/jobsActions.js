import { 
  GET_JOBS_REQUEST,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAILURE,
  SET_SEARCH_LOCATION,
  SET_SEARCH_DESCRIPTION,
  SET_SEARCH_FULLTIME,
  ADD_FAVORITE_JOB,
  REMOVE_FAVORITE_JOB,
  SELECT_JOB,
  UNSELECT_JOB,
  SET_STATE_FROM_LOCAL_STORAGE,
  SET_INTERESTED_TERM
} from './actionTypes';

const setSearchLocation = location => {
  return {
    type: SET_SEARCH_LOCATION,
    payload: {
      location
    }
  }
}

const setSearchDescription = description => {
  return {
    type: SET_SEARCH_DESCRIPTION,
    payload: {
      description
    }
  }
}

const setSearchFullTime = () => {
  return {
    type: SET_SEARCH_FULLTIME
  }
}

const getJobsRequest = () => {
  return {
    type: GET_JOBS_REQUEST
  }
}

const getJobsSuccess = response => {
  return {
    type: GET_JOBS_SUCCESS,
    payload: {
      response
    }   
  }
}

const getJobsError = error => {
  return {
    type: GET_JOBS_FAILURE,
    payload: {
      error
    }   
  }
}

const setInterestedTerm = term => {
  return {
    type: SET_INTERESTED_TERM,
    payload: {
      term
    }
  }
}

const fetchJobs = search => dispatch => {
  const endpoint = `/positions.json?description=${search.description}&full_time=${search.fullTime}&location=${search.location}`;
  dispatch(getJobsRequest())
  fetch(endpoint)
  .then(res => res.json())
  .then(res => {
    res.map(job => job.isFav = false);
    return res;
  })
  .then(res => {
    console.log("RESPONSE",res);
    return res;
  })
  .then(res => dispatch(getJobsSuccess(res)))
  .catch(err => dispatch(getJobsError(err)))
}

const addFavoriteJob = id => {
  return {
    type: ADD_FAVORITE_JOB,
    payload: {
      id
    }
  }
}

const removeFavoriteJob = id => {
  return {
    type: REMOVE_FAVORITE_JOB,
    payload: {
      id
    }
  }
}

const selectJob = job => {
  return {
    type: SELECT_JOB,
    payload: {
      job
    }
  }
}

const unselectJob = () => {
  return {
    type: UNSELECT_JOB
  }
}

const setStateFromLocalStorage = state => {
  return {
    type: SET_STATE_FROM_LOCAL_STORAGE,
    payload: {
      state
    }
  }
}

export {
  setSearchLocation,
  setSearchDescription,
  setSearchFullTime,
  fetchJobs,
  addFavoriteJob,
  removeFavoriteJob,
  selectJob,
  unselectJob,
  setStateFromLocalStorage,
  setInterestedTerm
}
