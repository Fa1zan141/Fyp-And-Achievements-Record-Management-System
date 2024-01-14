import React from 'react'
import { Link } from 'react-router-dom'
function News({Newsjobs}) {
  return (
    <>
    <div>
    <Link to="/News&Jobs" style={{color:'rgb(24, 24, 58)',textDecoration:'underline', display:'list-item', marginLeft:30,marginTop:30, fontSize:'large', fontWeight:700}}>{Newsjobs.title}</Link>
    </div>
    </>
  )
}

export default News