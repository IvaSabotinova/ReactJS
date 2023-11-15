import './game-list.css';
import * as gameService from '../../services/gameService';
import { useState, useEffect } from 'react';
import GameListItem from './GameListItem';

const GameList = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        gameService.getAll()
            .then(setGames)

    }, []);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.map(x=> <GameListItem key={x._id} {...x}/>)}

          {games.length === 0 && (<h3 className="no-articles">No articles yet</h3>)}  
        </section>
    );
}

export default GameList;