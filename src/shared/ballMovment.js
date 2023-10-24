import { gameData } from "./gameData";

export function BallMovment(ctx, ballObject, img, gameState) {
    if (gameState === 'waiting') {
        // Set the initial position of the ball
        ballObject.x = gameData.paddle.x + gameData.paddle.width / 2;
        ballObject.y = gameData.paddle.y - ballObject.rad - 2;
        // Pause the ball's movement
        ballObject.dx = 0;
        ballObject.dy = 0;
        // Render the ball in the "waiting" position
        ctx.drawImage(img, ballObject.x, ballObject.y, ballObject.rad, ballObject.rad);
    } else {
        // Handle the ball's movement
        ballObject.x += ballObject.dx;
        ballObject.y += ballObject.dy;
        // Render the ball in its current position
        ctx.drawImage(img, ballObject.x, ballObject.y, ballObject.rad, ballObject.rad);
    }
}
