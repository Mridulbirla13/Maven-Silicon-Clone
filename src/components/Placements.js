import React from 'react';
import "./CSS/Placements.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Placements() {
    return (
        <>
            <div className="placements">
                <section className='ms-section-pl'>
                    <div className="container-pl">
                        <div className="row-pl">
                            <div className="col-pl">
                                <h3 className="ms-section-title-pl">
                                    <span className="ap">Maven's</span>
                                    <span className='bp'> VLSI Placements</span>
                                </h3>
                                <div className="mt-pl">
                                    <a href="/placement/#placementupdates">
                                        <button class="ms-button-primary-pl" style={{ background: "transparent", border: "2px solid rgb(255, 255, 255)" }} fdprocessedid="g0mx6l">
                                            <div class="ms-button-primary-pl-name">View Our Placement Records</div>
                                            <div class="ms-button-primary-pl-arrow">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2714%27%20height=%2710%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Maven silicon" src="/assets/white-arrow.379200fc.svg" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                </span>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                                <div className="ms-placements-record">
                                    <div className="ms-placements-count --month">
                                        <p className="ms-placements-count-value">5000+</p>
                                        <p className="ms-placements-count-title">Total placed</p>
                                    </div>
                                    <div className="ms-placements-count --overall">
                                        <p className="ms-placements-count-value">250+</p>
                                        <p className="ms-placements-count-title">Recruiters</p>
                                    </div>
                                </div>
                                <div className="w-100-pl">
                                    <Swiper
                                        spaceBetween={20}
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
                                            overflow: 'unset',
                                            'touch-action': 'pan-y',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            listStyle: 'none',
                                            padding: '0',
                                            zIndex: '10',
                                            height: '457px',
                                            paddingBottom: "4rem",
                                            paddingRight: "1.5rem",
                                            paddingLeft: "1.5rem",
                                            "--swiper-pagination-color": "#5fb858",
                                            "--swiper-pagination-margin": "2rem 6px 4px",
                                            "--swiper-pagination-width": "#5fb858",
                                            "--swiper-pagination-bullet-inactive-color": "#000",
                                            "--swiper-pagination-bullet-inactive-opacity": "0.1",
                                            "--swiper-pagination-bullet-inactive-width": "30px",
                                            "--swiper-pagination-bullet-width": "25px",
                                            "--swiper-pagination-bullet-border-radius": "2px",
                                            "--swiper-pagination-bullet-height": "4px",
                                            "--swiper-pagination-bullet-horizontal-gap": "6px"
                                        }}
                                    >
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{ backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/2fcee5eaf45764396783284249d5941d.jpg")' }}>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3-pl">
                                                            <p class="ms-placements-card-pl-author-name">Bhumireddy Surekha</p>
                                                            <div class="pl-dflex">
                                                                <div class="ms-placements-brand-wrap">
                                                                    <picture>
                                                                        <source type="image/svg" />
                                                                        <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/689d9a66c7237d358b3491e3956b9a7d.jpg" alt="client" class="img-fluid-pl" />
                                                                    </picture>
                                                                </div>
                                                                <p class="ms-placements-card-pl-author-course">L&amp;T Technology Services</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video"></div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">Maven Silicon is not like other institutes. I have searched a lot for many VLSI industries at last I joined Maven silicon. It is the best place to get good training and lab facilities and exams to get skilled in the VLSI domain. Within 4 months, I got an early placement opportunity and got placed in L&amp;T.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{ backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/c00e1bd1da4ebf0106325090c66c1b45.jpg")' }}>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3-pl">
                                                            <p class="ms-placements-card-pl-author-name">Soumyajit Ghosh</p>
                                                            <div class="pl-dflex">
                                                                <div class="ms-placements-brand-wrap">
                                                                    <picture>
                                                                        <source type="image/svg" />
                                                                        <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/095af371a4e677e54c822b59c01c0a77.png" alt="client" class="img-fluid-pl" />
                                                                    </picture>
                                                                </div>
                                                                <p class="ms-placements-card-pl-author-course">Truechip Solutions Private Limited</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video">
                                                        <span class="ms-nPlayButton__playIcon">
                                                            <picture class=" ">
                                                                <source srcset="/assets/icon-play.svg" />
                                                                <img src="/assets/icon-play.svg" class="img-fluid-pl" />
                                                            </picture>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">Recently I got a placement in Truechip solutions even before the completion of the course. The trainers, faculties, and mentors are very helpful and provide us with crystal clear concepts. I am thankful to the whole Maven silicon team and I recommend it for all those who want to pursue their career in the VLSI industry.</p>                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{ backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/d0e9f307e3a6c04daf71aeabdf555dd4.jpg")' }}></div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-3-pl">
                                                        <p class="ms-placements-card-pl-author-name">Soumitra Dixit</p>
                                                        <div class="pl-dflex">
                                                            <div class="ms-placements-brand-wrap">
                                                                <picture>
                                                                    <source type="image/svg" />
                                                                    <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/331a9ae8a02903b781fc2c6167068551.jfif" alt="client" class="img-fluid-pl" />
                                                                </picture>
                                                            </div>
                                                            <p class="ms-placements-card-pl-author-course">Vellore Institute of Technology, Bhopal</p>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video"></div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">My time at Maven silicon was an experience I will cherish forever. The internship has given me wonderful hands-on experience on live projects which will help me in my career. The friendly attitude of the trainers and their willingness to always offer a helping hand have made me feel a part of their family.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/36e402ad952f9fa6df8ed41b29b1ca0e.jpg")'}}></div>
                                                        </div>
                                                        <div class="ms-3-pl">
                                                            <p class="ms-placements-card-pl-author-name">Jidugu Prudhvi Raju</p>
                                                            <div class="pl-dflex">
                                                                <div class="ms-placements-brand-wrap">
                                                                    <picture>
                                                                        <source type="image/svg" />
                                                                        <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/f77012e8b8ff41b49bba663be0d9183a.png" alt="client" class="img-fluid-pl" />
                                                                    </picture>
                                                                </div>
                                                                <p class="ms-placements-card-pl-author-course">Capgemini</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video">
                                                        <div class="ms-nPlayButton cursor-pointer">
                                                            <span class="ms-nPlayButton__playIcon">
                                                                <picture class=" ">
                                                                    <source srcset="/assets/icon-play.svg" />
                                                                    <img src="/assets/icon-play.svg" class="img-fluid-pl " />
                                                                </picture>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">Obviously Maven Silicon is the best VLSI training institute. During course the guidance provided by mentors, especially special business communication &amp; language grooming sessions helped me to get placed in Capgemini. I really appreciate the standards set by maven and thankful to each &amp; everyone</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/090cbbec18a1dda86590cbb2455468b5.jpg")'}}></div>
                                                        </div>
                                                        <div class="ms-3-pl">
                                                            <p class="ms-placements-card-pl-author-name">Nisha Singh</p>
                                                            <div class="pl-dflex">
                                                                <div class="ms-placements-brand-wrap">
                                                                    <picture>
                                                                        <source type="image/svg" />
                                                                        <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/96ff60f34b2587afa8f7d9f1e6492b80.png" alt="client" class="img-fluid-pl" />
                                                                    </picture>
                                                                </div>
                                                                <p class="ms-placements-card-pl-author-course">Synopsys</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video"></div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">Maven Silicon is definitely the best place for all the VLSI aspirants who are interested to carry forward their journey in core VLSI companies. Their training helped me get placed in my dream company i.e. Synopsys. I would like to thank all my mentors from Maven Silicon for taking efforts to make the concepts crystal clear. Apart from this, I would also appreciate the efforts from the technical team and the placement team for providing rigorous efforts to make us all placement-ready.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/59e7421bab1a030eb7a8f57522508bf9.jpg")'}}></div>
                                                        </div>
                                                        <div class="ms-3-pl">
                                                            <p class="ms-placements-card-pl-author-name">Siddharth Chopra</p>
                                                            <div class="pl-dflex">
                                                                <div class="ms-placements-brand-wrap">
                                                                    <picture>
                                                                        <source type="image/svg" />
                                                                        <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/095af371a4e677e54c822b59c01c0a77.png" alt="client" class="img-fluid-pl" />
                                                                    </picture>
                                                                </div>
                                                                <p class="ms-placements-card-pl-author-course">Truechip Solutions</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video">
                                                        <div class="ms-nPlayButton cursor-pointer">
                                                            <span class="ms-nPlayButton__playIcon">
                                                                <picture class=" ">
                                                                    <source srcset="/assets/icon-play.svg" />
                                                                    <img src="/assets/icon-play.svg" class="img-fluid-pl " />
                                                                </picture>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">For a non IITian/NITian who finds it difficult to enter VLSI domain, it is the best place to learn skillsets and start a successful career in VLSI domain. The course is well structured and provides VPN access to practise the learnt knowledge remotely on your personal system. The teaching faculty imparts the subject knowledge in an easy to understand way by giving the real life interesting examples and irrespective of the batch size the faculty tries to clear doubts of everyone. Maven provides ample of amazing placement opportunites which includes big dream product as well service based companies.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{ backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/2fcee5eaf45764396783284249d5941d.jpg")' }}>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3-pl">
                                                            <p class="ms-placements-card-pl-author-name">Bhumireddy Surekha</p>
                                                            <div class="pl-dflex">
                                                                <div class="ms-placements-brand-wrap">
                                                                    <picture>
                                                                        <source type="image/svg" />
                                                                        <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/689d9a66c7237d358b3491e3956b9a7d.jpg" alt="client" class="img-fluid-pl" />
                                                                    </picture>
                                                                </div>
                                                                <p class="ms-placements-card-pl-author-course">L&amp;T Technology Services</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video"></div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">Maven Silicon is not like other institutes. I have searched a lot for many VLSI industries at last I joined Maven silicon. It is the best place to get good training and lab facilities and exams to get skilled in the VLSI domain. Within 4 months, I got an early placement opportunity and got placed in L&amp;T.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/6d456f2b1152f09a4615ed3f3c6ec1e1.jpg")'}}></div>
                                                        </div>
                                                        <div class="ms-3-pl">
                                                            <p class="ms-placements-card-pl-author-name">Rahul Kumar Thakur</p>
                                                            <div class="pl-dflex">
                                                                <div class="ms-placements-brand-wrap">
                                                                    <picture>
                                                                        <source type="image/svg" />
                                                                        <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/b53929a294718df0d266f8d1adec7fef.png" alt="client" class="img-fluid-pl" />
                                                                    </picture>
                                                                </div>
                                                                <p class="ms-placements-card-pl-author-course">Cadence</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video"></div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">Maven silicon is a very prestigious institute that provides training and placement in the VLSI domain in the best possible way. It is the best place where you can get good training and lab facilities to enhance your knowledge and skills in the VLSI domain. The Placement Support is also very good. They keep you engaged in concept-building activities and give you opportunities till you get placed.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/c72cc8bf9e41f4f79327c79b33350857.jpg")'}}></div>
                                                        </div>
                                                        <div class="ms-3-pl">
                                                            <p class="ms-placements-card-pl-author-name">Umesh Gupta</p>
                                                            <div class="pl-dflex">
                                                                <div class="ms-placements-brand-wrap">
                                                                    <picture>
                                                                        <source type="image/svg" />
                                                                        <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/780aade32a1ba6378f06476fffcb29cb.svg" alt="client" class="img-fluid-pl" />
                                                                    </picture>
                                                                </div>
                                                                <p class="ms-placements-card-pl-author-course">Intel</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video">
                                                        <div class="ms-nPlayButton cursor-pointer">
                                                            <span class="ms-nPlayButton__playIcon">
                                                                <picture class=" ">
                                                                    <source srcset="/assets/icon-play.svg" />
                                                                    <img src="/assets/icon-play.svg" class="img-fluid-pl " />
                                                                </picture>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">Maven has the best trainers whether its technical, communication or mentors. Their passion for teaching is astonishing, they are always open to help and ready to support your career, always update with market demands in VLSI. They have the best placement team as well. I could have never achieved my dream without Maven, one of best choice i made in my career by trusting them.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/063bf6dcd952e63c7fa43b513c5ebfaf.jpg")'}}></div>
                                                        </div>
                                                        <div class="ms-3-pl">
                                                            <p class="ms-placements-card-pl-author-name">Janakiram Chollangi</p>
                                                            <div class="pl-dflex">
                                                                <div class="ms-placements-brand-wrap">
                                                                    <picture>
                                                                        <source type="image/svg" />
                                                                        <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/8221307cbfc022d7602afecf8bb39622.png" alt="client" class="img-fluid-pl" />
                                                                    </picture>
                                                                </div>
                                                                <p class="ms-placements-card-pl-author-course">Mentor Graphics</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video"></div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">The Job Oriented Course structure of Advanced VLSI Design and Verification at Maven Silicon perfectly suits all the necessary skills required for an individual to enter the VLSI Industry by staying ahead of all the individuals.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/1c00bddc4fa1d67d847e113617ee720c.png")'}}></div>
                                                        </div>
                                                        <div class="ms-3-pl">
                                                            <p class="ms-placements-card-pl-author-name">Gawde Mayuresh Pradeep</p>
                                                            <div class="pl-dflex">
                                                                <div class="ms-placements-brand-wrap">
                                                                    <picture>
                                                                        <source type="image/svg" />
                                                                        <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/b53929a294718df0d266f8d1adec7fef.png" alt="client" class="img-fluid-pl" />
                                                                    </picture>
                                                                </div>
                                                                <p class="ms-placements-card-pl-author-course">Cadence</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video">
                                                        <div class="ms-nPlayButton cursor-pointer">
                                                            <span class="ms-nPlayButton__playIcon">
                                                                <picture class=" ">
                                                                    <source srcset="/assets/icon-play.svg" />
                                                                    <img src="/assets/icon-play.svg" class="img-fluid-pl " />
                                                                </picture>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">I have enrolled myself into job oriented course of Maven Silicon and it became very fruitful for me. As I got placed in cadence. The course is well structured, in course not only you get technical part but also business communication.Which is very helpful to crack an interview. The technical part is more than sufficient to get into VLSI industry. The labs and projects give you a great insight about the Digital VLSI domain.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: '506.4px', marginRight: '20px' }}>
                                            <div class="ms-placements-card-pl">
                                                <div class="ms-placements-card-pl-top">
                                                    <div class="ms-placements-card-pl-author">
                                                        <div>
                                                            <div class="ms-placements-card-pl-author-avatar" style={{backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/ee6d7acaad738a2de383d61a7f85b2a7.jpg")'}}></div>
                                                        </div>
                                                        <div class="ms-3-pl">
                                                            <p class="ms-placements-card-pl-author-name">Karthik C</p>
                                                            <div class="pl-dflex">
                                                                <div class="ms-placements-brand-wrap">
                                                                    <picture>
                                                                        <source type="image/svg" />
                                                                        <img src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/96ff60f34b2587afa8f7d9f1e6492b80.png" alt="client" class="img-fluid-pl" />
                                                                    </picture>
                                                                </div>
                                                                <p class="ms-placements-card-pl-author-course">Synopsys</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-placements-card-pl-video"></div>
                                                </div>
                                                <div class="ms-placements-card-pl-bottom">
                                                    <p class="ms-placements-card-pl-testimonial">Maven Silicon is the best VLSI Training Institute as the course is very well structured, and highly experienced faculty conduct Q and A sessions, which clarify our doubts. Mentor sessions and lab facilities help us understand the concept in-depth, and also business communication classes help in personal development. Overall the training and placement facilities are excellent. I am delighted that I got placed in Synopsys.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <p className="text-pl">
                                * Logos are the trademarks of the respective organizations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}

export default Placements
