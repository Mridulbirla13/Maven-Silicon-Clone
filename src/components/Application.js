import React from 'react';
import './CSS/Application.css'

function Application() {
    return (
        <>
            <section className="ms-section-application">
                <div className="container-application">
                    <div className="ms-application-left">
                        <div class="ms-nextfillimg__span-ap">
                            <span style={{boxsizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxwidth: "100%"}}>
                                <span style={{boxsizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxwidth: "100%"}}>
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2794%27%20height=%2794%27/%3e" style={{display: 'block', maxwidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: "0px"}} />
                                </span>
                                <img alt="maven adroid app" src="/assets/maven-icon (1).svg" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '94px', height: '94px', minwidth: '100%', maxwidth: '100%', minheight: '100%', maxheight: "100%"}} />
                                <noscript></noscript>
                            </span>
                        </div>
                        <h6 class="ms-application__title">Learn anytime, anywhere <br /><span class="font-bold"></span></h6>
                        <h5 class="ms-application__tag">Download the Maven Learning App</h5>
                        <div class="ms-application__links">
                            <a href="https://play.google.com/store/apps/details?id=com.mavensilicon.app&amp;hl=en_IN&amp;gl=US" rel="noreferrer" target="_blank">
                                <span style={{boxsizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxwidth: "100%"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxwidth: "100%"}}>
                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27162%27%20height=%2748%27/%3e" style={{display: 'block', maxwidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: "0px"}}/>
                                    </span>
                                    <img alt="maven adroid app" src="/assets/playstore-icon.svg" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '162px', height: '48px', minwidth: '100%', maxwidth: '100%', minheight: '100%', maxheight: "100%"}}/>
                                        <noscript></noscript>
                                </span>
                            </a>
                            <a href="https://apps.apple.com/us/app/maven-silicon/id1394419482" rel="noreferrer" target="_blank" class="ms-2">
                                <span style={{boxsizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxwidth: "100%"}}>
                                    <span style={{boxsizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxwidth: "100%"}}>
                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27162%27%20height=%2748%27/%3e" style={{display: 'block', maxwidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: "0px"}}/>
                                    </span>
                                    <img alt="maven iOS app" src="/assets/appstore-icon.svg" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '162px', height: '48px', minwidth: '100%', maxwidth: '100%', minheight: '100%', maxheight: "100%"}}/>
                                    <noscript></noscript>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="ms-application-right">
                        <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: '0px'}}>
                            <img alt="Maven Silicon Mobile App Download" src="https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/5ec943dc047be15c3ec824c34858d4ed.png" decoding="async" data-nimg="fill" class="ms-nextfillimg ms-nextfillimg--cover" style={{position: 'absolute', inset: '0px', boxsizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', minwidth: '100%', maxwidth: '100%', minheight: '100%', maxheight: "100%"}}/>
                            <noscript></noscript>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Application
