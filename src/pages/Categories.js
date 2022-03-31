import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { BasicNavbar } from '../components/Header'
import image3 from "../photos/Icon.jpg"
import LinkHeader from '../components/LinkHeader'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
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

const Category = () => {
    
  return (
    <Container>
       <LinkHeader/> 
       <Categories/>
       <Footer/>
    </Container>
  )
}

export default Category
