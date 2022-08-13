import axios from 'axios';
import React, { useState, useEffect } from 'react'

//COMPONENTS
import SingleUser from './SingleUser';

const UserList = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get('https://randomuser.me/api/?results=15');
        setUsers(response.data.results)
    }

    
    useEffect(() => {
        getUsers()
      }, [])

    return (
        <div className="user-list">
            <ul>
                {users.map((user, idx) => (
                    <li>
                        <SingleUser user={user} key={idx} />
                    </li>
                ))}
            </ul>
        </div>
    )
    
}
    

export default UserList
