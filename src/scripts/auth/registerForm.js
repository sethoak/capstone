import React, { Component} from "react"
import APIManager from "../../modules/apimanager"
import './login.css';

export default class UserForm extends Component {
    state = {
        username: "",
        password: ""
    }
    
    newUser = (e) => {
        e.preventDefault()
        let user = {
            username: this.state.username,
            password: this.state.password,
        }
        APIManager.post("users", user).then(newUser => this.handleLogin())
     }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = () => {
        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
        let credentials = {username: this.state.username, password: this.state.password}
        this.props.setUser(credentials);
        this.props.history.push("/");
    }

    render() {
        return (
            
            <form>
                <div className="box">
                    <fieldset className="bod">
                    <h3 className="loginHeader">Join your coven:</h3>
                    <div className="formgrid">
                        <input className="username" onChange={this.handleFieldChange} type="text"
                            id="username"
                            placeholder="Username"
                            required="" autoFocus="" />
                        <label htmlFor="inputUsername"></label>

                        <input className="password" onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword"></label>
                        <button type="button" className="signIn" onClick={this.newUser}>
                            Sign Up!
                        </button>
                    </div>
            </fieldset>
            </div>
            </form>
            
)}}