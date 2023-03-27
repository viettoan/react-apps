import {RESET_OUTPUT, UPDATE_OUTPUT} from "../actions/types";

export default function outputReducer (state = '0', action) {
    switch (action.type) {
        case UPDATE_OUTPUT:
            return  action.payload.isOperator || state === '0' ? action.payload.output : state + action.payload.output;
        case RESET_OUTPUT:
            return '0';
        default:
            return state;
    }
}