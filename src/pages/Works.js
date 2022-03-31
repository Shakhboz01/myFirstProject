import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { BasicNavbar } from '../components/Header'
import image3 from "../photos/Icon.jpg"
import LinkHeader from '../components/LinkHeader'
import { ourWorks } from '../Data/data'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {  Info,Title,Desc } from "../components/Service";
import Footer from '../components/Footer'

const Container=styled.div`
`
const ImgContainer=styled.div`
background:linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4) ), url(${image3});
background-position:center;
background-size:cover;
position:relative;
display:flex;
overflow:hidden;
width:100vw;
height:100vh;
`
// Tell the user what you do.
// Create a clear information layout.
// Add location and data for more authenticity.
// Show the company's accomplishments to enhance user trust.
// Display real photos of the team and individual members.

const Works = () => {
    
  return (
    <Container>
       <LinkHeader/> 
       <Info data-aos="fade-left" >
            <Title>See real examples of products </Title>
            <Desc><span>11 regions of Uzbekistan have already trust us  </span> <span style={{height:'3px', width:"20%",background:"#ffc107"}} ></span> </Desc>
        </Info>
      <ImageGallery items={ourWorks} />
      <Footer/>
    </Container>
  )
}

export default Works
