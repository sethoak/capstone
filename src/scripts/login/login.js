import React, { Component } from "react"
import {Link} from "react-router-dom"

class Login extends Component {
    render() {
        return (
            <React.Fragment>
            <Link to="/login/login-form">
            <button type="submit">
                    Sign in
            </button>
            </Link>
            <button type="button">
                    Register
            </button>
            </React.Fragment>
        )
    }

}

export default Login