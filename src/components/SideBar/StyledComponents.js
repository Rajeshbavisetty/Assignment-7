import styled from 'styled-components'
export const Sidebarcontainer = styled.div`
background-color:${props=>props.bgColor};
display:flex;
flex-direction:column;
justify-content:space-between;
width:15vw;
height:90vh;
align-items:center;
position:sticky;
`
export const Sidebartopcontainer = styled.div`
display:flex;
flex-direction:column;


height:20vh;
padding:10px;
`
export const Sidebaritemcontainer = styled.div`
display:flex;
flex-direction:row;
width:10vw;
align-items:center;
margin:0px;
background-color:${props => props.bgColor};
margin-bottom:7px;
height:25px;
`
export const Toptext = styled.p`
margin-left:10px;
font-size:15px;
color:${props => props.color};
font-weight:bold;
`
export const Sidebarbottomcontainer = styled.div`
display:flex;
flex-direction:column;
height:250px;
width:10vw;
justify-content:center;
align-items:center;

`
export const Bottomtext = styled.p`
font-size:20px;
font-family:"Roboto";
font-weight:bold;
color:${props => props.color};

align-self:center;
`
export const Logocontainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
width:9vw;
align-items:center;
`
export const Image = styled.img`
height:25px;
width:25px;
`
