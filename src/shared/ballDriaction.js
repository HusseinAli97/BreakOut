import { gameData } from "./gameData";
export let gameEnd = false;

export default function ballDriaction(ballObject, canvas, paddleProps, setGame) {
    if (ballObject.x <= 0 || ballObject.x > (canvas.width - 20)) {
        ballObject.dx *= -1;
    }
    if (ballObject.y <= 0
        || ballObject.y + ballObject.rad > (canvas.height - 10)) {
        ballObject.dy *= -1;
    }
    if (ballObject.y + ballObject.rad > canvas.height - 10) {
        gameData.Player.Lives--;
        ballObject.x = paddleProps.x + paddleProps.width / 2;
        ballObject.y = paddleProps.y - 30;
        if (gameData.Player.Lives == 0) {
            ballObject.x = paddleProps.x;
            ballObject.y = paddleProps.y - 30;
            ballObject.dx = 0;
            ballObject.dy = 0;
            ballObject.speed = 1;
            ballObject.rad = 20;
            gameEnd = true;
            setGame(gameEnd);
            return
        }
    }
    if (gameData.Player.Score === 2000) {
        ballObject.x = paddleProps.x;
        ballObject.y = paddleProps.y - 30;
        ballObject.dx = 0;
        ballObject.dy = 0;
        ballObject.speed = 1;
        ballObject.rad = 20;
        gameEnd = true;
        setGame(gameEnd);
        return
    }
}