import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
})


//useSelector tiplernen arasi okay deyil ona gorede bele script yazdiq
export type Rootstate = ReturnType<typeof rootReducer>