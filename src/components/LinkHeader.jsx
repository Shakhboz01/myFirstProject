import React,{useContext} from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { BasicNavbar } from '../components/Header'
import image3 from "../photos/Icon.jpg"
import { LinkContext } from '../App'
import { MapLinks } from '../Data/data'
import { useEffect } from 'react'
import ElevateAppBar from './Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';
const Container=styled.div`
background:black
`
const ImgContainer=styled.div`
background:linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4) ), url(${prev=>prev.img});
background-position:center;
background-size:cover;
object-fit:cover;
position:relative;
display:grid;
place-items:center;
overflow:hidden;
width:100vw;
height:100vh;
`

// Tell the user what you do.
// Create a clear information layout.
// Add location and data for more authenticity.
// Show the company's accomplishments to enhance user trust.
// Display real photos of the team and individual members.



const Styles=styled.div`
z-index:-1;
`
const Info=styled.div`
display:flex;
align-items:center;
`

const LinkHeader = () => {
const [value,setValue]=useState("");
let path;
useEffect(()=>{
  path=window.location.pathname.split("/")[1];
  if(path===undefined){
    setValue("home")
  }
  else{
    setValue(path)
  }
}
,[]);

  return (
    
      <Container>

{MapLinks.filter(arg=>arg.title===value).map(item=>(
        <ImgContainer key={item.id} img={item.img} >
        <ElevateAppBar value={value} />
        <Info>
          <Link to="/" >
            <h3 className='animate__animated animate__fadeInDownBig' style={{color:'#a78f23',margin:"5px",cursor:'pointer',textDecoration:"underline",fontSize:"32px"}} >HOME</h3>
          </Link>
            <h4 className='animate__animated animate__fadeInUpBig' style={{color:'white',margin:"5px",fontSize:"30px"}} >/{item.title.toUpperCase()}</h4>
        </Info>
        </ImgContainer>
))}          
        
    </Container>
  )
}

export default LinkHeader
