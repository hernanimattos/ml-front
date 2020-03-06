import { START_LOAD, FINISH_LOAD } from './loader.actions';

const initialState = {
  loader: false
};

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOAD:
      return {
        ...state,
        loader: action.loader
      };
    case FINISH_LOAD:
      return {
        ...state,
        loader: action.loader
      };

    default:
      return { ...state };
  }
};

export default loadReducer;
