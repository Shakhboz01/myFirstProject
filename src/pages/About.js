import React from 'react'
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components'
import LinkHeader from '../components/LinkHeader';

import Grid from '@mui/material/Grid';
import AboutUs from "../photos/AboutUs.png"
import CustomImageList from '../components/Certificate';
import { images } from '../Data/data';
import { Swiper, SwiperSlide } from "swiper/react";
import {  Info,Title,Desc } from "../components/Service";
import Footer from '../components/Footer'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles/swipe.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
background-position:center;
`
const ImageContainer=styled.div`
height:450px;
width:90%;
margin:0 auto;
`


const Container=styled.div`
width:100%;
overflow:hidden;
background:#f7f7f7;
`

const WhatWeDo=styled.div`
width:100%;
display:flex;
align-items:center;
margin:120px auto;
background:linear-gradient(#e5db14,#7a7d04);
justify-content:space-around;
color:white;
padding:80px 0;
`

const TitleField=styled.div`
flex:1;
background:black;
font-weight:bold;
text-align:right;
font-size:27px;
color:white;
padding:15px 10px 15px 0 ;
`
const TextField=styled.div`
flex:2;
padding:15px;
font-size:20px;
background:linear-gradient(to-right,rgb(2,4,2),rgb(2,4,2))
`
const CertifContainer=styled.div`
display:flex;
justify-content:center;

margin:160px 0;
`
const Benefits=styled.div`
`
// Tell the user what you do.
// Create a clear information layout.
// Add location and data for more authenticity.
// Show the company's accomplishments to enhance user trust.
// Display real photos of the team and individual members.

const Swipe=()=>{
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
         <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOWX6coejwqv0WR4YdeczSZtF9VSErdroYQ&usqp=CAU' />
        </SwiperSlide>
        <SwiperSlide>
         <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOWX6coejwqv0WR4YdeczSZtF9VSErdroYQ&usqp=CAU' />
        </SwiperSlide>
        <SwiperSlide>
         <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOWX6coejwqv0WR4YdeczSZtF9VSErdroYQ&usqp=CAU' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}


const About = () => {

  return (
    <Container>
      <LinkHeader/>
        <WhatWeDo>
          <TitleField>What we actually do?</TitleField>
          <TextField>  
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rem temporibus ipsam! Et numquam dicta itaque blanditiis fugit magni dolorem natus quam iusto! Aliquid ad saepe mollitia natus obcaecati repudiandae facere nihil rerum?
          </TextField>
        </WhatWeDo>       
          <ImageContainer>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH7KVQgSmDPE4l1Q1q_kv9-ny3OT7yvPiNeg&usqp=CAU' />
          </ImageContainer>

        <Info>
            <Title>OUR SERVICES</Title>
            <Desc><span>Lorem ipsudm dolor  consectetur adipisicing elit. Nemo, voluptates!</span> <span style={{height:'3px', width:"20%",background:"#ffc107"}} ></span> </Desc>
        </Info>
          <CertifContainer  >
            <Swipe/>
          </CertifContainer>
        
        
          <Footer/>
    </Container>
  )
}

export default About
