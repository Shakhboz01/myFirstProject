import React,{ useState } from "react";
import {BrowserRouter as Router,Routes,Route,Redirect } from "react-router-dom";
import { useEffect } from "react";
import Pages from "./pages/PageCombiner";
import Swipe from "./components/Swiper";
import Drawer from "./components/Drawer";
 import ElevateAppBar from "./components/Navbar";
 import ScrollToTop from "react-scroll-up";
 import {BsFillArrowUpCircleFill} from "react-icons/bs"
 import Fab from '@mui/material/Fab';
 import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { store } from "./redux/store";
import { Provider } from "react-redux";
export const LinkContext=React.createContext();

const App=()=> {

  let path='about';
  const [changeLinkColor,setChangeLinkColor]=useState('')

  useEffect(()=>{
    path= window.location.pathname.split("/")[1];
    setChangeLinkColor(path);
console.log( 'pathname changed to ', window.location.pathname.split('/')[1] )
  },[window.location.pathname])


  return (
    <>

      <ScrollToTop showUnder={360}>
      <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab> 
</ScrollToTop>
      
    <Router>

      <Routes>
      
      <Route exact path="/" element={<Pages.Home/>} />
      <Route path="/about" element={<Pages.About/>} />
      {/* <Route path="/contact" element={<Pages.Contact/>} /> */}
      <Route path="/categories" element={<Pages.Category/>} />
      <Route path="/news" element={<Pages.News/>} />
      <Route path="/products" element={<Pages.AllProducts/>} />
      <Route path="/works" element={<Pages.Works/>} />

      </Routes>

    </Router>
    </>

  );
}

export default App;
