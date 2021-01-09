import React, { useState, useEffect } from 'react'
import Remove from './icons/remove.svg'
import Edit from './icons/edit.svg'
import Visible from './icons/visibility.svg'
import axios from 'axios'
import { BASE_URL } from '../constant/Type'
import { Link } from 'react-router-dom'



function DashBorad() {

    const [user, setuser] = useState([]);


    useEffect(() => {

        loadUser();
    }, [])


    const loadUser = async () => {

        const result = await axios.get(BASE_URL);
        console.log(result.data);
        setuser(result.data.body)
    }

    const deleteItem = async (id) => {
        const url = BASE_URL + '/' + id;

        const result = await axios.delete(url);

        alert(result.data.message);
        loadUser();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h3>DashBorad</h3>
                <table className="table  table-striped">
                    <thead className="thead-dark" >
                        <tr >
                            <th scope="col">#</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((doc, index) => (

                                <tr key={doc._id}>

                                    <th scope="row">{index + 1}</th>
                                    <td>{doc.username}</td>
                                    <td>{doc.email}</td>
                                    <td>

                                        <img src={Remove} alt="s"
                                            onClick={() => deleteItem(doc._id)}></img>
                                        <Link to={{
                                            pathname: `update/${doc._id}`,
                                            state: { username: doc.username,
                                            email:doc.email }
                                        }}>
                                            <img className="mt-img" src={Edit} alt="edit" />
                                        </Link>
                                        <Link to={{
                                            pathname: `view-user/${doc._id}`,
                                            state: { username: doc.username,
                                            email:doc.email }
                                        }} >
                                            <img className="view-item" src={Visible} alt="s" />
                                        </Link>

                                    </td>

                                </tr>

                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashBorad
