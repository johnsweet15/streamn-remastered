import { Dispatch } from 'redux';
import { User } from '../../interfaces/user';
import { UserActionType } from '../action-types';
import { UserAction } from '../actions/index';

export const setUser = (user: User) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.SET_USER,
      payload: user,
    });
  };
};

export const updateUser = (user: any) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.UPDATE_USER,
      payload: user,
    });
  };
};
