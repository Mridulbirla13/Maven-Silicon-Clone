import React,{useEffect} from 'react';
import "./CSS/Main.css"

function HeroMain() {

  useEffect(() => {
    const video = document.getElementById('background-video');
    if (video) {
      video.play().catch(error => {
        console.log('Autoplay was prevented:', error);
        video.muted = true;
        video.play();
      });
    }
  }, []);

  return (
    <>
      <section className='ms-section-banner ms-hero'>
            <div className="ms-hero-background">
              <video
                className="ms-hero-background-video"
                id="background-video"
                src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/bdd50195889b7041d5df430dfd667330.mp4"
                playsInline
                autoPlay
                loop
                muted
                data-video="0"
              ></video>
            </div>
            <div className="ms-hero-content container-main">
                <div className="row-main">
                    <div className="col-main">
                        <h1 className='hero-head'>Celebrating 15 years of Excellence in VLSI Training</h1>
                        <h2 className='hero-head2'>Augment core VLSI skills with comprehensive industry-level VLSI courses</h2>
                        <div className="hero-div">
                            <div className="mb-5">
                                <a href="/">
                                    <button className="ms-button__primary" style={{background: "rgb(95, 184, 88)", color: "rgb(255, 255, 255)"}} fdprocessedid="m95hl">
                                        <div className="ms-button__primary-name">Explore Courses</div>
                                        <div className="ms-button__primary-arrow ms-button__primary-arrow--rotated">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.291" height="9.359" viewBox="0 0 13.291 9.359">
                                                <g id="Group_71005" data-name="Group 71005" transform="translate(-1302.354 -60.216)">
                                                    <g id="Group_71004" data-name="Group 71004" transform="translate(0)">
                                                        <path id="Path_40" data-name="Path 40" d="M1299.921,65H1310.5" transform="translate(3.183)" fill="none" stroke="#5fb858" stroke-linecap="round" stroke-width="1.5"></path>
                                                        <path id="Path_41" data-name="Path 41" d="M1314.892,61.277l3.619,3.619-3.619,3.619" transform="translate(-3.615)" fill="none" stroke="#5fb858" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </a>
                            </div>
                            <div className="mb-5 ms-sm-4">
                                <a href="/placement/#placementupdates">
                                    <button className="ms-button__primary" style={{background: "transparent", border: "1px solid rgb(255, 255, 255)"}} fdprocessedid="6fprh">
                                        <div className="ms-button__primary-name">View Recent Placements</div>
                                        <div className="ms-button__primary-arrow">
                                            <picture className=" ">
                                                <source srcset="/assets/arrow-green.30b88e9c.svg"/>
                                                <img src="assets/arrow-green.30b88e9c.svg" className="img-fluid "/>
                                            </picture>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <picture className=''>
                <source srcset="/assets/m-shaped-vector.svg"/>
                <img src="/assets/m-shaped-vector.svg" className="img-fluid ms-hero__m ms-coursebanner__m"/>
            </picture>
            <div className="ms-hero-divider">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1932.661 333.078">
                    <path id="Path_205788" data-name="Path 205788" d="M-689,7495.282v110.592H1243.661V7272.8l-1716.917,256.49S-608.24,7547.5-689,7495.282Z" transform="translate(689 -7272.796)" fill="#fff"></path>
                </svg>
            </div>
        </section>
    </>
  )
}

export default HeroMain
