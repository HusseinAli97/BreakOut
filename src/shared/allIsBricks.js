import { gameData } from "./gameData";
export default function AllBroken(bricks, Player, canvas, ballObject) {

    let total = 0;
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].broke) {
            total++;
        }
    }
    if (total === bricks.length) {
        gameData.Player.Level++;
        gameData.ballObject.speed +=.2;
        gameData.paddle.width -= 15; 
        ballObject.x = gameData.paddle.x + gameData.paddle.width / 2;
        ballObject.y = gameData.paddle.y - 30;
        return
    }
}