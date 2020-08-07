import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';

import { rootReducer } from '../redux/reducer';

export const createTodoStore = () => {
    // apply middleware
    const middleware = applyMiddleware(
        reduxLogger,
    );

    const store = createStore(rootReducer, middleware);

    return store;
}