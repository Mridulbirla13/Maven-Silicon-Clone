import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import './CSS/University.css'

function University() {
  return (
    <>
        <section className="ms-university">
            <picture class=" ">
                <source srcset="/assets/background-universities.svg"/>
                <img src="/assets/background-universities.svg" class="ms-universities__m"/>
            </picture>
            <div className="container-un">
                <div className="row-un just">
                    <div className="col-un">
                        <h6 class="ms-section-title-un">Our Collaboration with<span class="font-bold-acad"> Academia</span></h6>
                        <div class="mb-5-text-center">
                            <a download="" href="/partners/">
                                <button class="ms-button__primary-un" style={{background: 'transparent', border: '2px solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)'}} fdprocessedid="qaxaqg">
                                    <div class="ms-button__primary-un-name">Know more</div>
                                    <div class="ms-button__primary-un-arrow">
                                        <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                            <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2714%27%20height=%2710%27/%3e" style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px'}}/>
                                            </span>
                                            <img alt="Maven silicon" src="/assets/white-arrow.379200fc.svg" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block',width: '338.6px', height: '75px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}/>
                                        </span>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row-un mu-5">
                    <div className="sub-col-un">
                        <div className="ms-university-slider">
                            <Swiper
                              spaceBetween={50}
                              slidesPerView={3}
                              loop = {true}
                              autoplay={{ delay: 3000, disableOnInteraction: false }}
                              onSlideChange={() => console.log('slide change')}
                              onSwiper={(swiper) => console.log(swiper)}
                              modules={[Autoplay]}
                              >
                              <SwiperSlide>
                                <div class="text-ms-un" style={{height: "75px"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: "0px"}}>
                                        <img alt="client" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/9456dd444f9acf2dea8a3ec1bb233960.png" decoding="async" data-nimg="fill" class="ms-universities__logo" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block',width: '338.6px', height: '75px', minwidth: '100%', maxwidth: '100%', minheight: "100%", maxheight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div class="text-ms-un" style={{height: "75px"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: "0px"}}>
                                        <img alt="client" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/86dbfc044470424c09af88354e585a4f.png" decoding="async" data-nimg="fill" class="ms-universities__logo" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block',width: '338.6px', height: '75px', minwidth: '100%', maxwidth: '100%', minheight: "100%", maxheight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div class="text-ms-un" style={{height: "75px"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: "0px"}}>
                                        <img alt="client" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/43f75444ae648a39c6bc1f935181d45b.png" decoding="async" data-nimg="fill" class="ms-universities__logo" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block',width: '338.6px', height: '75px', minwidth: '100%', maxwidth: '100%', minheight: "100%", maxheight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div class="text-ms-un" style={{height: "75px"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: "0px"}}>
                                        <img alt="client" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/e51e533012376426e0d38b03fcfe6e4e.png" decoding="async" data-nimg="fill" class="ms-universities__logo" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block',width: '338.6px', height: '75px', minwidth: '100%', maxwidth: '100%', minheight: "100%", maxheight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div class="text-ms-un" style={{height: "75px"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: "0px"}}>
                                        <img alt="client" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/a34e2e1aaa828db1be5fc36034633553.png" decoding="async" data-nimg="fill" class="ms-universities__logo" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block',width: '338.6px', height: '75px', minwidth: '100%', maxwidth: '100%', minheight: "100%", maxheight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div class="text-ms-un" style={{height: "75px"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: "0px"}}>
                                        <img alt="client" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/8b6134ef542a22a4402929f28f55d731.png" decoding="async" data-nimg="fill" class="ms-universities__logo" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block',width: '338.6px', height: '75px', minwidth: '100%', maxwidth: '100%', minheight: "100%", maxheight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div class="text-ms-un" style={{height: "75px"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: "0px"}}>
                                        <img alt="client" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/0ff3e4afa481ad0776a7dc4dfaaa9cd5.png" decoding="async" data-nimg="fill" class="ms-universities__logo" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block',width: '338.6px', height: '75px', minwidth: '100%', maxwidth: '100%', minheight: "100%", maxheight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div class="text-ms-un" style={{height: "75px"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: "0px"}}>
                                        <img alt="client" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/ba22a5b885f92b56858497da91bb0102.png" decoding="async" data-nimg="fill" class="ms-universities__logo" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block',width: '338.6px', height: '75px', minwidth: '100%', maxwidth: '100%', minheight: "100%", maxheight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div class="text-ms-un" style={{height: "75px"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: "0px"}}>
                                        <img alt="client" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/b5c1ea52fff0b1da6a05a809e47e22f3.png" decoding="async" data-nimg="fill" class="ms-universities__logo" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block',width: '338.6px', height: '75px', minwidth: '100%', maxwidth: '100%', minheight: "100%", maxheight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div class="text-ms-un" style={{height: "75px"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: "0px"}}>
                                        <img alt="client" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/adfd9a3bf4ccfd03b52cc2cf9e1d03d1.png" decoding="async" data-nimg="fill" class="ms-universities__logo" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block',width: '338.6px', height: '75px', minwidth: '100%', maxwidth: '100%', minheight: "100%", maxheight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                        </div>
                        <p class="text-logo">* Logos are the trademarks of the respective organizations.</p>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default University
