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
        gameData.ballObject.dy +=.1;
        gameData.ballObject.dx +=.1;
        gameData.ballObject.speed +=3;
        gameData.paddle.width -= 50; 
        return
        
    }
}