import { useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

const SetGame = ({game, setGame, api, user}) => {
  	const [popup, setPopup] = useState(false)
	const [teams, setTeams] = useState([])
	const [updatedGame, setUpdatedGame] = useState(game)
	const [date, setDate] = useState(game.date.substr(0, 16))

	function submitNewGame(){
		api.post(`/games/update/${game._id}`, updatedGame).then(res => {
			setGame(res.data[0])
			api.post(`/predictions/updatemany/${game._id}/${game.winner}`, {"points": 1})
		})
		
	};

	useEffect(() =>{
		let arr = []
		game.teams.map(team => {
			api.get(`/teams/${team}`).then(res => {
				arr.push(res.data[0])
			})
			
		})
		setTeams(arr)

	}, [])
	
	return (
		<div className= 'btn' onClick={() => setPopup(true)}>
			<div>
				<header>
					<h2>{game.gameId} </h2>
					<p>{game.date.substr(0,16)}</p>
				</header>
				{teams.map(team =>
					<div key = {team._id}>
						<img src= {team.pic} alt= "team image" width="30" height="20" />
						<p> {team.name} </p>
					</div>
				)}
				</div>
				{popup && (
					<ClickAwayListener onClickAway={() => setPopup(false)}>
							<div className={'popup'}>
								<h3> Set Winner </h3>
									{teams.map(team =>
									<div>
										<label htmlFor={"winner"}> {team.name} </label>
										{game.winner === team._id ? (
										<input type = "radio" name= "winner" id = {"winner"} value={team._id} onChange={() => {setUpdatedGame((prev) =>({...prev, winner: team._id}))}} checked/>) :(
										<input type = "radio" name= "winner" id = {"winner"} value={team._id} onChange={() => { setUpdatedGame((prev) =>({...prev, winner: team._id}))}}/>)}
									</div>
									)}
								<h3> Set Looser </h3>
									{teams.map(team =>
									<div>
										<label htmlFor={"looser"}> {team.name} </label>
										{game.looser === team._id ? (
										<input type = "radio" name= "looser" id = {"looser"} value={team._id} checked onChange={() => { setUpdatedGame((prev) =>({...prev, looser: team._id}))}}/>): (
										<input type = "radio" name= "looser" id = {"looser"} value={team._id} onChange={() => { setUpdatedGame((prev) =>({...prev, looser: team._id}))}}/>)}
										
									</div>
									)}
								<h3> Set Date </h3>
									<div>
										<label htmlFor = {"gameDate"}> Date: </label>
										<input type = "datetime-local" name= "gameDate" id = {"gameDate"} defaultValue ={game.date.substr(0, 16)} onChange = {(newDate) => { setUpdatedGame((prev) =>({...prev, date: newDate.target.value}))}}/>
										{/* (newDate) => { setUpdatedGame((prev) =>({...prev, date: newDate.target.value}))} */}
									</div>
								<button className= 'btnSmall' onClick={() => submitNewGame()}> Submit </button>
							</div>
					</ClickAwayListener>
				)}
			
		</div>
	)
}

export default SetGame