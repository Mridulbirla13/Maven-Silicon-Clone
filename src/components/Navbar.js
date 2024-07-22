import React from 'react'
import './CSS/Navbar.css'

function Navbar() {
    return (
        <nav className="ms-nav">
            <div className="container-nav">
                <div className="ms-nav-top">
                    <div className="ms-top-contain">
                        <ul className="ms-top-menu">
                            <li className='ms-top-menu-item first-child'>
                                <a className='top-menu-item' href="/"><span>ONLINE COURSE</span></a>
                            </li>
                            <li className='ms-top-menu-item'>
                                <a className='top-menu-item' href="/"><span>INTERNSHIP</span></a>
                            </li>
                            <li className='ms-top-menu-item'>
                                <a className='top-menu-item' href="/"><span>JOB ORIENTED COURSES</span></a>
                            </li>
                            <li className='ms-top-menu-item'>
                                <a className='top-menu-item' href="/"><span>PLACEMENTS</span></a>
                            </li>
                            <li className='ms-top-menu-item'>
                                <a className='top-menu-item' href="/"><span>ADMISSION</span></a>
                            </li>
                        </ul>
                        <ul className="ms-top-menu ms-6">
                            <li className="ms-top-menu-item first-child">
                                <a href="mailto:admission@maven-silicon.com" className="active-green">
                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                        <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2712%27%20height=%2712%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} /></span>
                                        <img alt="mail" src="/assets/email.svg" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} /></span>
                                    ADMISSION@MAVEN-SILICON.COM
                                </a>
                            </li>
                            <li className="ms-top-menu-item">
                                <a href="tel:8069096300" className="active-green">
                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                        <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2712%27%20height=%2712%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} /></span>
                                        <img alt="mail" src="/assets/phone.svg" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} /></span>
                                    080 6909 6300
                                </a>
                            </li>
                            <li className="ms-top-menu-item">
                                <a href="https://api.whatsapp.com/send?phone=+91 74064 79555&amp;text=Hey, I want to know more about your (services)" target="_blank" rel="noreferrer" className="active-green">
                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                        <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2712%27%20height=%2712%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} /></span>
                                        <img alt="mail" src="/assets/whatsapp.svg" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} /></span>
                                    +91 74064 79555
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="ms-nav-bottom">
                    <div className="ms-bottom-logo">
                        <a href="/">
                            <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27117%27%20height=%2744%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                </span>
                                <img alt="Maven Silicon - The Best VLSI Training Institute in Bangalore" src="assets/maven-silicon-light.389635c8.svg" decoding="async" data-nimg="intrinsic" class="img-fluid" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                            </span>
                        </a>
                    </div>
                    <ul className="ms-bottom-menu">
                        <li className="ms-bottom-menu-item">
                            <div>
                                <div className="ms-dropdown">
                                    <div className="ms-dropdown-button">
                                        <a className='ms-dropdown-button'>
                                            <span className='me-1'>About us</span>
                                            <div style={{ transform: "none" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" class=" bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sub-menu">
                                        <ul className='ms-dropdown-menu'>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">About us</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">Our Partners</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">News and Events</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">Success Stories</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li className="ms-bottom-menu-item text-white">
                            <a className='ms-dropdown-button'>
                                Blog
                            </a>
                        </li>
                        <li className="ms-bottom-menu-item">
                            <div>
                                <div className="ms-dropdown">
                                    <div className="ms-dropdown-button">
                                        <a className='ms-dropdown-button'>
                                            <span className='me-1'>Courses</span>
                                            <div style={{ transform: "none" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" class=" bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sub-menu">
                                        <ul className='ms-dropdown-menu'>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">All Course</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">Job Oriented</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">Online Courses</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">VLSI Internship</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">Part-Time Courses</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">RISC-V</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">ARM</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li className="ms-bottom-menu-item">
                            <div>
                                <div className="ms-dropdown">
                                    <div className="ms-dropdown-button">
                                        <a className='ms-dropdown-button'>
                                            <span className='me-1'>Free Resources</span>
                                            <div style={{ transform: "none" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" class=" bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sub-menu">
                                        <ul className='ms-dropdown-menu'>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">Courses</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">Projects</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">Podcast</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">Workshop</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li className="ms-bottom-menu-item">
                            <div>
                                <div className="ms-dropdown">
                                    <div className="ms-dropdown-button">
                                        <a className='ms-dropdown-button'>
                                            <span className='me-1'>For Organizations</span>
                                            <div style={{ transform: "none" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" class=" bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sub-menu">
                                        <ul className='ms-dropdown-menu'>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">Corporate</a>
                                            </li>
                                            <li className='ms-dropdown-menu-item'>
                                                <a className='ms-dropdown-link' href="/">Universities</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li className="ms-bottom-menu-item">
                            <a className='ms-dropdown-button'>
                                Maven Global
                            </a>
                        </li>
                        <li>
                            <a class="cursor-pointer">
                                <button class="ms-button__primary" style={{background: "rgb(95, 184, 88)"}} fdprocessedid="m5vl1q">
                                    <div class="ms-button__primary-name">Free demo Class</div>
                                    <div class="ms-button__primary-arrow">
                                        <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
                                            <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2713%27%20height=%279%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px"}}/>
                                            </span>
                                            <img alt="" src="/assets/arrow-green.30b88e9c.svg" decoding="async" data-nimg="intrinsic" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
                                        </span>
                                    </div>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
