import React from 'react'
import {Pagination as Pg} from '@mui/material';

const Pagination = ({count, setPage}) => {
  return (
    <div>
      <Pg 
      count={count} 
      color="primary"
      onChange={(e,value)=> (setPage(value))}
      style={{
        marginTop: "1rem",
        background: "white",
        display:"flex", 
        justifyContent: "center"
      }}/>
    </div>
  )
}

export default Pagination