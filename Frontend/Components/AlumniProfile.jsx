import React from 'react'

function AlumniProfile({Alumnidata}) {
  return (
    <>
    <div style={{height: 300, width: 350, margin:50, marginTop:70, marginLeft:0}}>
    {Alumnidata.img && <img src={Alumnidata.img} alt="Image" style={{height:250, width:300,borderRadius:30}}/>}
        <h1 style={{marginLeft: 25, marginTop:-250, height:70, width:100, color:'white', fontWeight:700, fontSize:20}}>{Alumnidata.Name}</h1>
    </div>
    
    </>
  )
}

export default AlumniProfile