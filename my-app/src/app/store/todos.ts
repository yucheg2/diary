import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    content: string;
    cheked: boolean;
}

interface TodoosList {
    [date: string]: Todo[];
}

interface Error {
    [type: string]: object;
}

interface InitialState {
    loading: boolean;
    entities: TodoosList;
    errors: Error;
}

const initialState: InitialState = {
    loading: false,
    entities: {},
    errors: {},
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        todoAded(
            state,
            { payload }: PayloadAction<{ date: keyof TodoosList; todo: Todo }>
        ) {
            const { date, todo } = payload;
            if (state.entities[date]) {
                state.entities[date].push(todo);
            }
            state.entities[date] = [todo];
        },
    },
});

const { reducer: todosReducer } = todosSlice;

//selectors

export const getTodosSelector = (date: string) => (state: RootState) => {
    return state.todos.entities[date];
};

export default todosReducer;
