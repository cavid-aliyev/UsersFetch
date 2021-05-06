import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Rootstate } from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<Rootstate> = useSelector