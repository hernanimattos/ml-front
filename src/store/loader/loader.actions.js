export const START_LOAD = 'START_LOAD';
export const FINISH_LOAD = 'FINISH_LOAD';

export const startLoad = () => {
  return dispatch => {
    return dispatch({
      type: START_LOAD,
      loader: true
    });
  };
};

export const finishLoad = () => {
  return dispatch => {
    return dispatch({
      type: FINISH_LOAD,
      loader: false
    });
  };
};
