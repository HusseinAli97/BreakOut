export default function ballDriaction(ballObject,canvas) {
    if (ballObject.x <= 0 || ballObject.x > (canvas.width-20)) {
        ballObject.dx *= -1;
    }
    if (ballObject.y <= 0 
        || ballObject.y + ballObject.rad > (canvas.height-10)) {
        ballObject.dy *= -1;
    }

}