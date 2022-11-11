import { useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

const SetGame = ({game, api, user}) => {
  	const [popup, setPopup] = useState(false)
	const [teams, setTeams] = useState([])

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
		<div class= 'btn' onClick={() => setPopup(true)}>
			<div>
				<header>
					<h2>{game.gameId} </h2>
					<p>{game.date}</p>
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
										<label for={"winner"}> {team.name} </label>
										<input type = "radio" Name= "winner" ID = {"winner"} value={team._id}/>
									</div>
									)}
								<h3> Set Looser </h3>
									{teams.map(team =>
									<div>
										<label for={"looser"}> {team.name} </label>
										<input type = "radio" Name= "Team" ID = {"looser"} value={team._id}/>
									</div>
									)}
								<h3> Set Date </h3>
									<div>
										<label for={"date"}> Date: </label>
										<input type = "datetime-local" Name= "Team" ID = {game._id} value={game.date}/>
									</div>
								<button class= 'btnSmall' onClick={() => console.log("submit")}> Submit </button>
							</div>
					</ClickAwayListener>
				)}
			
		</div>
	)
}

export default SetGame