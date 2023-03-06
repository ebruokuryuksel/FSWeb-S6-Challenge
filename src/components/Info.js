import React from 'react'
import Alert from '@mui/material/Alert';

const Info = ({count}) => {
  return (
    <div>
        <Alert 
        severity="info" sx={{ mt: "1rem" }} >{count} characters are found.</Alert>

    </div>
  )
}

export default Info