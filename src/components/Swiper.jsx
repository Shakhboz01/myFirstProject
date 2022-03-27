import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "../Styles/swipe.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ServiceCard } from '../Data/data';
import { CardActionArea } from '@mui/material';

// import required modules
import { EffectCube, Pagination,Autoplay} from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();
export default function Swipe() {
  return (
    <div className="contain" >
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          data-aos='fade-in'
          data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      >
        {ServiceCard.map(item=>(
            <SwiperSlide key={item.id} >

               <Card onClick={()=>console.log("Clicked")}  sx={{ maxWidth: 345 }}>
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
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
