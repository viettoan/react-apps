import { ADD_QUOTE, CHANGE_QUOTE } from "../actions/types";
const internalState = {
    list: [],
    currentQuoteId: 0
}
export default function quoteReducer(state = internalState, action) {
    switch (action.type) {
        case ADD_QUOTE:
            return Object.assign({}, state, {
                list: [...state.list, action.payload],
            })
        case CHANGE_QUOTE:
            return Object.assign({}, state, {
                currentQuoteId: action.payload.id,
            })
        default:
            return state;
    }
}