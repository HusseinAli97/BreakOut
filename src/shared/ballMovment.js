export function BallMovment(ctx, ballObject,img) {
    let gameData = new Ball(ballObject.x, ballObject.y, ballObject.dx, ballObject.dy, ballObject.speed, ballObject.rad);
    gameData.draw(ctx, img);
    ballObject.x += ballObject.dx;
    ballObject.y += ballObject.dy;
}
class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.rad = 20;
    }
    draw(ctx, img) {
        ctx.drawImage(img, this.x, this.y, this.rad, this.rad);
    }
}