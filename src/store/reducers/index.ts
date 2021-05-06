import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
})


//useSelector tiplernen arasi okay deyil ona gorede bele script yazdiq
export type Rootstate = ReturnType<typeof rootReducer>