import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/todoSlice';

function TodoFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todo.filter);

  const filterOptions = ['All', 'Active', 'Completed'];

  return (
    // Thêm mb-4 hoặc mt-4 để căn chỉnh khoảng cách hợp lý giữa ô nhập và danh sách
    <div className="flex gap-2 my-4">
      {filterOptions.map((option) => (
        <button
          key={option}
          onClick={() => dispatch(setFilter(option))}
          className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
            filter === option
              ? 'bg-slate-800 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm'
              : 'text-slate-400 dark:text-zinc-500 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-slate-800 dark:hover:text-zinc-200'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;