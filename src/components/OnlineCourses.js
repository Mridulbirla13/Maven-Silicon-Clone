import React from 'react'
import './CSS/OnlineCourses.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function OnlineCourses() {
    return (
        <>
            <div className="ms-pt">
                <section class="ms-section ms-careers">
                    <div class="ms-careers__divider">
                        <picture class=" ">
                            <source srcset="/assets/curve-typee.svg" />
                            <img src="/assets/curve-typee.svg" class="img-fluids" />
                        </picture>
                    </div>
                    <div class="container-oc">
                        <div class="oc-row">
                            <div class="oc-col">
                                <h3 class="ms-section__title-oc ms-section__title--max-width-600 text-center mb-8 font-light">Build A Strong Foundation For Your <span class="ms-section__title--highligh">VLSI Career</span></h3>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            loop={true}
                            pagination={{
                                clickable: true
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            modules={[Autoplay, Pagination]}
                            style={{
                                marginLeft: "auto",
                                marginRight: "auto",
                                position: "relative",
                                overflow: "hidden",
                                listStyle: "none",
                                padding: "0",
                                zIndex: "1",
                                paddingBottom: "4rem",
                                paddingRight: "1.5rem",
                                paddingLeft: "1.5rem",
                                "--swiper-pagination-color": "#5fb858",
                                "--swiper-pagination-margin": "2rem 6px 4px",
                                "--swiper-pagination-width": "#5fb858",
                                "--swiper-pagination-bullet-inactive-color": "#000",
                                "--swiper-pagination-bullet-inactive-opacity": "0.2",
                                "--swiper-pagination-bullet-inactive-width": "30px",
                                "--swiper-pagination-bullet-width": "50px",
                                "--swiper-pagination-bullet-border-radius": "2px",
                                "--swiper-pagination-bullet-height": "4px",
                                "--swiper-pagination-bullet-horizontal-gap": "6px"
                            }}
                        >
                            {/* <div class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" style={{width: "396px", marginright: "30px"}}> */}
                            <SwiperSlide style={{ width: "396px", marginRight: "30px" }}>
                                <a href="https://elearn.maven-silicon.com/vlsi-system-on-chip-design" target="_blank" class="d-block" rel="noreferrer">
                                    <div class="ms-careers__card-oc"><div class="ms-careers__card-oc-thumbnail position-relative">
                                        <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                            <img alt="Free VLSI Course - Bangalore" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/b26b2d2a22d848f435ba355d5bcfad32.png" decoding="async" data-nimg="fill" class="ms-nextfillimg--cover" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                            <noscript></noscript>
                                        </span>
                                    </div>
                                        <div class="ms-careers__card-oc-content">
                                            <div class="ms-careers__card-oc-content-rating" style={{ height: "25px" }}>Learn anytime, anywhere</div>
                                            <h3 class="ms-careers__card-oc-content-title">VLSI System On Chip Design - Overview</h3>
                                            <div class="ms-careers__card-oc-content-duration">
                                                <div class="ms-careers__card-oc-content-duration-icon">
                                                    <span style={{ boxsizing: "border-box", display: "inline-block", overflow: "hidden", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxwidth: "100%" }}>
                                                        <span style={{ boxsizing: "border-box", display: "block", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxwidth: "100%" }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e" style={{ display: "block", maxwidth: "100%", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                        </span>
                                                        <img alt="duration" src="/assets/duration-icon.svg" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                        <noscript></noscript>
                                                    </span>
                                                </div>
                                                <div class="ms-careers__card-oc-content-duration-text mb-1">3 Days |                    Explore Now &gt;</div>
                                            </div>
                                            <div class="ms-careers__card-oc-content-price d-flex justify-content-between px-3 py-2 true">
                                                <div class="ms-careers__card-oc-content-price-sum">FREE COURSE</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            {/* <div class="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="1" style={{width: "396px", marginright: "30px"}}> */}
                            <SwiperSlide style={{ width: "396px", marginRight: "30px" }}>
                                <a href="https://elearn.maven-silicon.com/vlsi-design-course" target="_blank" class="d-block" rel="noreferrer">
                                    <div class="ms-careers__card-oc">
                                        <div class="ms-careers__card-oc-thumbnail position-relative">
                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                <img alt="RTL Design using System Verilog" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/b664d3a2e31058bde1d40b7acbc6cc9c.png" decoding="async" data-nimg="fill" class="ms-nextfillimg--cover" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                <noscript></noscript>
                                            </span>
                                        </div>
                                        <div class="ms-careers__card-oc-content">
                                            <div class="ms-careers__card-oc-content-rating" style={{ height: "25px" }}>Learn anytime, anywhere</div>
                                            <h3 class="ms-careers__card-oc-content-title">VLSI Design Methodologies</h3>
                                            <div class="ms-careers__card-oc-content-duration">
                                                <div class="ms-careers__card-oc-content-duration-icon">
                                                    <span style={{ boxsizing: "border-box", display: "inline-block", overflow: "hidden", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxwidth: "100%" }}>
                                                        <span style={{ boxsizing: "border-box", display: "block", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxwidth: "100%" }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e" style={{ display: "block", maxwidth: "100%", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                        </span>
                                                        <img alt="duration" src="/assets/duration-icon.svg" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                        <noscript></noscript>
                                                    </span>
                                                </div>
                                                <div class="ms-careers__card-oc-content-duration-text mb-1">180 Days | Explore Now &gt;</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            {/* <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" style={{width: "396px", marginright: "30px"}}> */}
                            <SwiperSlide style={{ width: "396px", marginRight: "30px" }}>
                                <a href="https://elearn.maven-silicon.com/design-for-testability" target="_blank" class="d-block" rel="noreferrer">
                                    <div class="ms-careers__card-oc">
                                        <div class="ms-careers__card-oc-thumbnail position-relative">
                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                <img alt="Maven Silicon VLSI DFT Course" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/905d796f018adbd8b1435dfa8360bcfa.png" decoding="async" data-nimg="fill" class="ms-nextfillimg--cover" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                <noscript></noscript>
                                            </span>
                                        </div>
                                        <div class="ms-careers__card-oc-content">
                                            <div class="ms-careers__card-oc-content-rating" style={{ height: "25px" }}>Learn anytime, anywhere</div>
                                            <h3 class="ms-careers__card-oc-content-title">Design for Testability</h3>
                                            <div class="ms-careers__card-oc-content-duration">
                                                <div class="ms-careers__card-oc-content-duration-icon">
                                                    <span style={{ boxsizing: "border-box", display: "inline-block", overflow: "hidden", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxwidth: "100%" }}>
                                                        <span style={{ boxsizing: "border-box", display: "block", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxwidth: "100%" }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e" style={{ display: "block", maxwidth: "100%", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                        </span>
                                                        <img alt="duration" src="/assets/duration-icon.svg" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                        <noscript></noscript>
                                                    </span>
                                                </div>
                                                <div class="ms-careers__card-oc-content-duration-text mb-1">90 Days | Explore Now &gt;</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            {/* <div class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" style={{width: "396px", marginright: "30px"}}> */}
                            <SwiperSlide style={{ width: "396px", marginRight: "30px" }}>
                                <a href="https://elearn.maven-silicon.com/vlsi-system-on-chip-design" target="_blank" class="d-block" rel="noreferrer">
                                    <div class="ms-careers__card-oc"><div class="ms-careers__card-oc-thumbnail position-relative">
                                        <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                            <img alt="Free VLSI Course - Bangalore" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/b26b2d2a22d848f435ba355d5bcfad32.png" decoding="async" data-nimg="fill" class="ms-nextfillimg--cover" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                            <noscript></noscript>
                                        </span>
                                    </div>
                                        <div class="ms-careers__card-oc-content">
                                            <div class="ms-careers__card-oc-content-rating" style={{ height: "25px" }}>Learn anytime, anywhere</div>
                                            <h3 class="ms-careers__card-oc-content-title">VLSI System On Chip Design - Overview</h3>
                                            <div class="ms-careers__card-oc-content-duration">
                                                <div class="ms-careers__card-oc-content-duration-icon">
                                                    <span style={{ boxsizing: "border-box", display: "inline-block", overflow: "hidden", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxwidth: "100%" }}>
                                                        <span style={{ boxsizing: "border-box", display: "block", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxwidth: "100%" }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e" style={{ display: "block", maxwidth: "100%", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                        </span>
                                                        <img alt="duration" src="/assets/duration-icon.svg" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                        <noscript></noscript>
                                                    </span>
                                                </div>
                                                <div class="ms-careers__card-oc-content-duration-text mb-1">3 Days |                    Explore Now &gt;</div>
                                            </div>
                                            <div class="ms-careers__card-oc-content-price d-flex justify-content-between px-3 py-2 true">
                                                <div class="ms-careers__card-oc-content-price-sum">FREE COURSE</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            {/* <div class="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="1" style={{width: "396px", marginright: "30px"}}> */}
                            <SwiperSlide style={{ width: "396px", marginRight: "30px" }}>
                                <a href="https://elearn.maven-silicon.com/vlsi-design-course" target="_blank" class="d-block" rel="noreferrer">
                                    <div class="ms-careers__card-oc">
                                        <div class="ms-careers__card-oc-thumbnail position-relative">
                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                <img alt="RTL Design using System Verilog" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/b664d3a2e31058bde1d40b7acbc6cc9c.png" decoding="async" data-nimg="fill" class="ms-nextfillimg--cover" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                <noscript></noscript>
                                            </span>
                                        </div>
                                        <div class="ms-careers__card-oc-content">
                                            <div class="ms-careers__card-oc-content-rating" style={{ height: "25px" }}>Learn anytime, anywhere</div>
                                            <h3 class="ms-careers__card-oc-content-title">VLSI Design Methodologies</h3>
                                            <div class="ms-careers__card-oc-content-duration">
                                                <div class="ms-careers__card-oc-content-duration-icon">
                                                    <span style={{ boxsizing: "border-box", display: "inline-block", overflow: "hidden", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxwidth: "100%" }}>
                                                        <span style={{ boxsizing: "border-box", display: "block", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxwidth: "100%" }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e" style={{ display: "block", maxwidth: "100%", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                        </span>
                                                        <img alt="duration" src="/assets/duration-icon.svg" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                        <noscript></noscript>
                                                    </span>
                                                </div>
                                                <div class="ms-careers__card-oc-content-duration-text mb-1">180 Days | Explore Now &gt;</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            {/* <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" style={{width: "396px", marginright: "30px"}}> */}
                            <SwiperSlide style={{ width: "396px", marginRight: "30px" }}>
                                <a href="https://elearn.maven-silicon.com/design-for-testability" target="_blank" class="d-block" rel="noreferrer">
                                    <div class="ms-careers__card-oc">
                                        <div class="ms-careers__card-oc-thumbnail position-relative">
                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                <img alt="Maven Silicon VLSI DFT Course" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/905d796f018adbd8b1435dfa8360bcfa.png" decoding="async" data-nimg="fill" class="ms-nextfillimg--cover" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                <noscript></noscript>
                                            </span>
                                        </div>
                                        <div class="ms-careers__card-oc-content">
                                            <div class="ms-careers__card-oc-content-rating" style={{ height: "25px" }}>Learn anytime, anywhere</div>
                                            <h3 class="ms-careers__card-oc-content-title">Design for Testability</h3>
                                            <div class="ms-careers__card-oc-content-duration">
                                                <div class="ms-careers__card-oc-content-duration-icon">
                                                    <span style={{ boxsizing: "border-box", display: "inline-block", overflow: "hidden", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxwidth: "100%" }}>
                                                        <span style={{ boxsizing: "border-box", display: "block", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxwidth: "100%" }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e" style={{ display: "block", maxwidth: "100%", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                        </span>
                                                        <img alt="duration" src="/assets/duration-icon.svg" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                        <noscript></noscript>
                                                    </span>
                                                </div>
                                                <div class="ms-careers__card-oc-content-duration-text mb-1">90 Days | Explore Now &gt;</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        </Swiper>
                        <div class="row-oc">
                                <div class="col-oc">
                                    <a download="" href="/online-vlsi-design-course/">
                                        <button class="ms-button__primary" style={{ background: "transparent", border: "2px solid rgb(0, 0, 0)", color: "rgb(0, 0, 0)" }} fdprocessedid="45r80f">
                                            <div class="ms-button__primary-name">View our online courses</div>
                                            <div class="ms-button__primary-arrow bg-green">
                                                <span style={{ boxsizing: "border-box", display: "inline-block", overflow: "hidden", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxwidth: "100%" }}>
                                                    <span style={{ boxsizing: "border-box", display: "block", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxwidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2714%27%20height=%2710%27/%3e" style={{ display: "block", maxwidth: "100%", width: "20px", height: "20px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Maven silicon" src="/assets/white-arrow.379200fc.svg" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    <noscript></noscript>
                                                </span>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default OnlineCourses
