import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import Modal from 'react-modal'
import { url } from '../../config'

const userToken = window.sessionStorage.getItem('jwtToken')

class Notebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: jwtDecode(userToken),
            notebooks: [],
            modal: false,
            error: "",
            message: "",
            name: "",
            password: ""

        }

        this.renderNotebookDesc = this.renderNotebookDesc.bind(this)
        this.renderNotebookNames = this.renderNotebookNames.bind(this)
        this.modalState = this.modalState.bind(this)
        this.renderModal = this.renderModal.bind(this)
    }

    componentWillMount() {
        const userNotebookRoute = `${url}/user/notebook`
        const { id } = this.state.user

        axios.post(userNotebookRoute, {user_id: id})
        .then(res => {
            const data = res.data.data

            this.setState({
                notebooks: data.slice()
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        const { modal, error, message } = this.state

        if (!modal) {
            return (
                <div className="notebook-list">
                    {error ? <p className="text-danger">{ error }</p> : ""}
                    {message ? <p className="text-success">{ message }</p> : ""}

                    <h2 className="center text-success">Notebooks</h2>

                    <div className="container row">
                        <div className="col-6">
                            <div className="list-group" id="list-tab" role="tablist">
                                { this.renderNotebookNames() }
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="list-group" id="nav-tabContent">
                                { this.renderNotebookDesc() }
                            </div>
                        </div>

                        <button onClick={this.modalState} type="button" className="btn btn-primary modal-trigger" data-toggle="modal">
                            Add
                        </button>
                    </div>
                </div>
            )
        }

        return this.renderModal()
    }

    renderNotebookDesc() {
        const { notebooks } = this.state

        if (notebooks.length > 0) {
            return notebooks.map((val, key) => {
                return (
                    <div key={key} className="list-group-item" id={`list-${val.name}`} role="tabpanel"
                        aria-labelledby={`list-${val.name}-list`}>{`https://${val.url}`}</div>
                )
            })
        }

        return (
            <div className="list-group-item" id={`list-no-items`} role="tabpanel"
                 aria-labelledby={`list-noitems-list`}>No Items</div>
        )
    }

    renderNotebookNames() {
        const { notebooks } = this.state

        if (notebooks.length > 0) {
            return notebooks.map((val, key) => {
                return (
                    <a key={key} className="list-group-item list-group-item-action" id="list-home-list" 
                    data-toggle="list" href={`#list-${val.name}`} role="tab" aria-controls={val.name}>{val.name}</a>
                )
            })
        }

        return (
            <a className="list-group-item list-group-item-action" id="list-home-list" 
               data-toggle="list" href="#list-noitems" role="tab" aria-controls="noitems">No Items</a>
        )
    }

    renderModal() {
        const { error, message } = this.state

        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
        };

        return(
            <div>
                <Modal
                    isOpen={this.state.modal}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.modalState}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >

                    <div className="form-box">
                        {error ? <p className="text-danger">{ error }</p> : ""}
                        {message ? <p className="text-success">{ message }</p> : ""}

                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input onChange={(e) => this.getValues("name", e)} type="text" className="form-control" id="name" placeholder="name"></input>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input onChange={(e) => this.getValues("password", e)} type="password" className="form-control" id="password" placeholder="*****"></input>
                        </div>

                        <button onClick={(e) => this.submit(e)} type="submit" className="btn btn-primary mb-2">Create</button>
                    </div>

                    <button onClick={this.modalState}>Close</button>
                </Modal>
            </div>
        )
    }

    modalState() {
        this.setState({
            modal: !this.state.modal
        })
    }

    getValues(key, event) {
        const { value } = event.target

        this.setState({
            [key]: value
        })
    }

    submit(event) {
        event.preventDefault()
        const { name, password } = this.state
        const loginRoute = `${url}/notebook`

        axios.post(loginRoute, {name, password, user_id: this.state.user.id})
        .then(res => {
            this.setState({
                message: "Notebook Suscesfully Created!"
            })

            setInterval(() => this.setState({message: ""}), 3000)
        })
        .catch(err => {
            const error = err.response.data

            // WILL SET ERROR IF THERE IS ERROR ON LOGIN
            this.setError(error)
        })
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

        setInterval(() => this.setState({error: ""}), 3000)
    }
}

export default Notebook