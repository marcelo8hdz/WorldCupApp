import './App.css';
import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios'
import RankedUsers from './components/userRankings';
import Header from './components/header';
import AdminPage from './components/adminPage';
import GetGames from './components/getGames';
import ClickAwayListener from 'react-click-away-listener';



function App() {
	const [user, setUser] = useState([]);
	const [page, setPage] = useState(false)
	const [adminPopUp, setAdminPopUp] = useState(false);

	const api = axios.create({
		baseURL: 'http://localhost:5000'
	})

	function handleCallbackResponse(res) {
		let temp = {}
		var userObject = jwt_decode(res.credential);
		document.getElementById("signInDiv").hidden = true;
		api.get(`/users/getUserByEmail/${userObject.email}`)
		.then(res => {
			temp = res.data[0]
			if (temp == null){
				api.post('/users/new', {"mail": userObject.email, "pictureURL": userObject.picture, "name": userObject.name})
				.then(res => {
					temp = res.data
				})
			}
			setUser(temp)
		})
		setPage(true)
	}

  	useEffect(() => {
		/* global google*/
		google.accounts.id.initialize({
			client_id : "637511278285-tccv1tah44j4vigc8bc3gnmlkr5cg2rs.apps.googleusercontent.com",
			callback: handleCallbackResponse
		})
	
		google.accounts.id.renderButton(
			document.getElementById("signInDiv"),
			{theme: "outline", size: "large"}
		);

	}, []);

 
  return (
	
	<div className = 'App'>
		<Header user = {user} />
		<div id="signInDiv"></div>
		{page && (
			<div>
				<div className = "container">
					<RankedUsers api = {api} user = {user}/>
					<button className = 'btnSmall' >Madness</button>
				</div>
				<div className='container'> 
					<GetGames api ={api} user = {user}></GetGames>
				
				</div>

				
				{user.admin && (
					<div className='container'>
						<header> 
							<h1>Admin Page</h1>
						</header>
						<button className='btnSmall' onClick={() => setAdminPopUp(!adminPopUp)}> Modify Games</button>
						{adminPopUp ? (<AdminPage user = {user} api = {api}/>):('')}
					</div>
				)}
			</div>
		)}
	</div>
	
  );
}

export default App;



