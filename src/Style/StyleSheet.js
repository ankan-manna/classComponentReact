import React from 'react'
import "./myStyle.css"
import Style1 from "./myStyle.module.css"
function StyleSheet() {
    const heder={
        fontSize:"72px",
        color:"red"
    }
  return (
    <div>
        <i className={Style1.mod}>abc</i>
      <h2 className="txt font-xl">Ankan</h2>
      <p style={heder}>Manna</p>
        <h1 style={{color:"#ccc"}}>hello</h1>
    </div>
  )
}

export default StyleSheet
