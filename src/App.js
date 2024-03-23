import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import {Component} from 'react'
class App extends Component {
  state = {isDarkTheme: false, tab: 'HOME'}
  toggleTheme = () => {
    this.setState(prevState => {
      return {isDarkTheme: !prevState.isDarkTheme}
    })
  }
  Activetab = item => {
    this.setState(prevState => {
      return {tab: item}
    })
  }

  render() {
    const {isDarkTheme, tab} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme: isDarkTheme,
          toggleTheme: this.toggleTheme,
          Activetab: this.Activetab,
          tab: tab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
