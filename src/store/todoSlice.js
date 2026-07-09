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
    // 🔥 THÊM CHỖ NÀY: Hàm xóa toàn bộ task đã hoàn thành
    clearCompleted: (state) => {
      state.items = state.items.filter((item) => !item.isCompleted);
      localStorage.setItem('todos', JSON.stringify(state.items));
    },
  },
});

// 🔥 NHỚ THÊM 'clearCompleted' VÀO ĐÂY ĐỂ EXPORT RA NGOÀI NHA BỒ
export const { addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;