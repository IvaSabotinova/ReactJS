import { ListGroup, Button } from 'react-bootstrap';

export default function ToDoListItem({
    _id,
    text,
    isCompleted,
    onClickDelete
}) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListGroup.Item action >
                {_id} - {text}
            </ListGroup.Item>
            <Button variant="dark" onClick={() => onClickDelete(_id)}>X</Button>
        </div>
    );
}