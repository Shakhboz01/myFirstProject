import React from 'react'
import Car from "../photos/lorry.png";
import styled,{keyframes} from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

const Container=styled.div`
height:110px;
overflow:hidden;
width:1500;
margin:0 auto;
position:relative;
`
const left=keyframes`
from{
  left:-50%
}
to{
  left:150%
}
`
const leftColor=keyframes`
0%{
  left:-37pxl;
  opacity:0;
}
20%{
  opacity:1
}
40%{
  opacity:0;
}
60%{
  opacity:1;
}
80%{
  opacity:0;
}
100%{
 left: 1363px;
 opacity:1;
}
`
const Image=styled.img`
position:absolute;
top:20px;
display:flex;
height:100%;
animation:${left} 12s linear infinite;

`
const Color=styled.div`
position:absolute;
width:4px;
height:4px;
border-radius:2px;
background:yellow;
top:75px;
animation:${leftColor} 9s linear infinite;
`
const Delivery = () => {
     


    
  return (
    <Container>
        <Image    src={Car} />
        <Color/>
    </Container>
  )
}

export default Delivery
