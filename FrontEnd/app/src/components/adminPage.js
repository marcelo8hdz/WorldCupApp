import SetGames from './setGame';
import {useEffect, useState} from 'react';


export default function AdminPage(props){
    const loggedUser = props.user
    const api = props.api
    const [games, setGames] = useState([])

    useEffect(() =>{
        api.get('/games').then(res => {
            setGames(res.data)
        })
    }, [])

    return(
        <div>
            {games.map( game => (
                <SetGames game = {game} api = {api} key ={game._id} user = {loggedUser} />
            ))}
        </div>
    )
}