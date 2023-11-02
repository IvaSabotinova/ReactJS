import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

export default function TodoList() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then((res) => res.json())
      .then((data) => {
        setToDos(Object.values(data));
        console.log(Object.values(data))
      })
      .catch(err => console.log(err))
  },[])

  const changeStatusObj = (_id) => {
    setToDos(x => x.map(obj => obj._id === _id ? { ...obj, isCompleted: !obj.isCompleted } : obj));
    
  }


  return (
    <>
      <section className="todo-list-container">
        <h1>Todo List</h1>

        <div className="add-btn-container">
          <button className="btn">+ Add new Todo</button>
        </div>

        <div className="table-wrapper">

          {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
          {/* <div className="loading-container">
              <div className="loading-spinner">
                <span className="loading-spinner-text">Loading</span>
              </div>
            </div> */}

          <table className="table">
            <thead>
              <tr>
                <th className="table-header-task">Task</th>
                <th className="table-header-status">Status</th>
                <th className="table-header-action">Action</th>
              </tr>
            </thead>
            <tbody>

              {toDos.map(x => (
                <ToDoItem
                  key={x._id}
                  _id={x._id}
                  text={x.text}
                  IsCompleted={x.isCompleted}
                  changeStatus={changeStatusObj}
                />))}

            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}