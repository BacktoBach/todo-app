import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('todos')) || [],
  filter: 'All',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now().toString(),
        text: action.payload,
        isCompleted: false,
      });
      localStorage.setItem('todos', JSON.stringify(state.items));
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
      localStorage.setItem('todos', JSON.stringify(state.items));
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.items));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((item) => !item.isCompleted);
      localStorage.setItem('todos', JSON.stringify(state.items));
    },

    // 🔥 1. THÊM HÀM EDIT TODO VÀO ĐÂY NHA BỒ
    editTodo: (state, action) => {
      const { id, newText } = action.payload; // Nhận vào id và chữ mới từ component gửi lên
      const todo = state.items.find((item) => item.id === id);
      if (todo) {
        todo.text = newText; // Cập nhật lại nội dung text
      }
      localStorage.setItem('todos', JSON.stringify(state.items)); // Lưu lại vào LocalStorage
    },
  },
});


export const { addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted, editTodo } = todoSlice.actions;

export default todoSlice.reducer;