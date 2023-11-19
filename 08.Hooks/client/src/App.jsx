import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { useEffect, useState } from 'react';
import AddToDoModal from './components/AddToDoModal';

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
      body: JSON.stringify(values)
    })

    const result = await response.json();

    setToDos(state => ([...state, result]))
    setShownModal(false);
  }

  const onClickShowModal = (e) => {
    //  e.preventDefault();
    setShownModal(true);

  }

  const closeModalHandler = () => {
    setShownModal(false);
  }

  const onClickDelete = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });

    setToDos(state => state.filter(x => x._id !== id));

  }

  return (
    <>
      <Header />
      <ToDoList toDos={toDos} onClickShowModal={onClickShowModal} onClickDelete={onClickDelete} />
      <AddToDoModal isShown={isShownModal} onToDoSubmit={onToDoSubmit} closeModalHandler={closeModalHandler} />

    </>
  )
}

export default App
