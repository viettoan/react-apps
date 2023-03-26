import { combineReducers } from "redux";
import acReducer from "./acReducer";
import updateCalculationReducer from "./updateCalculationReducer";

export default combineReducers({
    acReducer: acReducer,
    newCalculation: updateCalculationReducer
})