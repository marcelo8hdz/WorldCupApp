import GetGame from './getGame'
import { useState, useEffect } from 'react'

export default function GetGames({api, user}){
    const [games, setGames] = useState([])

    useEffect(() =>{
        api.get('/games/nextgames').then(res => {
            setGames(res.data)
        })
    }, []);

    return(
        <div>
            {games.map( game => (
                <GetGame game = {game} api = {api} user = {user} madness = {false} points = {3}/>
            ))}
        </div>
    )
}