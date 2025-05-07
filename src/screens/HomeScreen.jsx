import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const HomeScreen = () => {
  return (
    <>
        <div>
            <Navbar />
        </div>
        <div style={{alignItems: "center", display: "flex", justifyContent: "center", marginTop: "30px"}}>
            <Card />
        </div>
        
    </>

  )
}

export default HomeScreen