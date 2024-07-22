import React, { useState } from 'react'
import "./CSS/ProvenTrack.css";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function ProvenTrack() {

    const [counter, setCounter]= useState(false);
  return (
    <>
      <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
        <div className="ms-pt">
          <section className="ms-section ms-records overflow-hidden">
            <div className="container-pt">
              <div className="row-pt">
                <div className="col-pt-lft">
                  <h4>A proven track record</h4>
                </div>
                <div className="col-pt-rgt">
                  <div className="sub-row-pt">
                    <div className="sub-col-pt">
                      <div className="ms-records__count">
                        <div className="text-light"><span>{counter && <CountUp start={0} end={15} delay={2}/>}</span></div> 
                        <span>+</span> 
                        <div className="d_block"></div>
                      </div>
                      <p className="ms-records__title text-light">Years of Excellence</p>
                    </div>
                    <div className="sub-col-pt">
                      <div className="ms-records__count">
                        <div className="text-light"><span>{counter && <CountUp start={0} end={15} delay={2}/>}</span></div> 
                        <span>+</span> 
                        <div></div>
                      </div>
                      <p className="ms-records__title text-light">Years of avg exp. of faculties</p>
                    </div>
                    <div className="sub-col-pt">
                      <div className="ms-records__count">
                        <div className="text-light"><span>{counter && <CountUp start={0} end={250} delay={2}/>}</span></div> 
                        <span>+</span> 
                        <div></div>
                      </div>
                      <p className="ms-records__title text-light">Industry Partners</p>
                    </div>
                    <div className="sub-col-pt">
                      <div className="ms-records__count">
                        <div className="text-light"><span>{counter && <CountUp start={0} end={5000} delay={2}/>}</span></div> 
                        <span>+</span> 
                        <div></div>
                      </div>
                      <p className="ms-records__title text-light">Alumni Shining Globally</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ScrollTrigger>
    </>
  )
}

export default ProvenTrack;
