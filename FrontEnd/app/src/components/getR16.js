import GetGame from './getGame'
import { useState, useEffect } from 'react'

export default function GetR16({api, user, groups, r16}){
    const [roundof16, setR16] = useState(r16)
    const [predictions, setPredictions] = useState([])
    const [pop, setPop] = useState(true)

    useEffect(() =>{
        let arr = []
        groups.map(group => {
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
        if (predictions.length != 8){
            return;
        }
        if (pop == false){
            return;
        }
        updateR16();
        setPop(false);
        
    });

    function updateR16(){
        let arr = []
        let game = {}
        for (let i = 0; i < groups.length; i++){
            predictions.map(prediction =>{
                if (prediction.game == groups[i]._id){
                    game = r16[i]
                    game.teams = [prediction.winner]
                    if (i % 2 == 0){
                        game.teams.push(predictions[i + 1].looser)
                    }else{
                        game.teams.push(predictions[i - 1].looser)
                    }
                    
                    arr.push(game) 
                }
            })
        }
        setR16(arr)
    }
    

    return(
        <div>
            {(!pop) && (roundof16.map( game => (
                <GetGame game = {game} api = {api} user = {user} madness = {true} points = {6}/>
            )))}
        </div>
    )
}