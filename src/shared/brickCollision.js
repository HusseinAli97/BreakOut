export default function BrickCollision(circle, rect, ballDirection) {
    var distX = Math.abs(circle.x - rect.x - rect.width / 2);
    var distY = Math.abs(circle.y - rect.y - rect.height / 2);

    if (distX > rect.width / 2 + circle.rad) {
        return {
            hit: false,
            newDirection: ballDirection,
        };
    }
    if (distY > rect.height-50 / 2 + circle.rad) {
        return {
            hit: false,
            newDirection: ballDirection,
        };
    }

    if (distX <= rect.width / 2) {
        return {
            hit: true,
            axis: "Y",
            newDirection: Math.PI - ballDirection, // Reflect in the Y direction
        };
    }
    if (distY <= rect.height / 2) {
        return {
            hit: true,
            axis: "X",
            newDirection: -ballDirection, // Reflect in the X direction
        };
    }

    // Handle corner collisions
    var dx = distX - rect.width / 2;
    var dy = distY - rect.height / 2;
    if (dx * dx + dy * dy <= circle.rad * circle.rad) {
        // Calculate the angle between the center of the circle and the corner point
        var angle = Math.atan2(dy, dx);

        // Calculate the new direction for the ball based on the collision angle
        var newDirection = 2 * angle - ballDirection;

        return {
            hit: true,
            axis: "corner",
            newDirection: newDirection,
        };
    }

    return {
        hit: false,
        newDirection: ballDirection,
    };
}