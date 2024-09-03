/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
//Mui Imports
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

function loading() {
    const {loading} = useSelector((store) => store.product);

  return (
    <Backdrop
    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
    open={loading}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  )
}

export default loading