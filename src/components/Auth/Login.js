import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="form-group mb-2">
                <label for="staticEmail2" className="sr-only">Email</label>
                <input type="text" className="form-control-plaintext" id="staticEmail2" placeholder="email@example.com"></input>
                <div className="form-group mb-2">
                    <label for="inputPassword2" className="sr-only">Password</label>
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Password"></input>
                </div>
            </div>
        )
    }
}

export default Login