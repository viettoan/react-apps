import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import monitorReducersEnhancer from "../enhancers/monitorReducers";
import loggerMiddleware from "../middleware/logger";
import todosReducer from  "../reducers/todos"

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: {
            todos: todosReducer
        },
        middleware: [loggerMiddleware, ...getDefaultMiddleware()],
        preloadedState,
        enhancers: [monitorReducersEnhancer]
    })

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
    }

    return store
}