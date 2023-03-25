import { UPDATE_CALCULATION } from "../actions/types";

export default function updateCalculationReducer (state = '0', action) {
    if (action.type === UPDATE_CALCULATION) {
        return state === '0' ? action.calculation : state + action.calculation;
    }

    return state;
}