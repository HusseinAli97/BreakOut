export default  {
    ballObject: {
        x: 0,
        y: 250,
        dx: 2,
        dy: 2,
        speed: 1,
        rad: 20
    },
    brickObj: {
        x: 0.5,
        y: 50,
        width: 800 / 10 - 1,
        height: 20,
        density: 2,
    },
    paddle: {
        x: 100,
        y: 500-20,
        height: 20,
        width: document.body.clientWidth/10,
        colors: [
            'linear-gradient(90deg,rgb(7, 66, 108) 0%,rgb(52, 140, 202) 100%)',
        ]
        
    },
    Player : {
        Level : 1,
        Lives : 5,
        Score : 0,
        Name : ''
    }
}