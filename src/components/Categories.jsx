import React from 'react'
import styled from "styled-components";
import {  Info,Title,Desc } from "./Service";
import { Categorie } from '../Data/data';
import { mobile } from './Responsive';
 import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Container=styled.div`
width:80%;
margin:20vh auto;
font-family: 'Hubballi', cursive;
display:flex;
flex-direction:column;
`


const Services=styled.div`
display:grid;
grid-template-columns:repeat(auto-fill,minmax(230px,1fr));
grid-gap:13px;
`

// const Button=styled.button`
//    background:none;
//    color:white;
//    font-weight:bold;
//    padding:5px 19px;
//    border:1px solid white;
//    margin:22px 0 11px 2px;
//    font-size:larger; 
//    transition:all 0.3s ease;
//    &:hover{
//      background:#f9004d;
//      transform:scale(1.09);
//       border-radius:6px;
//    }
// `
const Image=styled.img`
height:100%;
z-index:-1;
width:100%;
object-fit:cover;
filter:brightness(0.9);
transition:all 1s ease;
box-shadow: 0px 0px 10px black;

${mobile("900",{
filter:'brightness(0.4)'  
})}
 

`


const CatItem=styled.div`
position:absolute;
bottom:-270px;
z-index:1;
left:0;
margin-left:22px;
margin-bottom:20px;
font-size:22px;
transition:all 0.5s ease; 

${mobile("900",{
  bottom:'20px'
})}
`


const CatBox=styled.div`
background-image:url(${prev=>prev.src});
height:67vh;
padding:15px;
background-repear:no-repeat;
width:100%;
position:relative;
 transition:all 0.4s ease;
 cursor:pointer;
 overflow:hidden;
&:hover  {
  padding:0;
}
&:hover ${Image} {
filter:brightness(0.2);  
box-shadow: none;
border-radius:10px;
}
&:hover ${CatItem} {
  bottom:0;
  }
  
  
`


const Pad=styled.div`
backgroung:yellow;
`


const Descr=styled.div`
color:white;
font-weight:bold;
font-size:32px;
font-family: 'Fredoka', sans-serif;
`
const CatTitle=styled.div`
color:white;
margin-bottom:16px;
font-family: 'Nunito Sans', sans-serif;
`

const Categories = () => {
  
  const newLocal = '30px';
  return (
    <Container>
      <Info>
          <Title>plo Categories</Title>
          <Desc><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptates!</span> <span style={{height:'3px', width:"20%",background:"#ffc107"}} ></span></Desc>
      </Info>

      <Services>
            {Categorie.map(cat=>(
                
                  <Pad key={cat.id} >
                <CatBox   >
                    
        <Image src={cat.img}/>
        <CatItem>
        <Typography   variant="body2" color="#ffc107">
          {cat.title.toUpperCase()}
        </Typography>
        <Descr>{cat.desc}</Descr>
        <Button style={{marginBottom:'30px'}}  size="large"variant="outlined" endIcon={<ArrowRightAltIcon/>} >View more</Button>
        </CatItem>
        </CatBox>
                  </Pad>
          ))}

      </Services>
      
    </Container>
  )
}

export default Categories
