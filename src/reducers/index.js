import R from 'ramda';
import { combineReducers } from 'redux';
import { GET_HORSE_LIST, RECEIVE_HORSE_LIST } from '../actions';

function horses(state = {}, action) {
  switch (action.type) {
    case GET_HORSE_LIST:
      return state;

    case RECEIVE_HORSE_LIST:
      return R.merge(state, action.payload);

      default:
      return state;
  }
};

export default combineReducers({
  horses,
});
