import React, { Component } from 'react'
import axios from 'axios'
import { url } from '../../config'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            job: "Student",
            error: ""
        }
    }

    render() {
        return (  
            <div className="form-box">
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

export default Signup