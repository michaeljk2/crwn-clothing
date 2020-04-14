import React, { Component } from "react"
import FormInput from '../form-input/form-input.component'

import "./sign-in.styles.scss"

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
    }
  }

  handleSubmit = (event) => {
    // Verhindere, dass standard Funktionen gefeuert werden
    event.preventDefault()
    this.setState({ email: "", password: "" })
  }
  handleChange = (event) => {
    const { value, name } = event.target
    // das sieht jetzt aus als würde man ein Array nehmen
    // das ist aber nicht der Fall
    // wenn man den Property Namen dynamisch macht im Objekt, dann muss man ihn
    // in Array Klammern setzen. [name] entspricht hierbei dem oben
    // deklarierten name
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <label>Email</label>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <label>Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
  }
}
export default SignIn
