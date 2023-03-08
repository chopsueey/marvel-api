import React from 'react'
import svg from '../images/marvel-comics-logo.svg'

export default function Header() {
  return (
    <div className="container d-flex justify-content-center">
      <div className='text-center my-4' >
      <img src={svg} alt="marvel-comics-logo" style={{width: "70%"}} />
    </div>
    </div>
  )
}
