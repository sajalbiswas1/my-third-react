import { useEffect, useState } from 'react'
import './Friend.css'
import SingelFriend from './Friends'
export default function Friend(){
    const [friends, setFriends] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div className='box'>
            <h3 >Friend: {friends.length}</h3>
            {
                friends.map(friend => <SingelFriend load={friend}></SingelFriend>)
            }

        </div>
    )
}