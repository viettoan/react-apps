import { AC, CALCULATE, UPDATE_CALCULATION } from "./types";

export const ac = () => ({
    type: AC,
});

export const updateCalculation = calculation => ({
    type: UPDATE_CALCULATION,
    payload: {
        calculation
    }
});