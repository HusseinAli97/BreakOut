export default function paddelCollision(ballObject, paddle) {
    if (
        ballObject.x + ballObject.rad > paddle.x &&
        ballObject.x - ballObject.rad < paddle.x + paddle.width &&
        ballObject.y + ballObject.rad > paddle.y
    ) {
        ballObject.dy *= -1;
        const relativeCollisionPoint = ballObject.x - (paddle.x + paddle.width / 2);
        const collisionAngle = (relativeCollisionPoint / (paddle.width / 2)) * (Math.PI / 4);
        ballObject.dx = ballObject.speed * Math.sin(collisionAngle);
    }
}