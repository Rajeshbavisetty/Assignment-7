import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {BsSun} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {
  ThemeButton,
  Headercontainer,
  WebsiteLogo,
  Unordercontainer,
  LogoutButton,
  Unorderitem,
  PopContainer,
  Headingstyle,
  Buttonc,
  ModalContainer,
} from './StyledComponents'
const Header = props => {
  const {history} = props
  const removeJwt = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const overlayStyles = {
    backgroundColor: '#ffff',
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const backgroundColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const webLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const color = isDarkTheme ? '#ffffff' : '#3b82f6'
        const changeTheme = () => {
          toggleTheme()
        }
        return (
          <Headercontainer backgroundColor={backgroundColor}>
            <Link to="/">
              <WebsiteLogo src={webLogo} size={16} alt="website logo" />
            </Link>
            <Unordercontainer>
              <Unorderitem>
                <ThemeButton onClick={changeTheme} data-testid="theme">
                  {isDarkTheme ? <BsSun color="white" /> : <FaMoon />}
                </ThemeButton>
              </Unorderitem>
              <Unorderitem>
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                  size={2}
                  alt="profile"
                />
              </Unorderitem>
              <Unorderitem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" text={color} color={color}>
                      Logout
                    </LogoutButton>
                  }
                  position="bottom-center"
                >
                  {close => (
                    <ModalContainer>
                      <PopContainer>
                        <Headingstyle>
                          Are you sure,you want to Logout?
                        </Headingstyle>
                        <Buttonc>
                          <LogoutButton
                            color="white"
                            text="white"
                            onClick={() => close()}
                          >
                            Cancel
                          </LogoutButton>
                          <LogoutButton
                            text="white"
                            color="blue"
                            onClick={removeJwt}
                          >
                            Confirm
                          </LogoutButton>
                        </Buttonc>
                      </PopContainer>
                    </ModalContainer>
                  )}
                </Popup>
              </Unorderitem>
            </Unordercontainer>
          </Headercontainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(Header)
