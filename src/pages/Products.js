import React from 'react'
import LinkHeader from '../components/LinkHeader'
import Products from '../components/Products'
import Pagination from '@mui/material/Pagination';
import Product from '../components/Product';
import styled from 'styled-components';
import { popularProducts } from '../Data/data';
import { useEffect } from 'react';
import { useState } from 'react';
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

setFilter(popularProducts.slice(IndexOfFirstProd,IndexOfLastProd));
 
  },[page])

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <LinkHeader/>
      {page}
      <Container>
            {filter.map(item=>(
              <Product key={item.id} item={item} />
            ))}
      </Container>
      <Pagination onChange={handleChange} count={Math.ceil(popularProducts.length/prodsPerPage)} variant="outlined" color="secondary" />
    </div>
  )
}

export default AllProducts
