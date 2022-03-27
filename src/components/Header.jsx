import React,{useRef,useEffect} from 'react'
import styled, { keyframes } from 'styled-components'
import logo from "../photos/Лого.png";
import 'animate.css';
import { useState } from 'react';
import {Slides} from "../Data/data";
import {BsChevronCompactRight} from "react-icons/bs";
import {BsChevronCompactLeft} from "react-icons/bs";
import { mobile } from './Responsive';
 import {AiOutlineMenu} from "react-icons/ai"
import {ImCancelCircle}from "react-icons/im";
import { MenuLinks } from '../Data/data';
import ElevateAppBar from './Navbar';

const path = window.location.pathname;

const Container=styled.div`
position:relative;
display:flex;
overflow:hidden;

`

const Logo=styled.img`
margin-left: 10px;
cursor:pointer;
`

const changeColor=keyframes`
10%{
  color:white;
}
50%{
  color:red;
}
99%{
  color:white
}
`
const ChildIcon=styled.div`
 color:white;
 font-size:20px;
 cursor:pointer;
 display:none;

 position:absolute;
 top:15px;
 right:20px;
 ${mobile("900",{
   display:"block"
 })}
`
const ChildCan=styled.div`
display:none;
cursor:pointer;
position:absolute;
top:10px;
left:5px;
font-size:21px;
${mobile("900",{
  display:"flex"
})}
`
const Child=styled.div`
padding:4px;
margin:0 10px;
cursor:pointer;

animation:${changeColor}  1s linear  ;
transition:all 0.3s ease;

&:hover{
  color:red;
}
${
  mobile("900",{
    display:'block',
    fontSize:"30px",
  })
}
`

//Icons
const MiddleIcon=styled.div`
position:absolute;
width:95vw;
z-index:1;
top:50vh;
display:flex;
margin:0 2.5vw;
align-items:center;
justify-content:space-between;
`


const Icon=styled.div`
width:50px;
margin:0 15px;
height:50px;
display:flex;
align-items:center;
justify-content:center;
font-size: 23px;
color:rgb(180 178 175 / 76%);;
cursor:pointer;
border:1.7px solid #575454;
border-radius:50%;
transition:all 0.3s ease-in;
&:hover{
margin:0 3px;
background:#ffc107;
color:black;
border:none;
}
`
const RadioIcons=styled.div`
position:absolute;
display:none;
width:100vw;
bottom:10vh;
align-items:center;
justify-content:center;

`
 


const RadioInput=styled.input`
margin:0 7px;
cursor:pointer;
padding:5px;
accent-color:rgb(167 6 6);
border:3px solid green; 
`
const Wrapper=styled.div`
width:100vw;
background:linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4) ), url(${prev=>prev.img});
color:white;
height:100vh;
 object-fit:cover;
 display:flex;
 align-items:center;
 background-position:center;
background-size:cover;
transform:translateX(${props=>props.value*(-100)}vw);
transition:transform 1s ease;
`
const Slide=styled.div`
width:100vw;
`
const InfoContainer=styled.div`
display:flex;
width:85%;
position:relative;
 padding:14px;
 font-family: 'Hubballi', cursive;
font-family: 'Playfair Display', serif;
 text-wrap:wrap;
flex-direction:column;
`

 



const Desc=styled.div`
font-size:27px;
color:#b2b0b0;
letter-spacing:1.3px;
${mobile("500",{
  fontSize:"20px"
})}
`
const Title=styled.h1`
font-size:35px;
font-weight:bold;
letter-spacing:1px;
`
const ButtonCover=styled.div`
height:60px;
display:flex;
align-items:center;
position:relative;
z-index:2;
`
const Button=styled.button`
background:none;
height:75%;
color:black;
border-radius:5px;
width:20%;
border:none;
letter-spacing:1.7px;
text-align:center;
margin-top:33px;
background-color:#ffc107;
transition:all 0.7s ease;
&:hover{
  height:100%;
  background:none;
border:1px solid #ffc107;
color:white;
}
${mobile("500",{
  width:"30%"
})}
`
const Links=styled.div`
flex:1;
position:relative;
font-family: 'Hubballi', cursive;
display:flex;
margin:0 15px;
align-items:center;
justify-content:flex-end;
transition:right 1s ease;
color:white;
${
  mobile("900",{
    position:'fixed',
    top:0,
    textAlign:'center',
    display:"flex",
    justifyContent: 'center',
    alignItems:'center',
    right:props=>props.menu?"0":"-70vw",
    flexDirection:'column',
    height:'100vh',
    background:'white',
    color:"black",
    margin:0,
    width:'70vw',
  })
}
`
const Navbar=styled.div`
position:absolute;
display:flex;
justify-content:space:between;
top:25px;
height:50px;
width:100%;
z-index:2;
`;

export const BasicNavbar=()=>{
  const [menu,setMenu]=useState(false);
  return(
<Navbar>
<Logo src={logo} />
        <ChildIcon onClick={()=>setMenu(prev=>!prev)} menu={menu} > <AiOutlineMenu/> </ChildIcon>
        <Links   menu={menu}>
        <ChildCan onClick={()=>setMenu(prev=>!prev)} menu={menu}><ImCancelCircle/></ChildCan>

        {MenuLinks.map(link=>(
          <Child key={link} >{link.toUpperCase()}</Child>
        ))}

        </Links>
</Navbar>
)}


const Header = () => {
  
  const [value,setValue]=useState(0);

  

  const handleClick=(direction)=>{
    if(direction==="right" && value<Slides.length-1){
      setValue(prev=>prev+1);
    }
    else if(direction==="right" && value===Slides.length-1){
      setValue(0)
    }
    else if(direction==="left" && value>0){
      setValue(prev=>prev-1)
    }
    else if(direction==="left" && value===0){
      setValue(Slides.length-1)
    }
  }
   
  
  return (
    <Container>
      <ElevateAppBar/>
        <MiddleIcon>
          <Icon onClick={()=>handleClick("left")} ><BsChevronCompactLeft/></Icon>
          <Icon onClick={()=>handleClick("right")} ><BsChevronCompactRight/></Icon>
        </MiddleIcon>
        {/* <form>
        <RadioIcons>
      
        
        <RadioInput name='slide'  value="one" checked onChange={(e)=>setValue(e.target.value)} type="radio"   />
        <RadioInput name='slide' value="two" onChange={(e)=>setValue(e.target.value)} type="radio" />
        <RadioInput name='slide' value="three" onChange={(e)=>setValue(e.target.value)} type="radio"   />
        </RadioIcons>  
        </form>          */}
      
{Slides.map(slide=>(
      <Wrapper value={value} key={slide.id}  img={slide.image}  >
      <Slide>

       <InfoContainer  >
         <Title className='animate__animated animate__zoomInDown' >{slide.title}</Title>
         <Desc>{slide.desc} {value} </Desc>
         <ButtonCover  >
         <Button className='animate__animated animate__fadeInUp' >DISPLAY</Button>
         </ButtonCover>
       </InfoContainer>
       </Slide>
     </Wrapper>
))}
    </Container>

  )
}
export default Header
