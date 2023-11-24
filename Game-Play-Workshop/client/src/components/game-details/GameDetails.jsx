import './game-details.css';
import './comments.css';

import { useState, useEffect, useContext, useReducer, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';
import AuthContext from '../../context/AuthContext';
import reducer from './commentsReducer';
import useForm from '../../hooks/useForm';
import {pathToUrl} from '../../utils/pathUtil';
import Path from '../../paths'


const formInitialValues = {
    username: '',
    comment: ''
}

const GameDetails = () => {
    const { userId, email } = useContext(AuthContext)
    const [game, setGame] = useState({});
    // const [formValues, setFormValues] = useState(formInitialValues);
    // const [comments, setComments] = useState([]);
    const [comments, dispatch] = useReducer(reducer, []);
    const { gameId } = useParams();

    useEffect(() => {
        gameService.getGameDetails(gameId)
            .then(setGame);

        commentService.getCommentsPerGame(gameId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result
                })
            })
    }, [gameId]);



    const createCommentHandler = async (formValues) => {
        // e.preventDefault();

        // const formData = new FormData(e.currentTarget);
        // const newComment = await commentService.createComment(gameId, formData.get('username'), formData.get('comment'));

        const newComment = await commentService.createComment(gameId, formValues.comment);

        //setComments(state => [...state, { ...newComment, owner: { email } }]);
        newComment.owner = { email };
        dispatch({
            type: 'CREATE_NEW_COMMENT',
            payload: newComment
        });



        // setFormValues(formInitialValues)
        // document.querySelector('input[name="username"]').value = '';
        // document.querySelector('textarea[name="comment"]').value = '';
    }

    // const changeHandler = (e) => {
    //     setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    // }

    //temp solution for edit
    const commentInitialValue = useMemo(() => ({
        comment: ''
    }), [])

    const { formValues, onChange, onSubmit } = useForm(commentInitialValue, createCommentHandler);


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
                    {comments.map(({ _id, text, owner: { email } }) => (
                        <li key={_id} className="comment">
                            <p>Email: {email}</p>
                            <p>Content: {text}</p>
                        </li>))}
                </ul>
                {comments.length === 0 && (<p className="no-comment">No comments.</p>)}
            </div>
            {userId === game._ownerId && (<div className="buttons">
                <Link to={pathToUrl(Path.GameEdit, {gameId})} className="button">Edit</Link>
                <Link to="/games/:gameId/delete" className="button">Delete</Link>
            </div>)}

        </div>

        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmit}>
                {/* <input type="text" name="username" value={formValues.username} placeholder="username" onChange={changeHandler} /> */}
                <textarea name="comment" value={formValues.comment} placeholder="Comment......" onChange={onChange}></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    </section>);
}

export default GameDetails;