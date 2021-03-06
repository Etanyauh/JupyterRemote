import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // Gets the user token
            user_token: window.sessionStorage.getItem('jwtToken'),
            
            // Links for unauthorized and authorized
            no_auth_links: [
                { text: "Home", url: "/" },
                { text: "About", url: "/about" },
                { text: "Login", url: "/auth" },
            ],
            auth_links: [
                { text: 'Home', url: '/' },
                { text: 'About', url: '/about' },
                { text: 'Notebooks', url: '/notebooks' },
            ]
        }

        this.navLinks = this.navLinks.bind(this)
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg row justify-content-between">
                    <div>
                        <Link to='/' className="navbar-brand col-9"><h2>Jupyter Remote</h2></Link>
                    </div>

                    <div className="collapse navbar-collapse col-3" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            {this.navLinks()}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

    navLinks() {
        if (this.state.user_token) {
            return this.authLinks()
        }

        return this.noAuthLinks()
    }

    authLinks() {
        return this.state.auth_links.map((val, key) => {
            return (
                <li key={key} className="nav-item active">
                    <Link to={val.url} className="nav-link">{val.text}</Link>
                </li>
            )
        })
    }

    noAuthLinks() {
        return this.state.no_auth_links.map((val, key) => {
            return (
                <li key={key} className="nav-item active">
                    <Link to={val.url} className="nav-link">{val.text}</Link>
                </li>
            )
        })
    }
}

export default Navigation