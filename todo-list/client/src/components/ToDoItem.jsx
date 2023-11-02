
export default function ToDoItem({
  _id,
  text,
  IsCompleted,
  changeStatus}) {

  const changeStatusHandler = () => {
    changeStatus(_id);    
  }
  return (
    <tr className={`todo${IsCompleted ? ' is-completed' : ''}`}>
      <td>{text}</td>
      <td>{IsCompleted ? 'Completed' : 'Incomplete'}</td>
      <td className="todo-action">
        <button onClick={changeStatusHandler} className="btn todo-btn">Change status</button>
      </td>
    </tr>
  );
}
