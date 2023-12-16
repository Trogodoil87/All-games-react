import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as gameService from "../services/gameService";

export const Edit = () => {
    const [game, setGame] = useState({});
    const { gameId } = useParams();

    useEffect(() => {
        gameService.getById(gameId)
            .then(result => {
                setGame(result);
            });
    }, [gameId]);

    function onSubmitClickHandler(e) {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));

    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmitClickHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={game.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={game.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value={game.maxLevel} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={game.imageUrl} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
}