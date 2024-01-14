import React from 'react'

function Supervisors({Teachersdata}) {
  return (
    <>
        <div style={{height:150, width:150, margin:40, top:100,paddingInline:12, marginLeft:50 }}>
        {Teachersdata.img && <img src={Teachersdata.img} alt="Image" style={{height:120, width:100, borderRadius:50,border:3, borderColor:'rgb(24, 24, 58)'}} />}
        <h1 style={{fontSize:12, fontWeight:800, color:'rgb(24, 24, 58)', marginLeft:15}}>{Teachersdata.Name}</h1>
        </div>
    </>
  )
}

export default Supervisors