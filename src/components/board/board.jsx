import React, { useContext, useEffect, useRef, useState } from 'react';
import { BallMovment } from '../../shared/ballMovment';
import { gameData } from '../../shared/gameData';
import styles from './board.module.css';
import ballimg from '../../assets/58-Breakout-Tiles.png';
import ballDriaction from '../../shared/ballDriaction';
import paddelSetting from '../../shared/paddelSetting';
import BrickStyle from '../../shared/bricksStyle';
import BrickCollision from '../../shared/brickCollision';
import sound from '../../assets/sound/hit.ogg'
import paddelCollision from '../../shared/paddelCollision';
import PlayerState from '../../shared/PlayerState.js';
import { gameEnd } from '../../shared/ballDriaction';
import AllBroken from '../../shared/allIsBricks';



export default function Board() {
    let { ballObject, brickObj, paddle, Player } = gameData;
    let [gameOver, setGame] = useState(gameEnd);
    let bricks = [];
    let brick = new Audio();
    brick.src = sound;
    brick.preload = "auto";

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = ballimg;
        img.onload = () => {
            
            const render = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                let newBrickSet = BrickStyle(Player.Level, bricks, canvas, brickObj);
                if (newBrickSet && newBrickSet.length > 0) {
                    bricks = newBrickSet;
                }
                let brickCollision
                for (let i = 0; i < bricks.length; i++) {
                    brickCollision = BrickCollision(ballObject, bricks[i]);
                    if (brickCollision.hit && !bricks[i].broke) {
                        if (brickCollision.axis === "X") {
                            ballObject.dx *= -1;
                            bricks[i].broke = true;
                        } else if (brickCollision.axis === "Y") {
                            ballObject.dy *= -1;
                            bricks[i].broke = true;
                        }
                        brick.play()
                        brick.volume = 0.2
                        Player.Score += 10;
                    }
                }
                bricks.map((brick) => {
                    return brick.draw(ctx);
                })
                paddelCollision(ballObject, paddle);
                BallMovment(ctx, ballObject, img, canvas);
                AllBroken(bricks, Player, canvas, ballObject);
                ballDriaction(ballObject, canvas,paddle,setGame);
                PlayerState(ctx, Player, canvas);
                paddelSetting(ctx, canvas, gameData.paddle);
                requestAnimationFrame(render);
            };
            render();
        };
    }, []);

    return (
        <div className={styles.board}>
            {gameOver ? (
                <>
                    <div className={`${styles.gameOver} d-flex align-items-center justify-content-center flex-column`}>
                        <h1 className='text-center'>Game Over</h1>
                        <p>Your Score: {Player.Score}</p>
                        <button className="btn btn-outline-warning btn-lg fw-bold" onClick={() => window.location.reload()}>
                            <i className="fas fa-redo-alt"></i> Play Again
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <canvas className={styles.canvas} ref={canvasRef} id="Canvas" width="800" height="500" onMouseMove={(e) => paddle.x =(e.clientX - e.clientY) - paddle.width / 2 }>
                        {
                            document.addEventListener('keydown', (e) => {
                                if (e.key === 'ArrowRight') {
                                    paddle.x += 15;
                                } else if (e.key === 'ArrowLeft') {
                                    paddle.x -= 15;
                                }
                            })
                        }
                    </canvas>

                </>

            )}
        </div>
    );
}
