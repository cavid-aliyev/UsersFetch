import { IUserState, UserAction, UserActionTypes } from "../../types/user";


const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
};

// sonda Iuserstate ona gore lazimdiki bu reducer sonda obyekt qaytaracaq 
export const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
