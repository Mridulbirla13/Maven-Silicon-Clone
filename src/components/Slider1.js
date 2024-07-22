import React from 'react';
import './CSS/Slider1.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


function Slider1() {

    return (
        <>
            <section className='ms-slider'>
                <div className="w-100">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}
                    loop = {true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay]}
                >
                            <SwiperSlide>
                             <div className="ms-slider__card ">
                                    <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
                                        <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px"}}/>
                                        </span>
                                        <img alt="" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/060c50acde60e36c8a29e2110e9903b3.svg" decoding="async" data-nimg="intrinsic" className="ms-slider__card-icon" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin:" auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
                                            <noscript></noscript>
                                    </span>
                                    <p className="ms-slider__card-caption text-md text-lg-xl font-light heading-font text-black">App-Based VLSI Courses</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ms-slider__card ">
                                    <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
                                        <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px"}}/>
                                        </span>
                                        <img alt="" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/a3e1e30c60619850d8ded0fd9bb0f3b9.svg" decoding="async" data-nimg="intrinsic" className="ms-slider__card-icon" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin:" auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
                                            <noscript></noscript>
                                    </span>
                                    <p className="ms-slider__card-caption text-md text-lg-xl font-light heading-font text-black">24x7 Online Support &amp; Lab Access</p>
                                </div>
                            </SwiperSlide>                          
                            <SwiperSlide>
                                <div className="ms-slider__card ">
                                    <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
                                        <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px"}}/>
                                        </span>
                                        <img alt="" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/fd791845501a9d17ec02d79626628699.svg" decoding="async" data-nimg="intrinsic" className="ms-slider__card-icon" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin:" auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                    <p className="ms-slider__card-caption text-md text-lg-xl font-light heading-font text-black">250+ Industry Partners</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ms-slider__card ">
                                    <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
                                        <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px"}}/>
                                        </span>
                                        <img alt="" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/6c6580c15312b65c767a51680d03ae0f.svg" decoding="async" data-nimg="intrinsic" className="ms-slider__card-icon" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin:" auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                    <p className="ms-slider__card-caption text-md text-lg-xl font-light heading-font text-black">5000+ Alumni Shining Globally</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ms-slider__card ">
                                    <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
                                        <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px"}}/>
                                        </span>
                                        <img alt="" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/fb3b2c99d9a548f7c93953815e5c3040.svg" decoding="async" data-nimg="intrinsic" className="ms-slider__card-icon" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin:" auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                    <p className="ms-slider__card-caption text-md text-lg-xl font-light heading-font text-black">Industry Standard EDA Tools</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ms-slider__card ">
                                    <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
                                        <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px"}}/>
                                        </span>
                                        <img alt="" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/eda890fc09dc068f25b4768855969447.svg" decoding="async" data-nimg="intrinsic" className="ms-slider__card-icon" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin:" auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
                                        <noscript></noscript>
                                    </span>
                                    <p className="ms-slider__card-caption text-md text-lg-xl font-light heading-font text-black">Highly Expert Trainers</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ms-slider__card ">
                                    <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
                                        <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px"}}/>
                                        </span>
                                        <img alt="" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/c26422041e85ecb54fa414a3ef74ff74.svg" decoding="async" data-nimg="intrinsic" className="ms-slider__card-icon" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin:" auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
                                    </span>
                                    <p className="ms-slider__card-caption text-md text-lg-xl font-light heading-font text-black">Superior Training Methodology</p>
                                </div>
                            </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Slider1
