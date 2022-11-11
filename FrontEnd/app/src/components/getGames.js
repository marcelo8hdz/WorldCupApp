import GetGame from './getGame'
import { useState, useEffect } from 'react'

export default function GetGames(props){
    const api = props.api
    const [games, getGames] = useState([])

    useEffect(() =>{
        api.get('/games').then(res => {
            getGames(res.data)
        })
    }, [])

    return(
        <div>
            {games.map( game => (
                <GetGame game = {game} api = {api}/>
            ))}
        </div>
    )
}