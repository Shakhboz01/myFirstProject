import React from 'react'
import LinkHeader from '../components/LinkHeader'
import Products from '../components/Products'
import Pagination from '@mui/material/Pagination';
import Product from '../components/Product';
import styled from 'styled-components';
import { popularProducts } from '../Data/data';
import { useEffect } from 'react';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { GrSort } from 'react-icons/gr';
import { Tooltip } from '@mui/material';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
const Container=styled.div`
margin:200px auto 0 auto;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`

const AllProducts = () => {
  const [page, setPage] = React.useState(1);
  let prodsPerPage=3;

  const [filter,setFilter]=useState([]);
  let IndexOfLastProd;
  let IndexOfFirstProd;
  useEffect(()=>{
   IndexOfLastProd=page*prodsPerPage;
   IndexOfFirstProd=IndexOfLastProd-prodsPerPage;
   window.scrollTo(0,400);
setFilter(popularProducts.slice(IndexOfFirstProd,IndexOfLastProd));


  },[page])

  const handleChange = (event, value) => {
    setPage(value);
  };

 

  return (
    <>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
      <LinkHeader/>
      <Filter  />
      <Container>
            {filter.map(item=>(
              <Product key={item.id} item={item} />
            ))}
      </Container>
      <Pagination  style={{margin:"40px"}} onChange={handleChange} count={Math.ceil(popularProducts.length/prodsPerPage)} variant="outlined" color="secondary" />
    </div>
      <Footer/>
</>
  )
}

export default AllProducts
