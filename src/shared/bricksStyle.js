import brick1 from '../assets/bricks/01-Breakout-Tiles.png';
import brick2 from '../assets/bricks/02-Breakout-Tiles.png';
import brick3 from '../assets/bricks/03-Breakout-Tiles.png';
import brick4 from '../assets/bricks/04-Breakout-Tiles.png';
import brick5 from '../assets/bricks/05-Breakout-Tiles.png';
import brick6 from '../assets/bricks/06-Breakout-Tiles.png';
import brick7 from '../assets/bricks/07-Breakout-Tiles.png';
import brick8 from '../assets/bricks/08-Breakout-Tiles.png';
import brick9 from '../assets/bricks/09-Breakout-Tiles.png';
import brick10 from '../assets/bricks/10-Breakout-Tiles.png';
const bricksImage = [
    brick1,
    brick2,
    brick3,
    brick4,
    brick5,
    brick6,
    brick7,
    brick8,
    brick9,
    brick10
]
export default function BricksStyle(level, bricks, canvas, brick) {
    brick.width = canvas.width / 15;
    const bricksPerRow = 14; 
    const totalBrickWidth = bricksPerRow * brick.width;

    let newbricks = [];
    if (!bricks) {
        return [];
    }
    // If all the levels are filled
    if (bricks.length >= 5 * level) {
        return;
    }
    // Brick Formation here
    const startX = (canvas.width - totalBrickWidth) /3 ;
    for (let i = 0; i < bricksPerRow * level; i++) {
        const randomIndex = Math.floor(Math.random() * bricksImage.length); // Generate a random index
        const randomBrickImage = bricksImage[randomIndex];
        
        let newBrick = new SingleBrick(
            brick.x + brick.width + startX,
            brick.y-brick.height + startX,
            brick.width,
            brick.height,
            randomBrickImage // Assign the random image to the brick
        );
        newbricks.push(newBrick);
        brick.x += brick.width + 1;
        if (brick.x + brick.width >= canvas.width) {
            brick.x = 0.5;
            brick.y += brick.height + 7;
        }
    }
    return newbricks;
}


class SingleBrick {
    constructor(x, y, w, h, image) {
        this.x = x - w;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = image;
        this.broke = false;
    }

    draw(ctx) {
        if (this.broke) {
            // If the brick is broken, don't draw anything (transparent)
            return;
        }
        let img = new Image();
        img.src = this.image; // Use the assigned image for this brick
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }
}
