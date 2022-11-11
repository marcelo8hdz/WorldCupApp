import {useEffect, useState} from 'react';
import ClickAwayListener from 'react-click-away-listener';



export default function RankedUsers(props){
    const api = props.api
    const loggedUser = props.user

    const [popup, setPopup] = useState(false)
    const [users, setUsers] = useState([])
    const [top5, setTop5] = useState([])

    useEffect(() => {
        api.get('/users/rank')
        .then(res => {
            setUsers(res.data)})
    }, [])

    useEffect(() => {
		api.get('/users/rank/top5')
		.then( res => {
			setTop5(res.data)
		})
	}, [])
    return( 
        <div class= 'btn' onClick={() => setPopup(true)}>
            <div>
            <header> 
                <h2> User Rankings</h2> 
            </header>
			{!popup &&(
                <table>
                    {top5.map( rank => (
                        <tr key = {rank._id}>
                            <img src={rank.pictureURL} alt="user image" width="30" height="30"/>
                            <td>{rank.name}</td> 
                            <td>{rank.points}</td> 
                        </tr>
                    ))}
                </table>
            )}
            {popup && (
                <ClickAwayListener onClickAway={() => setPopup(false)}>
                    <table>
                        {users.map( user => (
                        <tr key = {user._id}> 
                            <img src={user.pictureURL} alt="user image" width="30" height="30"/>
                            <td>{user.name}</td> 
                            <td>{user.points}</td> 
                        </tr>))}
                    </table>
                </ClickAwayListener>
            )}
            </div>
        </div>
        
    )
}
