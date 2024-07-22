import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import './CSS/Slider2.css'
import { useState, useRef } from 'react';

function Slider2() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const directionRef = useRef('forward');
  
    const handleSlideChange = (swiper) => {
      const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;
      const currentIndex = swiper.realIndex;
  
      // Change direction if reaching the start or end
      if (directionRef.current === 'forward' && currentIndex === totalSlides - 1) {
        swiper.autoplay.stop();
        directionRef.current = 'backward';
        swiper.slidePrev();
        swiper.autoplay.start();
      } else if (directionRef.current === 'backward' && currentIndex === 0) {
        swiper.autoplay.stop();
        directionRef.current = 'forward';
        swiper.slideNext();
        swiper.autoplay.start();
      }
    };
  
  return (
    <>
        <section className="ms-section1">
            <div className="container-fluid">
                <div className="row-slider2">
                    <div className="ms-row__left">
                        <h5>Watch Free <span>Demo Sessions</span></h5>
                    </div>
                    <div className="col-12 col-lg-7">
                        <div className="w-100">
                            <div>
                                <Swiper className='swiper'
                                    spaceBetween={30}
                                    slidesPerView={2}
                                    loop = {false}
                                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    modules={[Autoplay]}
                                >                                    
                                    {/* <div className="swiper-slide swiper-slide-prev" style="width: 324px; margin-right: 30px;"> */}
                                    <SwiperSlide className = "slide" style={{width: '345.6px', marginRight: '30px'}}>
                                        <div className="ms-videos__card d-flex flex-column justify-content-end cursor-pointer" style={{backgroundImage: "url('https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/2638683d891182b2de858e8d73711eca.png')"}}>
                                            ::before
                                            <div className="ms-videos__card-content">
                                                <div className="ms-videos__lockplay-button">
                                                    <span className="ms-nPlayButton__playIcon">
                                                        <picture className=" ">
                                                            <source srcset="/assets/icon-play-green.svg"/>
                                                            <img src="/assets/icon-play-green.svg" className="img-fluid " width="16"/>
                                                        </picture>
                                                    </span>
                                                </div>
                                                <p className="ms-videos__card-title text-center">Why Processor?</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className = "slide" style={{width: '345.6px', marginRight: '30px'}}>
                                        <div className="ms-videos__card d-flex flex-column justify-content-end cursor-pointer" style={{backgroundImage: "url('https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/94a14b05b409bf721b27f01662240a5f.png')"}}>
                                            <div className="ms-videos__card-content">
                                                <div className="ms-videos__lockplay-button">
                                                    <picture className=" ">
                                                        <source srcset="/assets/lock.svg"/>
                                                        <img src="/assets/lock.svg" className="img-fluid " width="16"/>
                                                    </picture>
                                                </div>
                                                <p className="ms-videos__card-title text-center">SystemVerilog Testbench Architecture</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className = "slide" style={{width: '345.6px', marginRight: '30px'}}>
                                        <div className="ms-videos__card d-flex flex-column justify-content-end cursor-pointer" style={{backgroundImage: "url('https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/0f1e767d3819c2ee2823156692042381.png')"}}>
                                            <div className="ms-videos__card-content">
                                                <div className="ms-videos__lockplay-button">
                                                    <picture className=" ">
                                                        <source srcset="/assets/lock.svg"/>
                                                        <img src="/assets/lock.svg" className="img-fluid " width="16"/>
                                                    </picture>
                                                </div>
                                                <p className="ms-videos__card-title text-center"> Smartphone SoC Design</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Slider2
