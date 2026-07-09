import { useContext } from 'react';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import ThemeContext from './context/ThemeContext';
import { useSelector, useDispatch } from 'react-redux';
import { clearCompleted } from './store/todoSlice';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { items } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // Tính toán số lượng cho thanh Progress hiển thị ngay tại App.jsx để xếp đặt vị trí cho dễ
  const completedCount = items.filter(todo => todo.isCompleted).length;
  const totalCount = items.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-100/70 dark:bg-zinc-950 flex items-center justify-center p-4 antialiased transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100/50 dark:border-zinc-800 transition-colors duration-300">
        
        {/* Header App */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-200 dark:shadow-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-zinc-100 tracking-tight">Mini Todo</h1>
          </div>

          {/* Nút đổi Theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 hover:scale-105 transition-all cursor-pointer"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.59 1.59m12.38 12.38l1.59 1.59M3 12h2.25m13.5 0H21M5.81 18.59l-1.59 1.59m12.38-12.38l1.59-1.59M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>
        </div>

        {/* 1. Trên cùng: Tiến độ công việc */}
        <div className="mb-4 select-none">
          <div className="text-slate-400 dark:text-zinc-500 font-medium text-sm mb-2">
            {completedCount} of {totalCount} completed
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* 2. Ở giữa: Ô Nhập Công Việc */}
        <TodoInput />

        {/* 3. Ở dưới: Bộ Lọc Trạng Thái */}
        <TodoFilter />

        {/* 4. Danh Sách Công Việc */}
        <TodoList />

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-sm font-medium text-slate-400 dark:text-zinc-500 select-none">
          <span>{items.length} {items.length <= 1 ? 'task' : 'tasks'} total</span>
          
          {/* 🔥 CHỈ HIỆN KHI CÓ ÍT NHẤT 1 TASK COMPLETED */}
          {items.some(todo => todo.isCompleted) && (
            <button 
              onClick={() => dispatch(clearCompleted())}
              className="hover:text-indigo-500 dark:hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Clear completed
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;