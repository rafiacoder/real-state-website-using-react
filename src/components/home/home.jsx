import React from 'react'
import Card from './card'

function Home() {
    return (
     <section
      className=" h-screen bg-cover bg-center flex items-center justify-end"
      style={{
        backgroundImage: "url('background.jpg')", 
      }}
    >
    <Card/>
    </section>)
}

export default Home
