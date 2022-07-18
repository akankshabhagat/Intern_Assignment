import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section class="main-hero-section">
    <div class="hero_left">
    <h1 class ="head_hero" > Lorem ipsum dolor sit, lorem ipsum</h1>
    <h3 class="head2_hero">Lorem ipsum dolor sit, lorem ipsum dolor sit, lorem ipsum dolor sit, lorem</h3>
    <button  class="btn btn-primary btn-lg btn_l" >Learn more</button>
  </div>
    
    <div class="hero_right">
  
    <img class="hero_img" src="Images/docturr.png" />
    </div>
  </section>
  )
}

export default Hero;