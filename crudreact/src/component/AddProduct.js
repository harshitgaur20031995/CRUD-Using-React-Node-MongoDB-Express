import React from 'react'
import { Link } from 'react-router-dom'

function AddProduct() {
    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col-sm-1">

                </div>
                <div className="  col-sm-4 margin-top">
                    <div className="card bg-dark text-white">
                        <div className="card-header">
                            <h2>User</h2>
                        </div>
                        <form>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="my-2 form-group">
                                            <input className="form-control"
                                                type="text"
                                                placeholder="Frist name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="my-2 form-group">
                                            <input className="form-control"
                                                type="text"
                                                placeholder="Lats name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="my-2 form-group">
                                    <input className="form-control"
                                        type="email"
                                        placeholder="Email address" />
                                </div>
                                <div className=" my-2 form-group">
                                    <input className="form-control"
                                        type="password"
                                        placeholder="Password" />
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Link to={`/resgiter`}>
                                            <button
                                                className="my-2 form-control btn btn-primary"
                                                type="submit">
                                                Submit</button>
                                        </Link>

                                    </div>
                                    <div className="col-sm-6">
                                        <button
                                            className="my-2 form-control btn btn-danger"
                                            type="reset">
                                            Rest</button>
                                    </div>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-sm-1">

                </div>
                <div className="col-sm-6">


                    <table className="my-2 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </table>



                </div>
            </div>

        </div>
    )
}

export default AddProduct
