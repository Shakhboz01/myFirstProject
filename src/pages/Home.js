import React,{useEffect} from 'react'
import  styled from "styled-components";
import Header from '../components/Header';
import { useState } from 'react';
import Service from '../components/Service';
import Categories from '../components/Categories';
import Delivery from '../components/Delivery';
import SingleImg from '../components/SingleImg';
import PopProducts from '../components/Products';
import Footer from '../components/Footer';
import ScrollToTop from "react-scroll-up";
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import Fab from '@mui/material/Fab';
import Chat from '../components/Chat';
import 'animate.css';
const Container=styled.div`
width:100%;
`
const ContainImage=styled.div`
z-index:1;
background:white;
`


const Home = () => {
  const [weather,setWeather]=useState('')
  


  return (
    <Container>
      
      <ContainImage>
      <Header/>
      <Service/>
      <Categories/>
      <Delivery/>
      </ContainImage>
      <SingleImg/>
      <PopProducts/>
      
      <Footer/> 
    </Container>
  )
}

export default Home
