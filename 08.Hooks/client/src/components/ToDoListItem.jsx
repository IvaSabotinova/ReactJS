import {ListGroup} from 'react-bootstrap'

export default function ToDoListItem({
    _id,
    text,
    isCompleted
}) {
    return (
        <ListGroup.Item action >
            {_id} - {text}
        </ListGroup.Item>
    );
}