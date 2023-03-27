import {RESET_FORMULA, RESET_OUTPUT, UPDATE_FORMULA, UPDATE_OUTPUT} from "../actions/types";

export default function formulaReducer (state = '', action) {
    switch (action.type) {
        case UPDATE_FORMULA:
            if (action.payload.formula === 'x') {
                action.payload.formula = '*'
            }
            return state === '' ? action.payload.formula : state + action.payload.formula;
        case RESET_FORMULA:
            return '';
        default:
            return state;
    }
}