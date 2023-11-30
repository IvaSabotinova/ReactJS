import { useEffect, useState } from 'react';

import * as gameService from '../../services/gameService';
import withAuth from '../../HOC/withAuth';
import './home.css';
import LatestGames from './LatestGames';

const Home = ({
    email,
    username
}) => {

    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        gameService.getLatest()
            .then(result => setLatestGames(result))
    }, [])

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                { latestGames.map(x => <LatestGames key={x._id} {...x} />)}

                {!latestGames.length && <p className="no-articles">No games yet</p>}
                            
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </section>
    );
}

const EnhancedHome = withAuth(Home);

export default EnhancedHome;

