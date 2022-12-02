import GetR16 from './getR16';
import GetGame from './getGame'
import GetKnockOff from './getKnockOff'

import { useState, useEffect } from 'react'


export default function GetMadness({api, user}){
    const [pop, setPop] = useState(0)
    const [groups, setGroups] = useState([])
    const [r16, setR16] = useState([])
    const [qf, setQF] = useState([])
    const [sf, setSF] = useState([])
    const [final, setFinal] = useState([])

    function next(){
        setPop(pop + 1)
    }

    // A B C D E F G H
    let arrGroups = ['635207232eaec69376424231', 
    '635207272eaec6937642423b', '635207282eaec69376424245', 
    '635207282eaec6937642424f', '635207292eaec69376424259', 
    '635207292eaec69376424263', '635207292eaec6937642426d', 
    '6352072a2eaec69376424277'];
    // AB BA CD DC EF FE GH HG
    let arrR16 = ['6372ce3973760422aff533ef', 
    '6372ce3a73760422aff533f3', '6372ce3b73760422aff533f6', 
    '6372ce3b73760422aff533f8', '6372ce3b73760422aff533fa', 
    '6372ce3b73760422aff533fc', '6372ce3b73760422aff533fe', 
    '6372ce3b73760422aff53400'];
    //ABCD BADC EFGH FEHG 
    let arrQF = ['6372ce3b73760422aff53402', '6372ce3b73760422aff53404',
    '6372ce3b73760422aff53406', '6372ce3b73760422aff53408'];
    //ABCDEFGH BADCFEHG
    let arrSF = ['6372ce3b73760422aff5340a', '6372ce3b73760422aff5340c'];
    let finalID = '6372ce3b73760422aff5340e';

    useEffect(() =>{
        let arr = []
        arrGroups.map(game => {
            api.get(`/games/${game}`).then(res => {
                arr.push(res.data[0]);
            })
        });

        let sortedArr = []
        arrGroups.map(group => {
            arr.map(obj => {
                if (group == obj._id){
                    sortedArr.push(obj)
                }
            })
        })
        setGroups(arr);
    }, []);

    useEffect(() =>{
        let arr = []
        arrR16.map(game => {
            api.get(`/games/${game}`).then(res => {
                arr.push(res.data[0]);
            })
        });

        let sortedArr = []
        arrR16.map(r16game => {
            arr.map(obj => {
                if (r16game == obj._id){
                    sortedArr.push(obj)
                }
            })
        })
        setR16(arr);
    }, []);

    useEffect(() =>{
        let arr = []
        arrQF.map(game => {
            api.get(`/games/${game}`).then(res => {
                arr.push(res.data[0]);
            })
        });
        let sortedArr = []
        arrQF.map(qfGame => {
            arr.map(obj => {
                if (qfGame == obj._id){
                    sortedArr.push(obj)
                }
            })
        })
        setQF(arr);
    }, []);

    useEffect(() =>{
        let arr = []
        arrSF.map(game => {
            api.get(`/games/${game}`).then(res => {
                arr.push(res.data[0]);
            })
        });
        let sortedArr = []
        arrSF.map(sfGame => {
            arr.map(obj => {
                if (sfGame == obj._id){
                    sortedArr.push(obj)
                }
            })
        })
        setSF(arr);
    }, []);

    useEffect(() =>{
        let arr = []
        api.get(`/games/${finalID}`).then(res => {
            setFinal(res.data[0]);
        })
        setFinal(arr);
    }, []);

    

    return (
        <div>
            {(pop == 0 ) && (groups.map( game => (
                <GetGame game = {game} api = {api} user = {user} madness = {true} points = {3}/>
            )))}

            {(pop == 1 ) && (
                <div>
                <GetR16 api = {api} user = {user} groups = {groups} r16 = {r16}/>
                </div>
            )}
            {(pop == 2 ) && (
                <div>
                <GetKnockOff api = {api} user = {user} prevGames = {r16} currGames = {qf} points = {12} gameCount = {4}/>
                </div>
            )}
            {(pop == 3 ) && (
                <div>
                <GetKnockOff api = {api} user = {user} prevGames = {qf} currGames = {sf} points = {24} gameCount = {2}/>
                </div>
            )}
            {(pop == 4 ) && (
                <div>
                <GetKnockOff api = {api} user = {user} prevGames = {sf} currGames = {final} points = {48} gameCount = {1}/>
                </div>
            )}
            <button className= 'btnSmall' onClick={() => next()}> Load Next </button>
        </div>
    )
}
