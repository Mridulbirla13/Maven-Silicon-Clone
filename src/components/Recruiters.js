import React from 'react'
import "./CSS/Recruiter.css"

function Recruiters() {
    return (
        <>
            <section className='ms-section1'>
                <div className="ms-collabs-cn containers">
                    <picture className="ms-collabs__shape">
                        <source srcset="/assets/the-line.svg" type="image/svg" />
                        <img src="/assets/the-line.svg" alt="" />
                    </picture>
                    <div className="ms-collabs_container">
                        <div className="row-recruit">
                            <div className="left-col">
                                <h5 className="ms-section_title-recruit">Our Recruiters</h5>
                                <p className="ms-collabs__caption my-3 my-md-4">Maven Silicon is the essential choice for recruiting by more than 250 leading semiconductor companies. This enables us to empower the next generation in VLSI technology and bring success and advancements to their VLSI career. </p>
                                <a href="/partners/">
                                    <button className="ms-button__primary d-flex align-items-center justify-content-center " style={{ background: "rgb(95, 184, 88)" }} fdprocessedid="7dm4m">
                                        <div className="ms-button__primary-name text-capitalize font-bold me-6 ">View Our Recruiters</div>
                                        <div className="ms-button__primary-arrow d-flex align-items-center justify-content-center ">
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
                                <div className="ms-collabs__cwarning">
                                    <p className="text-xs body-font text-dark opacity-40 mt-5">* Logos are the trademarks of the respective organizations.</p>
                                </div>
                            </div>
                            <div className="right-col">
                                <div className="ms-collabs__logos mt-5 mt-md-0" style={{ backgroundImage: "url('https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/d7ad2b2554b590b3ea2905ad0c003ec5.png')" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-collabs__partners">
                        <div className="partner-row">
                            <div className="partner-col1">
                                <h4>Our Industry <br />Partners</h4>
                            </div>
                            <div className="partner-col2">
                                <div className="ms-nextfilling__span--relative">
                                    <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "167.508px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                        <img
                                            alt="Industry Partners of Maven Silicon - VLSI Training Institute"
                                            src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/3419e3cbcf56750244db2ed14467b8d2.png"
                                            decoding="async"
                                            data-nimg="fill"
                                            className="ms-nextfilling ms-nextfilling--cover"
                                            style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "100%", height: "100%", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }}
                                        />
                                    </span>
                                </div>
                                <p className="tex">* Logos are the trademarks of the respective organizations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Recruiters
