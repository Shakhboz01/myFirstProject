import React,{useState} from 'react'
import styled from 'styled-components';
import {GrDeliver} from "react-icons/gr";
import { mobile } from './Responsive';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ServiceCard } from '../Data/data';
import Swipe from './Swiper';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

export const Container=styled.div`
margin:20vh 0;
font-family: 'Hubballi', cursive;
display:flex;
overflow:hidden;
flex-direction:column;
${mobile("300",{
margin:"20vh 1px 20px 1px "
})}
`
export const Info=styled.div`
font-family: Work Sans, sans-serif;
text-align:center;
margin:20px  0;
`
export const Title=styled.div`
font-size:40px;
font-weight:bold;
color:black;
text-shadow: 1px 2px 2px pink;
font-family: Work Sans, sans-serif;

`
export const Desc=styled.div`
width:50%;
font-size:26px;
display:flex;
flex-direction:column;
align-items:center;
margin:0 auto 10px auto;
color:#655f5f;
`
  const Services=styled.div`
display:grid;
grid-gap:37px;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
`
const Header=styled.div`
margin-bottom:13px;
font-size:25px;
font-family: 'Hubballi', cursive;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Playfair Display', serif;
font-family: 'Work Sans', sans-serif;
`
const Desc1=styled.div`
font-size:20px;

padding:3px 5px 14px 5px;
font-family: 'Hubballi', cursive;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Playfair Display', serif;
font-family: 'Work Sans', sans-serif;
`
const Item=styled.div`
cursor:pointer;
box-shadow:4px 5px 6px black;
padding:10px 19px 1px 19px ;
display:flex;
border-radius:10px;
flex-direction:column;
color:#131310cf;
background:#f2f2f2;
transition:all 0.4s ease;
&:hover{
  box-shadow:1px 1px 1px black;
  background:linear-gradient(to right, rgb(246 26 19), rgb(239 9 96) );
transform:scale(1);
color:white;
};

${mobile("912",{
  background:'linear-gradient(to right, rgb(246 26 19), rgb(239 9 96) )',
  color:"white"

})}

`

const Icon=styled.div`
color:red;
margin:7px;
font-size:25px;
`




const Service = () => {
 
  return (

    <Container>
   
        <Info data-aos="fade-left" >
            <Title>OUR SERVICES</Title>
            <Desc><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptates!</span> <span style={{height:'3px', width:"20%",background:"#ffc107"}} ></span> </Desc>
        </Info>

        {/* <Services>
          {ServiceCard.map(item=>(
               <Card key={item.id} sx={{ maxWidth: 345 }}>
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="140"
                   image={item.image}
                   alt="limuzin"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     {item.title.toUpperCase()}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     {item.desc}
                   </Typography>
                 </CardContent>
               </CardActionArea>
             </Card>
          ))}
        </Services> */}
        <Swipe   />
    </Container>      
  )
}

export default Service
