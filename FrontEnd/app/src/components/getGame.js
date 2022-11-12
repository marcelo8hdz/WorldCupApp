import { useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

const GetGame = ({game, api, user, madness, points}) => {
  	const [popup, setPopup] = useState(false)
	const [teams, setTeams] = useState([])
	const [prediction, setPrediction] = useState({
		game: game._id,
		winner: {},
		looser: {},
		userId: user._id,
		madness: madness,
		points: points,
		_id: "mock"
	});

	useEffect(() =>{
		let arr = []
		game.teams.map(team => {
			api.get(`/teams/${team}`).then(res => {
				arr.push(res.data[0])
			})
			
		})
		setTeams(arr)
	}, [])

	useEffect(() =>{
		user.predictions.map(userPrediction => {
			api.get(`/predictions/${userPrediction._id}`).then(res => {
				if (res.data[0] != null){
					if (res.data[0].game === game._id ){
						if(res.data[0].madness === madness){
							setPrediction(res.data[0])
							console.log(res.data[0])
						}
					}
				}
			})
		})
	}, [])

	function submitPrediction(){
		api.get(`/predictions/find/${prediction._id}`).then( res => {
			console.log(res.data[0])
			if (res.data[0] != null){
				console.log("es nulo")
				api.post(`/predictions/update/${prediction._id}`, {
					"userId": user._id, 
					"winner": prediction.winner, 
					"looser": prediction.looser, 
					"madness": madness, 
					"points": prediction.points}).then(res => {
						setPrediction(res.data)
			})}else{
				api.post('predictions/new', {
					"userId": user._id, 
					"winner": prediction.winner, 
					"looser": prediction.looser, 
					"madness": madness, 
					"points": prediction.points}).then(res => {
						setPrediction(res.data)
					})
			}
			
		})
	};
	return (
		<div className= 'btn' onClick={() => setPopup(true)}>
			<div>
				<header>
					<h2>{game.gameId} </h2>
					<p>{game.date.substr(0,16)}</p>
				</header>
				{teams.map(team =>
					<div key = {team._id}>
						<img src= {process.env.PUBLIC_URL + team.pic.substr(2)} alt= "team image" width="30" height="20" />
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
										<label htmlFor={"winner"} > {team.name} </label>
										<input type = "radio" name= "winner" id = {"winner"} value={team._id} onChange={() => { setPrediction((prev) =>({...prev, winner: team._id}))}}/>
									</div>
									)}
								<h3> Set Looser </h3>
									{teams.map(team =>
									<div>
										<label htmlFor={"looser"}> {team.name} </label>
										<input type = "radio" name= "looser" id = {"looser"} value={team._id} onChange={() => { setPrediction((prev) =>({...prev, looser: team._id}))}}/>
									</div>
									)}
								<button className= 'btnSmall' onClick={() => submitPrediction()}> Submit </button>
							</div>
					</ClickAwayListener>
				)}
			
		</div>
	)
}

export default GetGame