import * as TYPES from '../actionTypes';

const initialState = {
    items: {},
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_TODO:
            const { id, content } = action.payload;
            return {
                ...state, items: {
                    ...state.items, 
                    [id]: {
                        content,
                        completed: false,
                    }
                }
            };
        case TYPES.REMOVE_TODO:
            const { idToRemove } = action.payload;
            const newItems = { ...state.items }
            delete newItems[idToRemove];
            return {
                ...state, items: {
                    ...newItems,
                }
            };
        case TYPES.TOGGLE_TODO:
            const { idToToggle } = action.payload;
            return {
                ...state, items: {
                    ...state.items,
                    [idToToggle]: {
                        ...state.items[idToToggle],
                        completed: !state.items[idToToggle].completed,
                    }
                }
            };
        default:
            return state;

    }
}