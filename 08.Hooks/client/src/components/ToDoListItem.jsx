import { ListGroup, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

export default function ToDoListItem({
    _id,
    text,
    isCompleted,

}) {

    const { onClickDelete, onClickCompleted } = useContext(ToDoContext);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListGroup.Item action  onClick={()=>onClickCompleted(_id)}>
             <p style={{ textDecoration: isCompleted ? 'line-through' : 'none'}}>{_id}: {text} </p>   
            </ListGroup.Item>
            <Button variant="dark" onClick={() => onClickDelete(_id)}>X</Button>
        </div>
    );
}