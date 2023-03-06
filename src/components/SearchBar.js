import React from 'react'
import { TextField } from '@mui/material/'; //import TextField from '@mui/material/TextField';


const SearchBar = ({setSearch}) => {

  const inputProps = {
    sx: {
      "& input": {
        textAlign: "center",
        background: "white",
        fullWidth: "100%",
      },
    },
  };
  return (
    <div>
      <TextField 
      id="standard-basic" 
      // label="character" 
      variant="standard" 
      InputProps={inputProps} 
      style={{ width: "100%" }}
      placeholder="Input Character Name" 
      onChange={(e)=> setSearch(e.target.value)}/>      
    </div>
  )
}

export default SearchBar