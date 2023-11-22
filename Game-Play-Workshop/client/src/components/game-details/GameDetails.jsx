import './game-details.css';
import './comments.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';

const formInitialValues = {
    username: '',
    comment: ''
}

const GameDetails = () => {

    const [game, setGame] = useState({});
    const [formValues, setFormValues] = useState(formInitialValues);
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();

    useEffect(() => {
        gameService.getGameDetails(gameId)
            .then(setGame);

        commentService.getCommentsPerGame(gameId)
            .then(setComments)
    }, [gameId]);



    const createCommentHandler = async (e) => {
        e.preventDefault();

        // const formData = new FormData(e.currentTarget);
        // const newComment = await commentService.createComment(gameId, formData.get('username'), formData.get('comment'));

        const newComment = await commentService.createComment(gameId, formValues.username, formValues.comment);

        setComments(state => [...state, newComment]);
        setFormValues(formInitialValues)
        // document.querySelector('input[name="username"]').value = '';
        // document.querySelector('textarea[name="comment"]').value = '';
    }

    const changeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }


    return (<section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} alt={game.title} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">
                {game.summary}
            </p>

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(({ _id, username, text }) => (
                        <li key={_id} className="comment">
                            <p>Username: {username}</p>
                            <p>Content: {text}</p>
                        </li>))}
                </ul>
                {comments.length === 0 && (<p className="no-comment">No comments.</p>)}
            </div>

            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>

        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={createCommentHandler}>
                <input type="text" name="username" value={formValues.username} placeholder="username" onChange={changeHandler} />
                <textarea name="comment" value={formValues.comment} placeholder="Comment......" onChange={changeHandler}></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    </section>);
}

export default GameDetails;