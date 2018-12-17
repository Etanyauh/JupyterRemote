import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { url } from '../../config'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            job: "Student",
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
                    <input onChange={(e) => this.getValues("username", e)} type="username" className="form-control" id="username" placeholder="Username"></input>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input onChange={(e) => this.getValues("password", e)} type="password" className="form-control" id="password" placeholder="*****"></input>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="job">Job</label>
                    <select onChange={(e) => this.getValues("job", e)} className="form-control" id="job">
                        <option>Student</option>
                        <option>Data Scientist</option>
                        <option>Programmer</option>
                        <option>Other</option>
                    </select>
                </div>

                <button onClick={(e) => this.submit(e)} className="btn btn-primary mb-2">Signup</button>
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
        const { username, password, job } = this.state
        const signUpRoute = `${url}/user`

        axios.post(signUpRoute, {username, password, job})
        .then(res => this.onLogin(res.data))
        .catch(err => {
            const error = err.response.data

            // WILL SET ERROR IF THERE IS ERROR ON LOGIN
            this.setError(error)
        })
    }

    onLogin(res) {
        const { token } = res
        window.sessionStorage.setItem('jwtToken', token)

        this.setState({
            message: "Suscesfully Logged in!",
            error: ""
        })

        return <Redirect to='/' />
    }

    setError(error) {
        if("Message" in error) {
            this.setState({
                error: error.Message,
                message: ""
            })
        } else {
            this.setState({
                error: "Invalid Credentials",
                message: ""
            })
        }
    }       
}

export default Signup