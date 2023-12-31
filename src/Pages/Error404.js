import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <>
     <div className="noise"></div>
           <div className="overlay"></div>
         <div className='Error404'>
           <div className="terminal">
             <h1>Error <span className="errorcode">404</span></h1>
             <p className="output">The page you are looking for might have been removed, had its name <br /> changed or is temporarily unavailable.</p>
             <p className="output">Please try to <a href="#1">go back</a> or <Link to="/">return to the homepage</Link>.</p>
             <p className="output">Good luck.</p>
          </div>
           </div>
    </>
  )
}

export default Error404