import { createContext, useState } from "react";
import gameData from "./gameData";
export const PlayerContext = createContext();

export default function PlayerContextProvider({children}){
    const [PlayerName, setPlayerName] = useState('');
    const [PlayerLevel, setPlayerLevel] = useState(1);
    const [PlayerScore, setPlayerScore] = useState(0);

    return (
        <PlayerContext.Provider value={{PlayerName, setPlayerName, PlayerLevel, setPlayerLevel, PlayerScore, setPlayerScore }}>
            {children}
        </PlayerContext.Provider>
    )
}