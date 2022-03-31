import React from 'react'
import styled from 'styled-components';
import {ImFacebook2} from"react-icons/im";
import {GrInstagram} from "react-icons/gr";
import {SiTelegram} from "react-icons/si";
import {IoLogoJavascript} from"react-icons/io";
import { mobile } from './Responsive';
const Container=styled.div`
display:flex;
padding:10px;
background: linear-gradient(to top,#072039,#051729) ;
color:white;
align-items:center;
border-top-left-radius:100px;
${mobile("500",{
  flexDirection:'column',
})}
`
const Left=styled.div`
display:flex;
flex:1;
flex-direction:column;
align-items:center;
justify-content:center;


`
const Center=styled.div`
display:flex;
flex:1;
flex-direction:column;
align-items:center;
margin:20px 0;
justify-content:center;
text-align:center;

${mobile("500",{
  margin:'50px 0',

})}

`
const Title=styled.div`
padding:7px;
color:#0089fc;
text-transform:capitalize;
`
const Right=styled.div`
display:flex;
flex:1;
text-align:center;
flex-direction:column;
align-items:center;
width:100%;
justify-content:center;
`
const Logo=styled.div`
padding:5px;
`
const Desc=styled.div`
padding:5px;
`
const SocialIcon=styled.div`
margin:5px 9px;
cursor:pointer;
font-size:large;
transition:all 0.3s ease;
&:hover{
transform:scaleX(1.1);
color:#0089fc;
}
`
const SocialIcons=styled.div`
display:flex;
`
 
 
const ContactItem=styled.div`
padding:4px 8px;
cursor:pointer;

&:hover{
  color:#0089fc;
}
`
 

const Footer = () => {
  return (
    <div style={{background:"white"}}>

    <Container>
      <Left className='text-center'>
          <Logo>
          <IoLogoJavascript/>
          </Logo>
          <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus harum quis similique alias itaque? 
          </Desc>
          <SocialIcons>
              <SocialIcon>
                  <ImFacebook2/>
              </SocialIcon>
              <SocialIcon>
                  <GrInstagram/>
              </SocialIcon>
              <SocialIcon>
                  <SiTelegram/>
              </SocialIcon>
          </SocialIcons>
      </Left>
      <Center>
      <Title>CONTACTS:</Title>
        <ContactItem>
            22 street
        </ContactItem>
        <ContactItem  >
          <a style={{color:"white"}} href='tel:222-33-22' >
          +99891 234 56 78
          </a>
        </ContactItem>
        <ContactItem>
           contact@lama.dev
        </ContactItem>
</Center>
      <Right>
      <Title>ADRESS:</Title>
      <ContactItem>
           Dehlaviy 2 21
        </ContactItem>
        <ContactItem>
          Orientir: Dehlaviy 2 21
        </ContactItem>
      </Right>
      
    </Container>
    {/* <iframe
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
    alt='demo'
    style={{width:'70%',height:'400px',margin:'0 15% 0 15%'}}
  /> */}
    </div>
  )
}

export default Footer
