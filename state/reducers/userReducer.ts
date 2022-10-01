import { UserAction } from '../actions';
import { UserActionType } from '../action-types';
import { User, UserState } from '../../interfaces/user';

const initialState = null;

const reducer = (state: User | null = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.SET_USER:
      return action.payload;
    case UserActionType.UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
