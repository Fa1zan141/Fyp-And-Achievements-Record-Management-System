import React from 'react'
function FYPCard({Fypdata}) {
  return (

    <>
    <div style={{height: 200, width: 250, backgroundColor: 'blue', borderRadius: 20, color: 'white', fontWeight:700, margin:50, marginTop:80, marginLeft:-10 ,opacity:0.5}} >
    <div style={{ marginLeft:30, marginTop:25, height:40, width:200, opacity:0.8 }}>{Fypdata.title}</div>
    <div style={{ marginLeft:30, marginTop:8, height:40, width:200, opacity:0.8 }}>{Fypdata.studentname}</div>
    <div style={{ marginLeft:30, marginTop:8, height:40, width:200, opacity:0.8 }}>{Fypdata.supervisor}</div>

    </div>
    </>
  )
}

export default FYPCard                                                                                                                                                                       