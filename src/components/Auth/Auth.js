import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // this is to verify if the user has an account 
            hasAccount: true
        }

        this.currentAuthState = this.currentAuthState.bind(this)
    }

    render() {
       return (
            <form className="auth-form">
                {this.currentAuthState()}
            </form>
        )
    }

    currentAuthState() {
        const { hasAccount } = this.state

        if (hasAccount) {
            return (
                <div>
                    <Login />
                    <small>Dont have an account? <button className="btn btn-sm" onClick={(e) => this.accountState(e)}>Sign up</button></small>
                </div>
            )
        } 

        return (
            <div>
                <Signup />
                <small>Already have an account? <button className="btn btn-sm" onClick={(e) => this.accountState(e)}>Login</button></small>
            </div>
        )
    }

    accountState(event) {
        event.preventDefault()

        if (this.state.hasAccount) {
            this.setState({
                hasAccount: false
            })
        } else {
            this.setState({
                hasAccount: true
            })
        }
    }
}

export default Auth