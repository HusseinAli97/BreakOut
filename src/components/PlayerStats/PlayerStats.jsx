import gameData from '../../shared/gameData';

export default function PlayerStats({score}) {
    function PlayerLivesHeart(){
        let heart = []
        for (let i = 0; i < gameData.Player.lives; i++) {
            heart.push(<i className="fa fa-heart text-danger mx-1"></i>)
        }
        return heart
    }
    return (
        <div className="text-center w-100 d-flex position-absolute top-0 justify-content-between align-items-center mt-2 py-1 px-5 bg-dark bg-opacity-75">
            <p className='m-0 fw-bold fs-5'>Player Name: {gameData.Player.name}</p>
            <p className='m-0 fw-bold fs-5'>Player Score: {score}</p>
            <p className='m-0 fw-bold fs-5'>Level: {gameData.Player.level}</p>
            <p className='m-0 fw-bold fs-5'>
                {
                    PlayerLivesHeart()
                }
            </p>
        </div>
    )
}
