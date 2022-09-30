import { UserActionType } from '../action-types';
import { User } from '../../interfaces/user';

interface SetUserAction {
  type: UserActionType.SET_USER;
  payload: User;
}

interface UpdateUserAction {
  type: UserActionType.UPDATE_USER;
  payload: User;
}

export type UserAction = SetUserAction | UpdateUserAction;
