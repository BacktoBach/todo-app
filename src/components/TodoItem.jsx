import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-3.5 bg-slate-50/50 dark:bg-zinc-800/40 hover:bg-slate-50 dark:hover:bg-zinc-800/80 border border-slate-100 dark:border-zinc-800 rounded-2xl transition-all mb-2.5">
      <div className="flex items-center gap-3 flex-1 cursor-pointer" onClick={() => dispatch(toggleTodo(todo.id))}>
        {/* Nút Checkbox Tròn */}
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          todo.isCompleted 
            ? 'bg-indigo-500 border-indigo-500 text-white' 
            : 'border-slate-300 dark:border-zinc-600'
        }`}>
          {todo.isCompleted && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          )}
        </div>

              {/* Chữ hiển thị Todo */}
              <span className={`text-slate-700 dark:text-zinc-200 font-medium transition-all select-none ${
                  // 🟢 Đã sửa: Xóa decoration-2, đổi text-slate-400 thành text-slate-350/70 cho mờ nhẹ dễ chịu
                  todo.isCompleted ? 'line-through text-slate-400/70 dark:text-zinc-600' : ''
                  }`}>
                  {todo.text}
              </span>
          </div>

      {/* Cụm Action Buttons: Hiện mờ sẵn, di chuột vào rõ lên */}
      <div className="flex items-center gap-1">
        {/* ✏️ Icon Bút dùng để Edit */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            // Tính năng edit nâng cao tụi mình sẽ kích hoạt sau, giờ lên UI trước
            const newText = prompt("Edit your task:", todo.text);
            if (newText && newText.trim()) {
              // Bồ có thể dispatch action edit ở đây nếu muốn
            }
          }}
          className="text-slate-400 dark:text-zinc-500 hover:text-indigo-500 dark:hover:text-zinc-300 p-1.5 transition-all opacity-40 hover:opacity-100 cursor-pointer"
          title="Edit task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4.5 h-4.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.128-1.897L16.863 4.487Zm0 0L19.5 7.125" />
          </svg>
        </button>

        {/* 🗑️ Icon Thùng rác dùng để Xóa */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteTodo(todo.id));
          }}
          className="text-slate-400 dark:text-zinc-500 hover:text-rose-500 p-1.5 transition-all opacity-40 hover:opacity-100 cursor-pointer"
          title="Delete task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4.5 h-4.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.34 6m-4.74 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;