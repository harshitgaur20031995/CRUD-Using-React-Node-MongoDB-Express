import React from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { BASE_URL } from '../constant/Type';


function Update(props) {

    const { id } = useParams();
    const { username, email } = props.location.state;

    const { register, handleSubmit, errors } = useForm();




    const onSubmit = async(data) => {
        if (data) {
            const body = { user_name: data.username, email: data.email }
            const result = await axios.patch(BASE_URL + '/' + id, body);
           // console.log(result.data);
            alert(result.data.message);
        }
    }


    return (
        <div className="container">
            <div className="w-75 auto  p-5">
                <h2 className="text-center mb-4">Update User</h2>
                <h2 className="text-center mt-2"> User : {id}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input className="form-control"
                            type="text"
                            id="name"
                            name="username"
                            defaultValue={username}
                            ref={register({ required: true })}
                            placeholder="Enter User Name">
                        </input>
                        {errors.username && errors.username.type === "required" && <span>username is required</span>}
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input className="form-control"
                            type="text"
                            name="email"
                            defaultValue={email}
                            ref={register({ required: true })}
                            placeholder="Enter User Email">
                        </input>
                        {errors.email && errors.email.type === "required" && <span>email is required</span>}
                    </div>
                    <br></br>
                    <div className=" form-group">
                        <button type="submit"
                            className="form-control btn btn-primary"
                        >
                            Submit
                           </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update
