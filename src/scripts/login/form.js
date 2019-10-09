import React, { Component} from "react"
import APIManager from "../../modules/apimanager"

export default class UserForm extends Component {
    state = {
        username: "",
        password: ""
    }

    newUser = () => {
        console.log("hello firing or sone shit")
        let user = {
            username: this.state.username,
            password: this.state.password,
         }
        APIManager.post("users", user).then(newUser => newUser)
     }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = (e) => {
        e.preventDefault()
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
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    <h3>Join your coven:</h3>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type="text"
                            id="username"
                            placeholder="Username"
                            required="" autoFocus="" />
                        <label htmlFor="inputUsername">Username</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword">Password</label>
                        <button type="button" onClick={this.newUser}>
                            Sign In
                        </button>
                    </div>
            </fieldset>
            </form>
)}}