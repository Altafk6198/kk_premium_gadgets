import '../Slider/Slider.css'
import React from 'react'
import Watch from '../Slider/1Watches.jpg'
import Rep from '../Slider/Rep.jpg'
import Acc from '../Slider/acc.jpg'


const Slider = () => {
  return (
    <section className='main_slide'>
        <div className='slider'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Watch} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Watches</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Rep} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Reparing services</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Acc} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>All Eleectronics Accesories</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </section>
  )
}

export default Slider;