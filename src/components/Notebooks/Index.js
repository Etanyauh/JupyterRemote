import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { url } from '../../config'

const userToken = window.sessionStorage.getItem('jwtToken')

class Notebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: jwtDecode(userToken),
            notebooks: [{
                "name": "KLK",
                "url": "uncavaina.com"
            },
{
                "name": "mas",
                "url": "uncavainasss.com"
            }
        ],
        }

        this.renderNotebookDesc = this.renderNotebookDesc.bind(this)
        this.renderNotebookNames = this.renderNotebookNames.bind(this)
    }

    // componentWillMount() {
    //     const userNotebookRoute = `${url}/user/notebook`
    //     const { id } = this.state.user

    //     axios.post(userNotebookRoute, {user_id: id})
    //     .then(res => {
    //         this.setState({
    //             notebooks: res.data 
    //         })
    //     })
    //     .catch(err => console.log(err))
    // }

    render() {
        return (
            <div className="notebook-list">
                <h2 className="center text-success">Notebooks</h2>

                <div className="container row">
                    <div className="col-6">
                        <div className="list-group" id="list-tab" role="tablist">
                            {this.renderNotebookNames()}
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="list-group" id="nav-tabContent">
                            {this.renderNotebookDesc()}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    renderNotebookDesc() {
        return this.state.notebooks.map((val, key) => {
            return (
                <div key={key} className="list-group-item" id={`list-${val.name}`} role="tabpanel"
                     aria-labelledby={`list-${val.name}-list`}>{val.url}</div>
            )
        })
    }

    renderNotebookNames() {
        return this.state.notebooks.map((val, key) => {
            return (
                <a key={key} className="list-group-item list-group-item-action" id="list-home-list" 
                   data-toggle="list" href={`#list-${val.name}`} role="tab" aria-controls={val.name}>{val.name}</a>
            )
        })
    }
}

export default Notebook