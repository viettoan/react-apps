import { AC } from "../actions/types";

export default function acReducer (state = '0', action) {
    if (action.type === AC) {
        return state;
    }

    return state;
}