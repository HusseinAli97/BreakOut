export default function paddleCollision(ballObject, paddleProps) {
    if (
        ballObject.x + ballObject.rad >= paddleProps.x &&
        ballObject.x - ballObject.rad <= paddleProps.x + paddleProps.width
    ) {
        if (ballObject.y + ballObject.rad >= paddleProps.y) {
            // Calculate where the ball hits the paddle
            const collidePoint = ballObject.x - (paddleProps.x + paddleProps.width / 2);
            const normalizedCollidePoint = collidePoint / (paddleProps.width / 2);
            const bounceAngle = normalizedCollidePoint * (Math.PI / 3);

            // Adjust the ball's direction
            ballObject.dx = ballObject.speed * Math.sin(bounceAngle);
            ballObject.dy = -ballObject.speed * Math.cos(bounceAngle);
        }
    }
}
