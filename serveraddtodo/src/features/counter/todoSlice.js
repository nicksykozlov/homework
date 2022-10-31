import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("todo/fetchTodo", async () => {
  const response = await fetch(`http://192.168.0.139:3000/todos`);
  const json = await response.json();
  return json
});

export const delTodo = createAsyncThunk(
  "todo/delTodo",
  async (id, { dispatch }) => {
    const response = await fetch(`http://192.168.0.139:3000/todos/${id}`, {
      method: "DELETE",
    });
    console.log(response);

    dispatch(removeTodo(id));
  }
);

export const addTodos = createAsyncThunk(
  "todo/addTodo",
  async (text, { dispatch }) => {
    const todo = {
      text: text,
      completed: false,
    };

    const response = await fetch(`http://192.168.0.139:3000/todos`, {
      method: "POST",
      headers:{
        "Content-Type":'aplication.json'
      },
      body: JSON.stringify(todo),
      
    });
     

    dispatch(addTodo(todo));
  }
);

export const todoSlice = createSlice({
  name: "todo",

  initialState: {
    value: [],
    status: "idle",
  },

  reducers: {
    removeTodo: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export const { removeTodo, addTodo } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;
