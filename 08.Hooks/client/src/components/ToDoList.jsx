import {ListGroup, Button} from 'react-bootstrap';
import ToDoListItem from './ToDoListItem';

export default function ToDoList({
    toDos

}) {
    return (
        <div style={{ width: '30%', margin: '10px auto' }}>
            <h1>ToDo List</h1>
            <ListGroup style={{marginBottom: '10px'}}>
               {toDos.map(x=>(<ToDoListItem key={x._id} {...x}/>))}
            </ListGroup>
            <Button variant="primary">Add</Button>
        </div>
    );
}