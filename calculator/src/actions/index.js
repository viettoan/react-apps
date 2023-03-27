import { UPDATE_FORMULA, RESET_FORMULA, UPDATE_OUTPUT, RESET_OUTPUT } from "./types";

export const updateFormula = formula => ({
    type: UPDATE_FORMULA,
    payload: {
        formula
    }
});

export const resetFormula = () => ({
   type: RESET_FORMULA
});

export const updateOutput = (output, isOperator) => ({
    type: UPDATE_OUTPUT,
    payload: {
        output,
        isOperator
    }
});

export const resetOutput = () => ({
    type: RESET_OUTPUT
});