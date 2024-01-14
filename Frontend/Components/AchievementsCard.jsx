import React from 'react'

function AchievementsCard({Achievementsdata}) {
  return (
    <>
        <div style={{height: 350, width: 350,margin:50, marginTop:70, marginLeft:0}} > 
        {Achievementsdata.img && <img src={Achievementsdata.img} alt="Project" style={{ height:250, width:300,borderRadius:30}} />}
        <div style={{marginLeft: 30, marginTop:0, height:70, width:260, color:'white', fontWeight:600}}>{Achievementsdata.description}</div>
        </div>
    
    </>
  )
}

export default AchievementsCard