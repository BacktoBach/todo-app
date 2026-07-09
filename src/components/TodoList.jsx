
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  // 🔥 Lấy dữ liệu từ Redux Store ra xài qua useSelector
  const { items, filter } = useSelector((state) => state.todo);

  // Logic tự động lọc danh sách dựa theo trạng thái nút Filter đang chọn
  const filteredTodos = items.filter((todo) => {
    if (filter === 'Active') return !todo.isCompleted;
    if (filter === 'Completed') return todo.isCompleted;
    return true; // Nếu là 'All' thì trả về hết
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="text-center py-10 text-slate-400 font-medium">
        No tasks yet. Add one above!
      </div>
    );
  }

  return (
    <div className="max-h-[350px] overflow-y-auto pr-1">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;