import React from 'react';
import './CSS/Faq.css';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Faq() {
    return (
        <>
            <div className="ms-faq">
                <div className="ms-faq__divider">
                    <picture>
                        <source srcSet="/assets/curve-typef.svg" />
                        <img src="/assets/curve-typef.svg" className="img-fluid w-100" alt="Curve Divider" />
                    </picture>
                </div>
                <div className="container-faq">
                    <div className="row-faq">
                        <div className="col-faq">
                            <div className="row-faq justify-content-center">
                                <div className="sub-col-faq">
                                    <h4 className="ms-faq__title">Get the latest VLSI news, updates, technical and interview resources</h4>
                                </div>
                            </div>
                            <h5 className="ms-faq__heading">Subscribe to our Blog</h5>
                            <form className="ms-faq__cform" siq_id="autopick_dt2l7kl0q5">
                                <label className="ms-faq__form">
                                    <input className="ms-faq__form-input" type="email" placeholder="Enter your email" name="email" fdprocessedid="3mtjm" />
                                    <button className="ms-button__primary" style={{ background: 'rgb(95, 184, 88)' }} fdprocessedid="pkikrd">
                                        <div className="ms-button__primary-name">Submit</div>
                                        <div className="ms-button__primary-arrow">
                                            <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                                    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2713%27%20height=%279%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px' }} />
                                                </span>
                                                <img alt="" src="/assets/arrow-green.30b88e9c.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                            </span>
                                        </div>
                                    </button>
                                </label>
                                <div>
                                    <div>
                                        <div className="grecaptcha-badge" data-style="bottomright" style={{ width: '256px', height: '60px', display: 'block', transition: 'right 0.3s ease 0s', position: 'fixed', bottom: '14px', right: '-186px', boxShadow: 'gray 0px 0px 5px', borderRadius: '2px', overflow: 'hidden' }}>
                                            <div className="grecaptcha-logo">
                                                <iframe title="reCAPTCHA" width="256px" height="60px" role="presentation" name="a-oc9vxzny4uej" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfwiJYkAAAAAFreV8H-2xNw0xEQI7QB5dJfHwZx&amp;co=aHR0cHM6Ly93d3cubWF2ZW4tc2lsaWNvbi5jb206NDQz&amp;hl=en&amp;type=image&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;theme=light&amp;size=invisible&amp;badge=bottomright&amp;cb=cp786r6ivhe1"></iframe>
                                            </div>
                                            <div className="grecaptcha-error"></div>
                                            <textarea id="g-recaptcha-response-1" name="g-recaptcha-response" className="g-recaptcha-response" style={{ width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none' }}></textarea>
                                        </div>
                                        <iframe style={{ display: 'none' }}></iframe>
                                    </div>
                                </div>
                                <div className="m-auto text-center position-relative"></div>
                            </form>
                        </div>
                    </div>
                    <div className="row-faq ext">
                        <div className="sub1-col-faq">
                            <h4 className="ms-section__title-faq">Have Doubts?<br /><span className="ms-section__title-faq--highligh">Read Our FAQ's</span></h4>
                        </div>
                        <div className="sub2-col-faq">
                            <div className="mt-lg-n4" style={{ opacity: '1' }}>
                                <Accordion defaultActiveKey={['0']} alwaysOpen className='accord'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            Why should I do VLSI training?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="ms-richtext">
                                                <p>All the Integrated Chips we use in mobiles, TVs, computers, satellites, and automobiles, etc. are designed with VLSI technology. Hence, there is a huge scope and growth in the VLSI Industry and it is full of job opportunities. Since there is a huge gap between what the college education offers and the industry expectation, it is recommended to go for the VLSI training which bridges that gap and gives you a great hands-on experience.</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            What is chip designing?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="ms-richtext">
                                                <p>Steps involved in Chip design Chip’s architecture: Create circuit designs, Run simulations, Supervise layout, Tape out the chip to the foundry and Evaluate the prototype once the chip comes back from the laboratory. Chip designers work to make faster, cheaper and more innovative chips that can automate parts or the entire function of electronic devices. A chip design engineer's job involves architecture, logic design, circuit design and physical design of the chip, testing, and verification of the final product.</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            Is VLSI a good career?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="ms-richtext">
                                                <p>VLSI is a very good domain to build a career with a huge number of opportunities. There is a demand for chips in every sector, be it automobiles, consumer electronics or high-end servers. You should have good command on Verilog, SystemVerilog, and UVM to start your career as VLSI Design or VLSI Verification Engineer.</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            What is the eligibility for VLSI Chip Designing Courses?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="ms-richtext">
                                                <p>The undergraduates, graduates, or postgraduates from below streams can take up the VLSI Chip Design Course and make a career in the VLSI Industry. BE/BTech in EEE/ECE/TE or ME/MTech/MS in Electronics/MSc Electronics</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div class="view-all-faq">
                                <a>
                                    <button class="ms-button__primary d-flex align-items-center justify-content-center" style={{background: 'transparent', border: '2px solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)'}} fdprocessedid="vr9rnw">
                                        <div class="ms-button__primary-name me-3 text-capitalize font-bold ms-font-xs">View All FAQs</div>
                                        <div class="ms-button__primary-arrow d-flex align-items-center justify-content-center bg-green-primary">
                                            <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                                <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}>
                                                    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2710%27/%3e" style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px'}}/>
                                                </span>
                                                <img alt="Maven silicon" src="/assets/white-arrow.379200fc.svg" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}/>
                                            </span>
                                        </div>
                                    </button>
                                </a>
                            </div>
                            <div class="ms-faq__cta">
                                <div class="row align-items-center">
                                    <div class="col-12 col-md-7">
                                        <p class="ms-faq-p-text">Don't see your questions answered here?</p>
                                    </div>
                                    <div class="col-12 col-md-5 text-center text-sm-end pt-3 pt-md-0">
                                        <a href="/vlsi-training-bangalore-contact-us/">
                                            <button class="ms-button__primary faq-1" style={{background: 'rgb(95, 184, 88)'}} fdprocessedid="i7isn">
                                                <div class="ms-button__primary-name faq-2">Contact us</div>
                                                <div class="ms-button__primary-arrow faq-3 ">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;
