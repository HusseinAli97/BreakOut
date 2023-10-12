import React, { useEffect, useRef } from 'react';
import { BallMovment } from '../../shared/ballMovment';
import gameData from '../../shared/gameData';
import styles from './board.module.css';
import ballimg from '../../assets/58-Breakout-Tiles.png';
import ballDriaction from '../../shared/ballDriaction';
import paddelSetting from '../../shared/paddelSetting';
import Brick from '../../shared/bricks';
import BrickCollision from '../../shared/brickCollision';
import sound from '../../assets/sound/hit.ogg'
import paddelCollision from '../../shared/paddelCollision';
import PlayerStats from '../PlayerStats/PlayerStats';import { useState } from 'react';


export default function Board() {
    let { ballObject, brickObj, Player, paddle } = gameData;
    let bricks = [];
    const canvasRef = useRef(null);
    let audio = new Audio(sound);
    const [score,setScore] = useState(0);
    const [lives,setLives] = useState(5);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.src = ballimg;
        img.onload = () => {
            const render = () => {
                // Clear the canvas on each frame.
                let newBrickSet = Brick(2, bricks, canvas, brickObj);
                if (newBrickSet && newBrickSet.length > 0) {
                    bricks = newBrickSet;
                }
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                paddelCollision(ballObject, paddle);
                let brickCollision
                for (let i = 0; i < bricks.length; i++) {
                    brickCollision = BrickCollision(ballObject, bricks[i]);
                    if (brickCollision.hit && !bricks[i].broke) {
                        setScore((prev)=>{return prev+10} );
                        audio.play()
                        if (brickCollision.axis === "X") {
                            ballObject.dx *= -1;
                            bricks[i].broke = true;
                        } else if (brickCollision.axis === "Y") {
                            ballObject.dy *= -1;
                            bricks[i].broke = true;
                        }
                    }
                }

                bricks.map((brick) => {
                    return brick.draw(ctx);
                })
                BallMovment(ctx, ballObject, img);
                ballDriaction(ballObject, canvas);

                paddelSetting(ctx, canvas, gameData.paddle);
                requestAnimationFrame(render);
            };
            render();
        };
    }, []);

    return (
        <div className={styles.board}>
            <PlayerStats score={score} lives={lives}/>
            <canvas className={styles.canvas} ref={canvasRef} id="Canvas" width="800" height="500" onMouseMove={(e) => {
                paddle.x = e.clientX - paddle.width / 2 - 500
                document.body.style.cursor = 'none';
            }}>
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

        </div>
    );
}
