import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        const userToken = window.sessionStorage.getItem('jwtToken')

        return (
            <div className='home container'>
                <div className="mast-cover inner">
                    <h1 className="center cover-heading">Jupyter Remote</h1>
                    <p className="center cover-paragraph">Jupyter remote is a project that aims at making jupyter notebooks a tool that
                       can be used remotely by multiple users at the same time.</p>

                    {userToken === null ? 
                        <div className="action-btn">

                            <Link to='auth'>
                                <button className="btn btn-success btn-lg">Login / Signup</button>
                            </Link>
                        </div>
                        :
                        ""
                    }
                </div>
            </div>
        )
    }
}

export default Home