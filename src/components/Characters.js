import React from 'react'
import Char from "./Char"

const Characters = ({chars}) => {
  return (
    <>
      {chars
        ? chars.map((el, index) => <Char char={el} key={index} />)
        : console.log("yükleniyor")}
    </>
  )
}

export default Characters