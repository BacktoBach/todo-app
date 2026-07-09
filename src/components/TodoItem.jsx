import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../store/todoSlice'; // Đảm bảo có editTodo trong slice

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  
  // 1. Tạo state quản lý việc bật/tắt chế độ sửa và giá trị chữ đang sửa
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // 2. Hàm xử lý khi lưu (khi nhấn Enter hoặc Blur ra ngoài)
  const handleSave = () => {
    if (editText.trim() !== '') {
      dispatch(editTodo({ id: todo.id, newText: editText }));
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setEditText(todo.text); // Hủy sửa, trả về chữ cũ
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl mb-2 group transition-all">
      <div className="flex items-center gap-3 flex-1 mr-2">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="w-5 h-5 rounded-full border-slate-300 text-indigo-500 focus:ring-indigo-500 cursor-pointer"
        />

        {/* 🔥 CHỖ THAY ĐỔI: HIỂN THỊ CHỮ HOẶC Ô INPUT TÙY TRẠNG THÁI */}
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave} // Bấm chuột ra ngoài tự lưu
            onKeyDown={handleKeyDown} // Nhấn Enter tự lưu
            className="flex-1 bg-transparent border-b border-indigo-500 outline-none text-slate-700 dark:text-zinc-200 py-0.5 font-medium autoFocus"
            autoFocus
          />
        ) : (
          <span
            className={`flex-1 font-medium select-none transition-all ${
              todo.isCompleted 
                ? 'line-through text-slate-400 dark:text-zinc-500 font-normal' 
                : 'text-slate-700 dark:text-zinc-200'
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      {/* Nhóm nút bấm hành động */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Nút sửa */}
        <button
          onClick={() => setIsEditing(true)} // Bấm vào đây để kích hoạt ô input
          className="p-1.5 text-slate-400 hover:text-indigo-500 dark:hover:text-zinc-300 rounded-lg cursor-pointer transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button>

        {/* Nút xóa */}
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="p-1.5 text-slate-400 hover:text-red-500 dark:hover:text-red-400 rounded-lg cursor-pointer transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;