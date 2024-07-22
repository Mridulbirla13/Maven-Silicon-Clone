import React from 'react';
import './CSS/Blogs.css';

function Blogs() {
  return (
    <>
      <section className="ms-section-blog">
        <div className="container-blog">
            <div className="row-blog -j">
                <div className="col-blog">
                    <h3 className="ms-section-title-blog">
                        Maven's
                        <span class="font-blog"> Blog</span>
                    </h3>
                </div>
            </div>
            <div className="row-blog">
                <div className="col-blog">
                    <a href="https://www.maven-silicon.com/blog/chip-war-without-soldiers/" class="ms-latestPostCard__link" target="_blank" rel="noopener noreferrer">
                        <div>
                            <div class="ms-latestPostCard" style={{backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/3ebb0c309af8bbcc7dd0f5cfd97d200c.png")'}}>
                                <div class="ms-latestPostCard__content">
                                    <div class="ms-latestPostCard__category-big">VLSI Industry</div>
                                    <h6 class="ms-latestPostCard__title">Chip War Without Soldiers?</h6>
                                    <div class="ms-latestPostCard__author">
                                        <div class="d-flex-blog">
                                            <div class="ms-latestPostCard__author-avatar" style={{backgroundImage: 'url("https://maven-silicon.sgp1.cdn.digitaloceanspaces.com/7f599355bb2135150f878d6393f4e8aa.jpg")'}}></div>
                                            <div class="ms-latestPostCard__author-name-big">BY Sivakumar P R</div>
                                        </div>
                                        <div class="ms-latestPostCard__author-date">
                                            <div class="ms-latestPostCard__author-date-icon">
                                                <picture class=" ">
                                                    <source srcset="/assets/icon-calendar.svg"/>
                                                    <img src="/assets/icon-calendar.svg" alt="calender icon" class="img-fluid-mb-1"/>
                                                </picture>
                                            </div>
                                            <div class="ms-latestPostCard__author-date-text-big">May 18, 2023</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-blog -blog-right">
                    <a href="https://www.maven-silicon.com/blog/what-is-low-power-design-in-vlsi/" class="ms-postCard__link" target="_blank" rel="noopener noreferrer">
                        <div class="ms-postCard">
                            <div class="ms-postCard__thumbnail">
                                <picture>
                                    <source srcset="https://www.maven-silicon.com/blog/wp-content/uploads/2024/07/What-is-Low-Power-Design-in-VLSI-2.png" type="image/svg"/>
                                    <img src="https://www.maven-silicon.com/blog/wp-content/uploads/2024/07/What-is-Low-Power-Design-in-VLSI-2.png" alt="What is Low-Power Design in VLSI?" class="ms-postCard__thumbnail-img"/>
                                </picture>
                            </div>
                            <div class="ms-postCard__content">
                                <h6 class="text-dark-blog">What is Low-Power Design in VLSI?</h6>
                                <ul class="ms-latestPostCard__author">
                                    <li class="hstack">
                                        <span class="ms-latestPostCard__author-avatar" style={{backgroundImage: 'url("https://www.maven-silicon.com/blog/wp-content/uploads/2022/10/website@2x.png")'}}></span>
                                        <p class="ms-latestPostCard__author-name">BY <span class="font-bold-color-gray8 ">Maven Silicon</span></p>
                                    </li>
                                    <li class="ms-latestPostCard__author-date">
                                        <span class="ms-latestPostCard__author-date-icon">
                                            <picture class=" ">
                                                <source srcset="/assets/icon-calendar.svg"/>
                                                <img src="/assets/icon-calendar.svg" alt="calender icon" class="img-fluid-BLOG"/>
                                            </picture>
                                        </span>
                                        <p class="ms-latestPostCard__author-date-text">2024-07-17</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.maven-silicon.com/blog/newsletter-july-2024/" class="ms-postCard__link" target="_blank" rel="noopener noreferrer">
                        <div class="ms-postCard">
                            <div class="ms-postCard__thumbnail">
                                <picture>
                                    <source srcset="https://www.maven-silicon.com/blog/wp-content/uploads/2024/07/Blog-Banners-Square-4.png" type="image/svg"/>
                                    <img src="https://www.maven-silicon.com/blog/wp-content/uploads/2024/07/Blog-Banners-Square-4.png" alt="Newsletter July 2024" class="ms-postCard__thumbnail-img"/>
                                </picture>
                            </div>
                            <div class="ms-postCard__content">
                                <span class="ms-latestPostCard__category black-span">Newsletters</span>
                                <h6 class="text-dark-blog">Newsletter July 2024</h6>
                                <ul class="ms-latestPostCard__author">
                                    <li class="hstack">
                                        <span class="ms-latestPostCard__author-avatar" style={{backgroundImage: 'url("https://www.maven-silicon.com/blog/wp-content/uploads/2022/10/website@2x.png")'}}></span>
                                        <p class="ms-latestPostCard__author-name">BY <span class="font-bold-color-gray8 ">Maven Silicon</span></p>
                                    </li>
                                    <li class="ms-latestPostCard__author-date">
                                        <span class="ms-latestPostCard__author-date-icon">
                                            <picture class=" ">
                                                <source srcset="/assets/icon-calendar.svg"/>
                                                <img src="/assets/icon-calendar.svg" alt="calender icon" class="img-fluid-BLOG"/>
                                            </picture>
                                        </span>
                                        <p class="ms-latestPostCard__author-date-text">2024-07-17</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.maven-silicon.com/blog/what-are-tap-cells-in-vlsi/" class="ms-postCard__link" target="_blank" rel="noopener noreferrer">
                        <div class="ms-postCard">
                            <div class="ms-postCard__thumbnail">
                                <picture>
                                    <source srcset="https://www.maven-silicon.com/blog/wp-content/uploads/2024/07/Blog-Banners-Square-3.png" type="image/svg"/>
                                    <img src="https://www.maven-silicon.com/blog/wp-content/uploads/2024/07/Blog-Banners-Square-3.png" alt="What Are Tap Cells in VLSI?" class="ms-postCard__thumbnail-img"/>
                                </picture>
                            </div>
                            <div class="ms-postCard__content">
                                <h6 class="text-dark-blog">What Are Tap Cells in VLSI?</h6>
                                <ul class="ms-latestPostCard__author">
                                    <li class="hstack">
                                        <span class="ms-latestPostCard__author-avatar" style={{backgroundImage: 'url("https://www.maven-silicon.com/blog/wp-content/uploads/2022/10/website@2x.png")'}}></span>
                                        <p class="ms-latestPostCard__author-name">BY <span class="font-bold-color-gray8 ">Maven Silicon</span></p>
                                    </li>
                                    <li class="ms-latestPostCard__author-date">
                                        <span class="ms-latestPostCard__author-date-icon">
                                            <picture class=" ">
                                                <source srcset="/assets/icon-calendar.svg"/>
                                                <img src="/assets/icon-calendar.svg" alt="calender icon" class="img-fluid-BLOG"/>
                                            </picture>
                                        </span>
                                        <p class="ms-latestPostCard__author-date-text">2024-07-16</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="text-blog">
                <a target="_blank" href="https://www.maven-silicon.com/blog/">
                    <button class="ms-button__primary" style={{background: 'rgb(95, 184, 88)'}} fdprocessedid="lwq98">
                        <div class="ms-button__primary-name">Read More</div>
                        <div class="ms-button__primary-arrow">
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
      </section>
    </>
  )
}

export default Blogs
