import './create-edit.css';
import * as gameService from '../../services/gameService';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const GameEdit = () => {
    const { gameId } = useParams();
    const navigate = useNavigate();
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });

    useEffect(() => {
        gameService.getGameDetails(gameId)
            .then(result => setGame(result))
    }, [gameId]);

    const changeHandler = (e) => {
        setGame(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const editGameHandler = async (e) => {
        e.preventDefault();     

        try {
            await gameService.editGameById(gameId, game);
            navigate('/games');
        }
        catch (err) {
            //Error notification
            console.log(err);
        }
    }

    // const { formValues, onChange, onSubmit } = useForm(game, editGameHandler)

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editGameHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={game.title}
                        onChange={changeHandler}
                        placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={game.category}
                        onChange={changeHandler}
                        placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input min="1" placeholder="1"
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        onChange={changeHandler}
                        value={game.maxLevel} />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={game.imageUrl}
                        onChange={changeHandler}
                        placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={game.summary}
                        onChange={changeHandler}
                    ></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
        </section>
    );
}

export default GameEdit;