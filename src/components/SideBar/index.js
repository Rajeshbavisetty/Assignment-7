import {Component} from 'react'
import {FaHome} from 'react-icons/fa'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'
import {
  Sidebarcontainer,
  Sidebartopcontainer,
  Sidebaritemcontainer,
  Toptext,
  Sidebarbottomcontainer,
  Bottomtext,
  Logocontainer,
  Image,
} from './StyledComponents.js'

class SideBar extends Component {
  state = {}
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, tab, Activetab} = value
          const sidebarBg = isDarkTheme ? '#181818' : '#f9f9f9'
          const text = isDarkTheme ? 'white' : 'black'

          const changeTabHome = () => {
            Activetab('HOME')
          }
          const changeTabTrending = () => {
            Activetab('TRENDING')
          }
          const changeTabGaming = () => {
            Activetab('GAMING')
          }
          const changeTabSaving = () => {
            Activetab('SAVING')
          }
          return (
            <Sidebarcontainer bgColor={sidebarBg}>
              <Sidebartopcontainer>
                <Sidebaritemcontainer
                  bgColor={
                    isDarkTheme
                      ? `${tab === 'HOME' ? '#424242' : 'transparent'}`
                      : `${tab === 'HOME' ? '#e2e8f0' : 'transparent'}`
                  }
                  onClick={changeTabHome}
                >
                  <FaHome
                    size={20}
                    color={
                      isDarkTheme
                        ? `${tab === 'HOME' ? 'red' : 'grey'}`
                        : `${tab === 'HOME' ? 'red' : ''}`
                    }
                  />
                  <Toptext color={text}>Home</Toptext>
                </Sidebaritemcontainer>
                <Sidebaritemcontainer
                  bgColor={
                    isDarkTheme
                      ? `${tab === 'TRENDING' ? '#424242' : 'transparent'}`
                      : `${tab === 'TRENDING' ? '#e2e8f0' : 'transparent'}`
                  }
                  onClick={changeTabTrending}
                >
                  <FaFire
                    size={20}
                    color={
                      isDarkTheme
                        ? `${tab === 'TRENDING' ? 'red' : 'grey'}`
                        : `${tab === 'TRENDING' ? 'red' : ''}`
                    }
                  />
                  <Toptext color={text}>Trending</Toptext>
                </Sidebaritemcontainer>
                <Sidebaritemcontainer
                  bgColor={
                    isDarkTheme
                      ? `${tab === 'GAMING' ? '#424242' : 'transparent'}`
                      : `${tab === 'GAMING' ? '#e2e8f0' : 'transparent'}`
                  }
                  onClick={changeTabGaming}
                >
                  <SiYoutubegaming
                    size={20}
                    color={
                      isDarkTheme
                        ? `${tab === 'GAMING' ? 'red' : 'grey'}`
                        : `${tab === 'GAMING' ? 'red' : ''}`
                    }
                  />
                  <Toptext color={text}>Gaming</Toptext>
                </Sidebaritemcontainer>
                <Sidebaritemcontainer
                  bgColor={
                    isDarkTheme
                      ? `${tab === 'SAVING' ? '#424242' : 'transparent'}`
                      : `${tab === 'SAVING' ? '#e2e8f0' : 'transparent'}`
                  }
                  onClick={changeTabSaving}
                >
                  <MdPlaylistAdd
                    size={20}
                    color={
                      isDarkTheme
                        ? `${tab === 'SAVING' ? 'red' : 'grey'}`
                        : `${tab === 'SAVING' ? 'red' : ''}`
                    }
                  />
                  <Toptext color={text}>Saved Videos</Toptext>
                </Sidebaritemcontainer>
              </Sidebartopcontainer>

              <Sidebarbottomcontainer>
                <Bottomtext color={text}>CONTACT US</Bottomtext>
                <Logocontainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                    alt="twitter logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </Logocontainer>
                <Bottomtext color={text}>
                  Enjoy!Now to see your channels and recommendations!
                </Bottomtext>
              </Sidebarbottomcontainer>
            </Sidebarcontainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SideBar
