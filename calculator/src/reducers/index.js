import { combineReducers } from "redux";
import formulaReducer from "./formulaReducer";
import outputReducer from "./outputReducer";

export default combineReducers({
    formula: formulaReducer,
    output: outputReducer
})