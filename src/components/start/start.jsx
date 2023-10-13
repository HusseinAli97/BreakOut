import React, { useContext, useEffect, useState } from 'react';
import Board from '../board/board';
import styles from './start.module.css';
import { gameData } from '../../shared/gameData';
import sound from '../../assets/sound/Theme.ogg';
export default function Start() {
    const [gameStarted, setGameStarted] = useState(false);
    const [inputVisible, setInputVisible] = useState(false);
    const themeSound = new Audio(sound);

    const handleStartGame = () => {
        setInputVisible(true);
        themeSound.play();
        themeSound.loop = true;
        themeSound.volume = 0.4;
    };

    const handleNameChange = (e) => {
        gameData.Player.Name = e.target.value;
    };

    const handleNameSubmit = () => {
        if (gameData.Player.Name !== '') {
            setGameStarted(true);
        }
    };
    return (
        <div className={`d-flex align-items-center justify-content-center ${styles.fullScreen}`}>
            {!gameStarted ? (
                <div className="text-center">
                    <h1>Welcome to the Game</h1>
                    {!inputVisible ? (
                        <button className="btn btn-outline-warning btn-lg fw-bold" onClick={handleStartGame}>Start Game</button>
                    ) : (
                        <div>
                            <input
                                type="text"
                                className="form-control my-3 bg-dark placeholder-white text-white"
                                placeholder="Enter your name"
                                onChange={handleNameChange}
                            />
                            <button className="btn btn-outline-warning btn-lg fw-bold" onClick={handleNameSubmit}>Start</button>
                        </div>
                    )}
                </div>
            ) : (
                <Board />
            )}
        </div>
    );
}
