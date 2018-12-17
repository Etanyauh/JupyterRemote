import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="form-box">
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"></input>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="*****"></input>
                </div>

                <button type="submit" className="btn btn-primary mb-2">Login</button>
           </div>
        )
    }
}

export default Login