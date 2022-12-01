import GetGame from './getGame'
import { useState, useEffect } from 'react'

export default function GetKnockOff({api, user, prevGames, currGames, points, gameCount}){
    const [showGames, setCurrGames] = useState(currGames)
    const [predictions, setPredictions] = useState([])
    const [pop, setPop] = useState(true)

    useEffect(() =>{
        let arr = []
        prevGames.map(group => {
            user.predictions.map(prediction => {
                api.get(`/predictions/${prediction}`).then(res => {
                    if (res.data[0].madness == true){
                        if (group._id == res.data[0].game){
                            arr.push(res.data[0])
                        }
                    }
                })
            })
        })
        setPredictions(arr);
    }, []);

    useEffect(() =>{
        if (predictions.length != gameCount * 2){
            return;
        }
        if (pop == false){
            return;
        }
        updatecurrGames();
        setPop(false);
        
    });

    function updatecurrGames(){
        let arr = currGames
        for (let i = 0; i < prevGames.length; i++){
            predictions.map(prediction =>{
                if (i < prevGames.length / 2 && prediction.game == prevGames[i]._id){
                    arr[i].teams.push(prediction.winner)
                }else if (i >= prevGames.length / 2 && prediction.game == prevGames[i]._id){
                    arr[i - (prevGames.length / 2)].teams.push(prediction.winner)
                }
            })
        }
        console.log('arg', arr)
        setCurrGames(arr)
    }
    

    return(
        <div>
            {showGames.length}
            {predictions.length}
            
            {(!pop) && (showGames.map( game => (
                <GetGame game = {game} api = {api} user = {user} madness = {true} points = {points}/>
            )))}
        </div>
    )
}