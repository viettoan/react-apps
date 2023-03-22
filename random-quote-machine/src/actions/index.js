import { ADD_QUOTE, CHANGE_QUOTE } from "./types";

export const addQuote = ({id, content, author, color}) => ({
   type: ADD_QUOTE,
   payload: {
       id,
       content,
       author,
       color
   }
});

export const changeQuote = id => ({
   type: CHANGE_QUOTE,
   payload: {
       id
   }
});