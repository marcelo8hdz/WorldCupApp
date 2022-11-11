import GetGame from './getGame'
import { useState, useEffect } from 'react'

export default function GetGames({api, user}){
    const [games, getGames] = useState([])

    useEffect(() =>{
        api.get('/games').then(res => {
            getGames(res.data)
        })
    }, [])

    return(
        <div>
            {games.map( game => (
                <GetGame game = {game} api = {api} user = {user} madness = {0} points = {3} />
            ))}
        </div>
    )
}