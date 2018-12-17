import React, { Component } from 'react'

class Signup extends Component {
    render() {
        return (  
            <div className="form-box">
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"></input>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="*****"></input>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="job">Job</label>
                    <select className="form-control" id="job">
                        <option>Student</option>
                        <option>Data Scientist</option>
                        <option>Programmer</option>
                        <option>Other</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary mb-2">Signup</button>
           </div>
        )

    }
        
}

export default Signup