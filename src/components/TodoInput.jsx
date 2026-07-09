import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Nếu ô nhập trống hoặc toàn dấu cách thì bỏ qua

    // 🔥 Gửi nội dung chữ vào Redux Store bằng useDispatch
    dispatch(addTodo(inputValue));
    setInputValue(''); // Xóa sạch ô input sau khi thêm thành công
  };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                placeholder="What needs to be done?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-400"
            />
            <button
        type="submit"
        className="px-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold text-xl transition-colors shadow-sm shadow-indigo-200 flex items-center justify-center cursor-pointer"
      >
        +
      </button>
    </form>
  );
}

export default TodoInput;