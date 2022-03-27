import React from 'react'
import styled from 'styled-components'
import {BsSearch} from "react-icons/bs";
import {GrFavorite} from "react-icons/gr";
import {FiShoppingCart} from "react-icons/fi";



const Container=styled.div`
margin:25px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
z-index:1;  
background:black;


`
const SetColor=styled.div`
background:#fdf5f5;
box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);

`
const ImageContainer=styled.div`
position:relative;
height:250px;
display:flex;
align-items:center;
justify-content:center;
`

const Image=styled.img`
width:100%;
height:100%;
padding:10px;
object-fit:cover;
`
const Info=styled.div`
width:100%;
padding:10px;
display:flex;
flex-direction:column;
align-items: center;
`
const Colors=styled.div`
display:flex;
align-items:center;
margin:7px 10px ;
`
const MainColor=styled.div`
width:15px;
box-shadow:2px 3px 7px black;
height:15px;
border-radius:50%;
margin:0 3px;
background:${props=>props.color};
`

const Title=styled.div`
letter-spacing:1.7px;
font-size:23px;
font-weight:bold;
`

const Price=styled.div`
color:${props=>props.color!=="white"?props.color:"black"};
letter-spacing:1.3px;
font-size:18px;
`
const Size=styled.div`
font-style:italic;
`

const Button=styled.button`
padding:15px 10px;
cursor:pointer;
border:0.5px solid ${props=>{return props.color!=="white"?props.color:"black"}};
width:100%;
background:${props=>{return props.color!=="white"?props.color:"black"}};
color:white;
letter-spacing:2px;
font-family:sant-serif;
transition:all 0.4s ease;
font-size:large;
&:hover{
  
color:${props=>{return props.color!=="white"?props.color:"black"}};
  background:white;
  
}

`

const Product = ({item}) => {
  return (
    <Container  >
      <SetColor>


      <ImageContainer>
      <Image src={item.img} />
      </ImageContainer>
      <Info>
        <Title>{item.name.toUpperCase()}</Title>
        <Size> {item.size} </Size>
        <Colors>
        <MainColor color={item.mainColor}/>
        {item.addColors.map(color=>(
            <MainColor key={color} color={color} />
            ))}
        </Colors>
           <Price color={item.mainColor} >{item.mainPrice} USD</Price>
      </Info>
      <Button color={item.mainColor} >view detail</Button>
      </SetColor>
    </Container>
  )
}

export default Product
