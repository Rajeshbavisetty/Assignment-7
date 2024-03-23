import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    error: '',
    status: false,
  }
  changeUsername = event => {
    this.setState({username: event.target.value})
  }
  changePassword = event => {
    this.setState({password: event.target.value})
  }
  showPassword = () => {
    this.setState(prevState => {
      return {showPassword: !prevState.showPassword}
    })
  }
  onSubmitSuccess = JjwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', JjwtToken, {expires: 30})
    history.replace('/')
  }
  onSubmitFailure = data => {
    this.setState({error: data, status: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }
  render() {
    const {password, showPassword, status, error} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginContainer">
        <form onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="nextwatchLogo"
            alt="website logo"
          />
          <div className="inputelementcontainer1">
            <label htmlFor="USERNAME" className="paragraph">
              USERNAME
            </label>
            <input
              type="text"
              id="USERNAME"
              className="inputelementStyle"
              placeholder="USERNAME"
              onChange={this.changeUsername}
            />
          </div>
          {showPassword ? (
            <div className="inputelementcontainer1">
              <label htmlFor="PASSWORD" className="paragraph">
                PASSWORD
              </label>
              <input
                type="text"
                id="PASSWORD"
                className="inputelementStyle"
                placeholder="password"
                value={password}
              />
            </div>
          ) : (
            <div className="inputelementcontainer1">
              <label htmlFor="PASSWORD" className="paragraph">
                PASSWORD
              </label>
              <input
                type="password"
                id="PASSWORD"
                className="inputelementStyle"
                placeholder="PASSWORD"
                onChange={this.changePassword}
              />
            </div>
          )}
          <div className="inputelementcontainer">
            <input type="checkbox" id="CHECKBOX" onClick={this.showPassword} />
            <label htmlFor="CHECKBOX" className="paragraph">
              Show Password
            </label>
          </div>
          <button className="button1" type="submit">
            Login
          </button>
          {status ? <p>{error}</p> : ''}
        </form>
      </div>
    )
  }
}
export default Login
