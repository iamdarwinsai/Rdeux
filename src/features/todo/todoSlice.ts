import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface TodoType {
  id: string;
  text: string;
}

interface TodoState {
  todo: TodoType[];
}

const initialState: TodoState = {
  todo: [
    {
      id: "1",
      text: "Hello Brother",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoType = {
        id: nanoid(),
        text: action.payload,
      };
      state.todo.push(newTodo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todo = state.todo.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
