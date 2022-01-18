import React, { useState, useEffect } from 'react'
import axios from 'axios'
function Users(props) {
    const [notes, setNotes] = useState([])
    const [users, setUsers] = useState([]);

    // const url ="https://hlhexpress.com/wp-json/";

    // const getData = async () => {
    //     await fetch('https://hlhexpress.com/wp-json')
    //         .then(res => res.json())
    //         .then(data => setNotes(notes))
    // }

    // const getUsers = async () => {
    //     await fetch('https://jsonplaceholder.typicode.com/users/')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }
    // const getCurrentUser = async () => {
    //     await fetch('https://hlhexpress.com/data.jsonid=3')
    //         .then(res => setUsers(res.data))
    //         .then(data => console.log(data))
    // }
    useEffect(() => {
        // getCurrentUser();
        console.log('====================================');
        // console.log(data);
        console.log('====================================');
        // getData();        
        // getUsers();
    }, [])

    

    return (
        <div>

            {notes.map(item => (
                        <ul>
                        <li key={item.id}>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.description}</li> 
                        <li>{item.url}</li>
                        </ul>
                    ))}


            {/* {users.length > 0 && ( */}
               
                    {users.map(user => (
                        <ul>
                        <li>{user.id}</li>
                        <li key={user.id}>{user.name}</li>
                        <li>{user.description}</li> 
                        <li>{user.url}</li>
                        </ul>
                    ))}
                
            {/* )} */}
        </div>
    )
}

export default Users
