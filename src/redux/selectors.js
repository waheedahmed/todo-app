export const selectStateFromStore = (store) => store.todoReducer;
export const getTodoList = (store) => selectStateFromStore(store).items;
