import styled from 'styled-components'

export const Hedaercontainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
   
`
export const Rightportioncontainer = styled.div`
  display: flex;
  align-items: center;
`
export const ThemeButton = styled.button`
background-color:transparent;
border-width:0px;
height:25px;
width:25px;
cursor: pointer;
`
export const Headercontainer = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color:${props => props.backgroundColor}
`
export const Unordercontainer = styled.ul`
display:flex;
align-items:center;
list-style-type:none;
justify-content:space-evenly;
width:20vw;

`
export const Unorderitem = styled.li`
display:flex;
`
export const WebsiteLogo = styled.img`
height:50px;
width:${props => props.size}vw;
`
export const LogoutButton = styled.button`
  color: ${props => props.text};
  border-color:${props => props.color};
  border-width: 1px;
  border-style: solid;
  background-color:transparent;
  cursor: pointer;
 `
export const PopContainer = styled.div`
display:flex;
flex-direction:column;
height:200px;
width:500px;
background-color: #475569;
border-radius:2px;
justify-content:space-evenly;
align-items:center;
padding:10px;
`
export const Headingstyle = styled.p`
color:white;
font-family:"Roboto;
font-size:10px;`

export const Buttonc = styled.div`
display:flex;
justify-content:space-between;
width:300px;
`
export const ModalContainer = styled.div`
display:flex;
flex-direction:row;
height:200px;
width:500px;
`
