import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // this is to verify if the user has an account 
            hasAccount: false
        }

        this.currentAuthState = this.currentAuthState.bind(this)
    }

    render() {
       return (
            <form className="form-inline">
                {this.currentAuthState()}
                <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
            </form>
        )
    }

    currentAuthState() {
        const { hasAccount } = this.state

        if (hasAccount) {
            return <Login />
        } 

        return <Signup />
    }
}

export default Auth