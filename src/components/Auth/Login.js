import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { url } from '../../config'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            error: "",
            message: ""
        }
    }

    render() {
        const { error, message } =  this.state

        return (
            <div className="form-box">
                {error ? <p className="text-danger">{ error }</p> : ""}
                {message ? <p className="text-success">{ message }</p> : ""}

                <div className="form-group">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input onChange={(e) => this.getValues("username", e)} type="text" className="form-control" id="username" placeholder="username"></input>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input onChange={(e) => this.getValues("password", e)} type="password" className="form-control" id="password" placeholder="*****"></input>
                </div>

                <button onClick={(e) => this.submit(e)} type="submit" className="btn btn-primary mb-2">Login</button>
           </div>
        )
    }

    getValues(key, event) {
        const { value } = event.target

        this.setState({
            [key]: value
        })
    }

    submit(event) {
        event.preventDefault()
        const {username, password} = this.state
        const loginRoute = `${url}/auth`

        axios.post(loginRoute, {username, password})
        .then(res => this.onLogin(res.data))
        .catch(err => {
            const error = err.response.data

            // WILL SET ERROR IF THERE IS ERROR ON LOGIN
            this.setError(error)
        })
    }

    onLogin(res) {
        const { token } = res
        const userToken = window.sessionStorage.getItem('jwtToken')

        if (userToken) {
            this.setState({
                error: "User Already Loged in!"
            })
        } else {
            window.sessionStorage.setItem('jwtToken', token)
            this.setState({
                message: "Suscesfully Logged in!"
            })

            return <Redirect to='/' />
        }
    }

    setError(error) {
        if("Message" in error) {
            this.setState({
                error: error.Message
            })
        } else {
            this.setState({
                error: "Invalid Credentials"
            })
        }
    }
}

export default Login