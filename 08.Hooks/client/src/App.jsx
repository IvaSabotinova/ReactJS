import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { useEffect, useState } from 'react';
import AddToDoModal from './components/AddToDoModal';
import { ToDoContext } from './contexts/ToDoContext';

function App() {
  const [toDos, setToDos] = useState([]);
  const [isShownModal, setShownModal] = useState(false);
  const baseUrl = 'http://localhost:3300/jsonstore/todos/';

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setToDos(Object.values(data)))
      .catch((err) => console.log(err))
  }, [])

  const onToDoSubmit = async (values) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({...values, isCompleted: false})
    })

    const result = await response.json();

    setToDos(state => ([...state, result]))
    setShownModal(false);
  }

  const onClickShowModal = (e) => {
    setShownModal(true);

  }

  const closeModalHandler = () => {
    setShownModal(false);
  }

  const onClickDelete = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });

    setToDos(state => state.filter(x => x._id !== id));
  }

  const onClickCompleted = async (id) => {

    const currToDo = toDos.find(x => x._id === id);

    const response = await fetch(`${baseUrl}/${id}`,
      {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...currToDo,  isCompleted: !currToDo.isCompleted })
      });


    setToDos(state => state.map(x => x._id === id ? { ...x, isCompleted: !x.isCompleted } : x));
  }

  const contextValue = {
    onClickDelete,
    onClickCompleted
  }

  return (
    <>
      <ToDoContext.Provider value={contextValue}>
        <Header />
        <ToDoList toDos={toDos} onClickShowModal={onClickShowModal} />
        <AddToDoModal isShown={isShownModal} onToDoSubmit={onToDoSubmit} closeModalHandler={closeModalHandler} />
      </ToDoContext.Provider>
    </>
  )
}

export default App
