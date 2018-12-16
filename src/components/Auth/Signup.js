import React, { Component } from 'react'

class Signup extends Component {
    render() {
        return (  
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
                </div>         

            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password"></input>
                </div>
            </div>

         </div>       
        )

        }
        
    }

export default Signup