import './index.css'
import Header from '../Header/index.js'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {Component} from 'react'
import {Homecontainer} from './StyledComponents'
class Home extends Component {
  state = {popup: true}
  changePopup = () => {
    this.setState({popup: false})
  }
  render() {
    const {popup} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <Homecontainer>
              
              <Header />
              <SideBar />
            </Homecontainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
