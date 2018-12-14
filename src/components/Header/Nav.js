import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.states = {
            // Gets the user token
            user_token: window.sessionStorage.getItem('jwtToken'),
            
            // Links for unauthorized and authorized
            no_auth_links: [
                { text: "Home", url: "/" },
                { text: "About", url: "/about" },
                { text: "Login", url: "/login" },
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
            <nav className="navigation">
                <h3>Jupyter Remote</h3>
                <ul className="nav-items">
                    {this.navLinks()}
                </ul>
            </nav>
        )
    }

    navLinks() {
        if (this.states.user_token) {
            return this.authLinks()
        }

        return this.noAuthLinks()
    }

    authLinks() {
        return this.states.auth_links.map((val, key) => {
            return (
                <li key={key}>
                    <Link to={val.url}>{val.text}</Link>
                </li>
            )
        })
    }

    noAuthLinks() {
        return this.states.no_auth_links.map((val, key) => {
            return (
                <li key={key}>
                    <Link to={val.url}>{val.text}</Link>
                </li>
            )
        })
    }
}

export default Navigation