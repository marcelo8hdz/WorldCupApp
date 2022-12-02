import './App.css';
import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios'
import RankedUsers from './components/userRankings';
import Header from './components/header';
import AdminPage from './components/adminPage';
import GetGames from './components/getGames';
import ClickAwayListener from 'react-click-away-listener';
import Navbar from './components/Navbar';
import {Route, Router, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Betting from './components/pages/Betting';
import Ai from './components/pages/Ai.js';


function App() {
	const [user,setUser] = useState(
		{
		"_id":"636ecb1b67cd93e01144692c",
		"name":"Brian Salomon",
		"mail":"mixablerat90@gmail.com",
		"pictureURL":"https://lh3.googleusercontent.com/a/ALm5wu2JCj5uzXDcODdz9c5_w8gjHiiK0rxEcsMei3FzKA=s96-c",
		"predictions":[
			"6372e0dc59b54e89b604c0e4",
			"6372e0eb59b54e89b604c0ea",
			"63868e3aa6073d12a75f4dd4",
			"63868e51a6073d12a75f4dfc"],
		"points":0,
		"admin":true,
		"createdAt":"2022-11-11T22:22:19.545Z",
		"updatedAt":"2022-11-29T22:57:21.539Z",
		"__v":4
		}
	);
	const [page, setPage] = useState(true)
	const [adminPopUp, setAdminPopUp] = useState(false);
	const [phasePopUP, setPhasePopUp] = useState(false);
	const [madnessPopUP, setMadnessPopUp] = useState(false);

	const api = axios.create({
		baseURL: 'https://qatarprediction-api.onrender.com'
	})

	// function handleCallbackResponse(res) {
	// 	let temp = {}
	// 	var userObject = jwt_decode(res.credential);
	// 	document.getElementById("signInDiv").hidden = true;
	// 	api.get(`/users/getUserByEmail/${userObject.email}`)
	// 	.then(res => {
	// 		temp = res.data[0]
	// 		if (temp == null){
	// 			api.post('/users/new', {"mail": userObject.email, "pictureURL": userObject.picture, "name": userObject.name})
	// 			.then(res => {
	// 				temp = res.data
	// 			})
	// 		}
	// 		setUser(temp)
	// 	})
	// 	setPage(true)
	// }

	// useEffect(() => {
	// 	/* global google*/
	// 	google.accounts.id.initialize({
	// 		client_id : "637511278285-tccv1tah44j4vigc8bc3gnmlkr5cg2rs.apps.googleusercontent.com",
	// 		callback: handleCallbackResponse
	// 	})
	// 	google.accounts.id.renderButton(
	// 		document.getElementById("signInDiv"),
	// 		{theme: "outline", size: "large"}
	// 	);

	// }, []);

	return (
		
		<div className = 'App'>
			
			<Header user = {user} />
			{page && (
				<div>
					<div className = "container">
						<RankedUsers api = {api} user = {user}/>
					</div>
					<div className='container'> 
						<button className='btnSmall' onClick={()=> {setPhasePopUp(!phasePopUP);setMadnessPopUp(false);}} >Phase Betting</button>
						<button className='btnSmall' onClick={()=> {setMadnessPopUp(!madnessPopUP);setPhasePopUp(false)}}>Madness</button>
						{phasePopUP ? (<GetGames user = {user} api ={api}/>):('')}
						{madnessPopUP ? (<GetMadness user = {user} api ={api}/>):('')}
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



