import React from 'react'
import pic from '../assets/meals2.jpg'

const About = () => {
  return (
    <section className='about'>
      <main>
        <div>
          <img src={pic} alt="img" />
          <p>Welcome to Keep Healthy, your trusted destination for a nourishing and convenient lifestyle. Our mission is to make healthy living effortlessly accessible to you through our user-friendly app.</ p> 

          <p>At Keep Healthy, we believe that maintaining a nutritious diet should be both simple and enjoyable. That's why we've designed our platform to provide you with a seamless experience. With just a few taps on your device, you can explore a wide range of wholesome meal options and have them delivered right to your doorstep.</ p>

          <p>Our dedicated team is committed to ensuring that you receive your orders promptly and reliably. We take pride in offering a diverse selection of meals that cater to various dietary preferences and needs, all crafted with quality ingredients and free from artificial additives.</p>

          <p>Whether you're looking to kickstart a healthier lifestyle, save time on meal prep, or simply savor delicious, wholesome food, Keep Healthy is here to support you every step of the way. Join us on this journey towards better health and convenience. Download our app today and experience the ease of keeping healthy with us!</ p>
        </div>
      </main>
    </section>
  )
}

export default About
