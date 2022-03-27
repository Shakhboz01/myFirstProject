import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../Data/data';
import Product from './Product';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {  Info,Title,Desc } from "./Service";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
const Container=styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`
const Con2=styled.div`
margin:84vh 0 0 0;
overflow:hidden;
width:100%;
padding:50px 0 35px 0;
text-align:center;
background:#f2f2f2;
`
// const OverButton=styled.div`
// height:60px;
// display:flex;
// justify-content:center;
// align-items:center;
// position:relative;
// z-index:2;
// `
// const Button=styled.button`
// background:none;
// padding:3px 12px;
// height:75%;
// color:white;
// border-radius:5px;
// border:none;
// letter-spacing:1.7px;
// text-align:center;
// margin-top:33px;
// background-color:#f9004d;
// transition:all 0.7s ease;
// &:hover{
//   height:100%;
//   background:none;
// border:1px solid red;
// color:#f9004d;
// }
// `

const Products = () => {
  return (
    <Con2>
      <Info data-aos="fade-left" >
            <Title>SEE POPULAR PRODUCTS</Title>
            <Desc><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptates!</span> <span style={{height:'3px', width:"20%",background:"#ffc107"}} ></span> </Desc>
        </Info>
    <Container   >
      {popularProducts.map(item=>(
        <Product key={item.id} item={item} />
      ))}
          </Container>
  <Button  data-aos='fade-right'  size="large"variant="contained" endIcon={<ArrowRightAltIcon/>} >View more</Button>
    </Con2>
  )
}

export default Products