import { Button, Modal, Form } from 'react-bootstrap';
import { useForm } from '../hooks/useForm'

export default function AddToDoModal({
  onToDoSubmit,
  isShown,
  closeModalHandler
}) {
  const { formValues, changeHandler, onSubmit } = useForm({ text: '' }, onToDoSubmit);

  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal show={isShown} onHide={closeModalHandler} onEscapeKeyDown={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Add To Do Tasks</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>To Do</Form.Label>
              <Form.Control type="text" name="text" placeholder="put some task" value={formValues.name} onChange={changeHandler} />
            </Form.Group>
            <Button variant="primary" type="submit" >Submit</Button>
            <Button variant="secondary" style={{ marginLeft: '10px' }} onClick={closeModalHandler}>Close</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}