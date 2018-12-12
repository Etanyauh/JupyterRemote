import React, { Component } from 'react'
import Header from '../Header/Index'
import Footer from '../Footer/Index'

class App extends Component {
  render() {
    const { children } = this.props

    return (
      <React.Fragment>
        <Header />
        <main>{children}</main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App