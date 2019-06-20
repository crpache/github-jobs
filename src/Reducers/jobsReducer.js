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
} from '../Actions/actionTypes';

const initialState = {
  allJobs: [],
  favJobs: [],
  search: {
    description: '',
    location: '',
    fullTime: true
  },
  isFetching: false,
  selectedJob: {},
  modalOpen: false,
  interestedTerm: ''
}

const jobsReducer = (state = initialState, action) => {
  console.log("ACTION: ",action);
  switch (action.type) {
    case GET_JOBS_REQUEST:
      return {
        ...state,
        allJobs: [],
        isFetching: true,
      }
    case GET_JOBS_SUCCESS:
      console.log(action.payload.response);
      const favsIds = state.favJobs.map(job => job.id);
      const allJobs = action.payload.response.map(job => {
        if(favsIds.includes(job.id)){
          job.isFav = true;
        }
        return job;
      })
      return {
        ...state,
        allJobs,
        isFetching: false
      }
    case GET_JOBS_FAILURE:
      return {
        ...state,
        allJobs: [],
        isFetching: false
      }
    case SET_SEARCH_LOCATION:
      return {
        ...state,
        search: {
          ...state.search,
          location: action.payload.location
        }
      }
    case SET_SEARCH_DESCRIPTION:
      return {
        ...state,
        search: {
          ...state.search,
          description: action.payload.description
        }
      }
    case SET_SEARCH_FULLTIME:
      return {
        ...state,
        search: {
          ...state.search,
          fullTime: !state.fullTime
        }
      }
    case ADD_FAVORITE_JOB:
      const [fav] = state.allJobs.filter(job => job.id === action.payload.id);
      fav.isFav = true; // C
      return {
        ...state,
        favJobs: [...state.favJobs, fav],
      }
    case REMOVE_FAVORITE_JOB:
      const [fav1] = state.allJobs.filter(job => job.id === action.payload.id);
      fav1.isFav = false;
      const favJobs = state.favJobs.filter(job => job.id !== action.payload.id);
      return {
        ...state,
        favJobs: favJobs
      }
    case SELECT_JOB:
      return {
        ...state,
        selectedJob: action.payload.job,
        modalOpen: true
      }
    case UNSELECT_JOB:
      return {
        ...state,
        selectedJob: {},
        modalOpen: false
      }
    case SET_STATE_FROM_LOCAL_STORAGE:
      return {
        ...state,
        allJobs: action.payload.state.allJobs,
        favJobs: action.payload.state.favJobs
      }
    case SET_INTERESTED_TERM:
      return {
        ...state,
        interestedTerm: action.payload.term.toUpperCase()
      }
    default:
      return state;
  }
}

export default jobsReducer;