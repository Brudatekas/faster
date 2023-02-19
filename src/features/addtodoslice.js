import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoreducer = createSlice({
  name: "todoreduxer",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removetodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.pop(index);
    },
  },
});

export const { addtodo, removetodo } = todoreducer.actions;

export default todoreducer.reducer;
