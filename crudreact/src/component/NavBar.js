import React from 'react'
import { Link } from 'react-router-dom'
import Add from './icons/add.svg'
import { ReactImageTint } from 'react-image-tint'

function NavBar() {
    return (


        <nav className="navbar navbar-expand-lg navbar-dark nav-background">
            <div className="container">
                <a className="navbar-brand"
                    href="/">Harshit Gaur</a>

                <div className="right">
                    <Link to={`/product`}>

                        <ReactImageTint className=""
                            src={Add} color="#FF404C"
                            alt="dd"></ReactImageTint>
                    </Link>
                </div>
                {/* <button className="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                {/* <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <p className="nav-link"
                                exact
                                to="/">
                                Home
                                </p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link"
                                exact
                                to="/about">
                                About
                                </p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link"
                                exact
                                to="/contact">
                                Contact
                            </p>

                        </li>


                        <li className="nav-item">
                            <p className="nav-link"
                                exact
                                to="/image">
                                Image
                            </p>

                        </li>

                    </ul>

                </div> */}

            </div>
        </nav>

    )
}

export default NavBar
