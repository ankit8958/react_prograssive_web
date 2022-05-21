import React, { useState, useEffect, Children } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
const Users = (props) => {
    const [userlist, setUserList] = useState([]);
    const [inetrnetConnection,setInternetConnection] = useState("online");
    useEffect(() => {

        async function data() {

            try {
                const result = await axios.get('https://jsonplaceholder.typicode.com/users');
                // console.log(result.data);
                setUserList(result.data);

                localStorage.setItem('users',JSON.stringify(result.data));

            } catch (err) {
                const userData = localStorage.getItem('users');
                setUserList(JSON.parse(userData));
                setInternetConnection("offline");
                console.log("errror=>>>>>>.",err);

            }

        }
        data();
    }, [])

    return (
        <>
        
            <div>
                {inetrnetConnection === "offline" ?
                <div className='alert alert-warning' role='alert'>
                    You are in offile mode.
                </div>
                :null    
            }
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    userlist.map((item, idx) => 
                        <>
                            <tr key={idx}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>{item.address.street}</td>
                            </tr>
                        </>
                    )}


                </tbody>
            </Table>
        </>
    )
}

export default Users
