export default function BrickCollision(circle, rect, ballDirection) {
    const distX = Math.abs(circle.x - (rect.x + rect.width / 2));
    const distY = Math.abs(circle.y - (rect.y + rect.height / 2));

    if (distX > (rect.width / 2 + circle.rad) || distY > (rect.height-50 / 2 + circle.rad)) {
        return {
            hit: false,
            newDirection: ballDirection,
        };
    }

    if (distX <= rect.width / 2) {
        return {
            hit: true,
            axis: "Y",
            newDirection: Math.PI - ballDirection,
        };
    }

    if (distY <= rect.height / 2) {
        return {
            hit: true,
            axis: "X",
            newDirection: -ballDirection,
        };
    }

    const dx = distX - rect.width / 2;
    const dy = distY - rect.height / 2;

    if (dx * dx + dy * dy <= circle.rad * circle.rad) {
        const angle = Math.atan2(dy, dx);
        const newDirection = 2 * angle + ballDirection - Math.PI;

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
