import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { useEffect, useState } from 'react';
import AddToDoModal from './components/AddToDoModal';

function App() {
  const [toDos, setToDos] = useState([]);
  const baseUrl = 'http://localhost:3300/jsonstore/todos/';

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setToDos(Object.values(data)))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Header />
      <ToDoList toDos={toDos} />
      <AddToDoModal />
     
    </>
  )
}

export default App
