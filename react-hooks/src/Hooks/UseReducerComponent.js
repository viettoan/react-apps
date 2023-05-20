import { useReducer } from "react";
// state
const initState = {
    currentTodo: '',
    todos: []
};

// actions
const ADD_TODO = Symbol('add_todo');
const SET_CURRENT_TODO = Symbol('set_current_todo');
const createTodo = (todo) => ({
    type: ADD_TODO,
    todo
});
const setCurrentTodo = (todo) => ({
    type: SET_CURRENT_TODO,
    todo
});

// reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_TODO:
            return {
                ...state,
                currentTodo: action.todo
            }
        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, action.todo]
            };
        default:
            return state;
    }
}

export default function UseReducerComponent()
{
    const [state, dispatch] = useReducer(reducer, initState);
    const handleAdd = () => {
        dispatch(createTodo(state.currentTodo));
        dispatch(setCurrentTodo(''));
    }

    return (
        <>
            <input
                value={state.currentTodo}
                onChange={e => dispatch(setCurrentTodo(e.target.value))}
            />
            <button
                onClick={handleAdd}
            >
                ADD
            </button>
            <p>
                Danh sách công việc:
            </p>
            <ul>
                {
                    state.todos.map(
                        (todo, index) => (
                            <li key={index}>{todo}</li>
                        )
                    )
                }
            </ul>
        </>
    )
}