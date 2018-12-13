import React, { Component } from 'react'
import Navigation from './Nav'

class Header extends Component {
    render() {
        return (
            <header>
                <Navigation />
                <p>The header</p>
            </header>
        )
    }
}

export default Header