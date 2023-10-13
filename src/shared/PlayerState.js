export default function PlayerState(ctx, player, canvas) {
    // Name
    ctx.font = ".9rem Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Name: ${player.Name}`, 20, 30);

    // Lives
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    let gap = 0;
    for (let i = 0; i < player.Lives; i++) {
        ctx.fillText("❤️", canvas.width / 2 + gap, 30);
        gap += 30;
    }

    // Score
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${player.Score}`, canvas.width - 140, 30);
}