import React, {useEffect} from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.jpg'
import home3 from '../assets/home3.jpg'
import img3 from '../assets/img3.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger)

const Home = () => {

    useEffect(() => {
        /*GSAP*/
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.content p',
                start: 'top 90%',
                //markers:true
            }
        });
        tl3.fromTo('.content p', { y: 100, opacity: 0, duration: 1.5 }, { y: 0, opacity: 1, duration: 1.5 })

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.content h1',
                start: 'top 80%',
                //markers:true    

            }
        })
        tl4.fromTo('.content h1', { x: 50, opacity: 0, duration: 1.5 }, { x: 0, opacity: 1, duration: 1.5 })
        /*CONTAINER1*/
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.img1',
                //markers: true,
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl.fromTo(".img1", { width: '0%', opacity: 0, duration: 2 }, { width: '50%', opacity: 1, duration: 2 })
            .fromTo(".content1 h1", { x: '-100%', opacity: 0, duration: 2 }, { x: 0, opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content1 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')

        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: '.imgOne',
                //markers: true,
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl5.fromTo(".imgOne", { width: '0%', opacity: 0, duration: 2 }, { width: '100%', opacity: 1, duration: 2 })
            .fromTo(".content1 h1", { x: '-100%', opacity: 0, duration: 2 }, { x: 0, opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content1 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')

        /*CONTAINER2*/
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.img2',
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl2.fromTo(".img2", { width: 0, opacity: 0, duration: 2 }, { width: '50%', opacity: 1, duration: 2 })
            .fromTo(".content2 h1", { x: '18%', opacity: 0, duration: 2 }, { x: '-10%', opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content2 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')

        const tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: '.imgTwo',
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl6.fromTo(".imgTwo", { width: 0, opacity: 0, duration: 2 }, { width: '100%', opacity: 1, duration: 2 })
            .fromTo(".content2 h1", { x: '18%', opacity: 0, duration: 2 }, { x: '-10%', opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content2 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')
        /**/

    }, [])

    return (
        <>
            <main>
                <div className='wall-home'>

                    <div>
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            <SwiperSlide><img src={home1} alt="img" /></SwiperSlide>
                            <SwiperSlide><img src={home2} alt="img" /></SwiperSlide>
                            <SwiperSlide><img src={home3} alt="img" /></SwiperSlide>
                        </Swiper>
                    </div>
                    
                    <section className='container-title'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='intro_img'>
                                        <img src={img3} className='w-100' alt="intro" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='content'>
                                        <h1>We are Keep Healthy!</h1>
                                        <p>Our mission is to democratize access to a nourishing plant-based lifestyle for all.</p>
                                        <p>We deliver nutritious plant-based meals to your doorstep while making plant-based eating exciting and accessible for all your meals and snacks. </p>
                                        <Link to='/about'>
                                            <button onClick={() => { console.log('you clicked learn-more') }}>Learn more <AiOutlineHeart /> </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='container1'>
                        <div className='container'>
                            <div className='row d-flex'>
                                <div className='col-md-6'>
                                    <div className='content1'>
                                        <h1>While eating is essential, eating thoughtfully is a form of mastery.</h1>
                                        <p>Eat like you love yourself.</p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <img className='img1' src={img1} alt="img1" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='container2'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <img className='img2' src={img2} alt="img2" />
                                </div>
                                <div className='col-md-6'>
                                    <div className='content2'>
                                        <h1>We aim to make healthy living achievable for all.</h1>
                                        <p>No synthetic colors or flavors added.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </ >
    )
}

export default Home
