import React from 'react'

import { Link, useParams } from 'react-router-dom'


function ViewUser(props) {

    


    const { username, email } = props.location.state;
    const { id } = useParams();


   // console.log('props' + username);
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back to Home
      </Link>
            <h4 className="display-10 mt-2">User Id: {id}</h4>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name: {username}</li>

                <li className="list-group-item">email : {email}</li>

            </ul>
        </div>
    )
}

export default ViewUser
