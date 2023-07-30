import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_PLACE, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, places: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        places: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, places: action.payload.data };
    case FETCH_PLACE:
      return { ...state, place: action.payload.place };
    case LIKE:
      return { ...state, places: state.places.map((place) => (place._id === action.payload._id ? action.payload : place)) };
    case COMMENT:
      return {
        ...state,
        places: state.places.map((place) => {
          if (place._id == +action.payload._id) {
            return action.payload;
          }
          return place;
        }),
      };
    case CREATE:
      return { ...state, places: [...state.places, action.payload] };
    case UPDATE:
      return { ...state, places: state.places.map((place) => (place._id === action.payload._id ? action.payload : place)) };
    case DELETE:
      return { ...state, places: state.places.filter((place) => place._id !== action.payload) };
    default:
      return state;
  }
};

