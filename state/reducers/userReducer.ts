import { UserAction } from '../actions';
import { UserActionType } from '../action-types';

const initialState = {};

const reducer = (state: any = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.SET_USER:
      return action.payload;
    case UserActionType.UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {};
  }
};

export default reducer;
