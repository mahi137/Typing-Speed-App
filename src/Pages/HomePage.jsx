import React from 'react'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TypingBox from "../Components/TypingBox";

const HomePage = () => {
  return (
    <div className="canvas">       
        <Header/>
        <TypingBox />
        <Footer />
      </div>
  )
}

export default HomePage;