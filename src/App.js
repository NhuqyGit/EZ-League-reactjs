import React from 'react';
import { useState } from 'react';
import './App.scss';
import * as image from "./image";
import MySlider from './MySlider';
function App() {
  const [per, setPer] = useState("");

  const sponsors = [image.hkfa, image.hkfc, image.hkjfl, image.sgb, image.vf, image.j7s].map((sp)=>{
    return <img src={sp} alt="" />
  });

  const listFunc = [{
    img: image.image1,
    title: "Livestream",
    content: "Ez league allows to create online videos, follow tournament information."
  },
  {
    img: image.image2,
    title: "Manage Registrations",
    content: "Player information is stored and reused automatically. This simplifies the registration process for parents."
  },
  {
    img: image.image3,
    title: "Manage Users",
    content: "Admins have complete control of all user accounts in the system."
  },
  {
    img: image.image4,
    title: "Manage Leagues and Tournaments",
    content: "EZ League supports a variety of tournament structures, and can automatically create tournament schedules based on the needs of the league operator."
  },
  {
    img: image.image5,
    title: "Manage Comunications",
    content: "Easily update all information related to the match. Admins can contact users quickly via email or push notifications."
  },
  {
    img: image.image6,
    title: "Manage Documents",
    content: "The EZ League system helps make sure everyone in the league is properly credentialed and compliant with league standards."
  }];

  const funcComponents = listFunc.map((func)=>{
    return (
      <div className="func">
        <div className="img-container">
          <img src={func.img} alt="" />

        </div>
        <h4>{func.title}</h4>
        <p>{func.content}</p>
        <div className="btn-container">
          <button>Learn more</button>
        </div>
      </div>
    )
  });

  return (
    <div className="App">
      <header className="header-container" style={{backgroundImage: `url(${image.headerBg})`}}>
        <section className="header-head">
          <div className="logo">
            <img src={image.logo} alt=''></img>
            <span>EZ League</span>
          </div>
          <nav className="nav">
            <ul className="list-items">
              <li><a href='#' className='active'>Home</a></li>
              <li><a href='#'>Features</a></li>
              <li><a href='#'>About us</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </nav>
        </section>

        <section className="header-content">
          <div className="introduce">
            <h1>EZ League</h1>
            <p>EZ Active focuses on custom solutions for sports league operators that need more specific features than can be found in a “one size fits all” team management app.</p>
            <button>Let's Talk</button>
          </div>
          <div className="slider-page">
            <div className="page-active page"></div>
            <div className="page"></div>
            <div className="page"></div>
          </div>
          <div className="phoneAd">
            <img src={image.phoneAd} alt=''></img>
          </div>
        </section>
      </header>

      <main className="main-container">
        <section className="sec-services">
          <div className="sponsors">
            <span>Who Keep Trust on Us</span>
            <div className="sponsors-logo">
              {sponsors}
            </div>
          </div>

          <div className="services-heading">
            <span className='span-fore'>categories</span>
            <span className='span-back'>EZ League - Our best framework</span>
            <p>The EZ League app is the team management app exclusively used by the HKJFL (Hong Kong Junior Football League) and the HKFC (Hong Kong Football Club). We are constantly adding new features and improvements to the app based on the experiences and feedback of the over 10,000 users between those two leagues. </p>
          </div>

          <div className="services-content">
            <div className="grid-func">
              {funcComponents}

            </div>

            <div className='ad-contact'>
              <div className='des'>
                <h1>Get started with EZ League today</h1>
                <p>The easiest way to manage your team or sports organization</p>
                <button>CONTACT US</button>
              </div>

              <div className='img'>
                <img src={image.group} alt="" />
              </div>
            </div>

            <div className="ad-introduce">
              <div className="des">
                <h4>We make strategies,design & developmentto create valuable products.</h4>
                <p>EZ Active Solutions Limited helps activities-oriented organisations manage their day to day operations through our proprietary software engine, which can be customised to suit each entity's needs.</p>
                {/* <div className="can-do"> */}
                  <div className="do">
                    <div>
                      <img src={image.codeIcon} alt=""/>
                    </div>
                    <div className="do-des">
                      <h5>Software Dev</h5>
                      <p>We custom build apps for each organisation, allowing each organisation to more efficiently interact with customers/members while also increasing branding profile/value.</p>
                    </div>
                  </div>
                  <div className="do">
                    <div>
                      <img src={image.designTools} alt=""/>
                    </div>
                    <div className="do-des">
                      <h5>UX Design</h5>
                      <p>User experience is researched by us, giving you the best experience, the system is easy to use, but still aesthetically pleasing</p>
                    </div>
                  </div>
                  <div className="do">
                    <div>
                      <img src={image.mobile} alt=""/>
                    </div>
                    <div className="do-des">
                      <h5>PC version and Mobile App</h5>
                      <p>Available in PC and Mobile interfaces for you to easily manage anywhere</p>
                    </div>
                  </div>
                {/* </div> */}
              </div>
              <div className="banner">
                <img src={image.rectangle} alt=""/>
              </div>
            </div>

          </div>
        </section>

        <section className="sec-special" style={{backgroundImage: `url(${image.back9})`}}>
            <div className="grid-image">
              <div className="row1-col3">
                <img src={image._image} alt=""/>
              </div>
              <div className="row1-col1">
                <img src={image.image75} alt=""/>
              </div>
              <div className="row1-col1">
                <img src={image.image76} alt=""/>
              </div>
              <div className="row1-col1">
                <img src={image.image77} alt=""/>
              </div>
            </div>

            <div class="grid-des">
              <h4>Why We're Special</h4>
              <p className="des-p">We believe when people connect through sports, the world becomes better</p>
              
              <div className="list-good-factor">
                <div className="icon-cover">
                  <img src={image.designTools} alt=""/>
                </div>
                <p>Create customized reports</p>
              </div>
              <div className="list-good-factor">
                <div className="icon-cover">
                  <img src={image.codeIcon} alt=""/>
                </div>
                <p>Control how messages are received</p>
              </div>
              <div className="list-good-factor">
                <div className="icon-cover">
                  <img src={image.slash} alt=""/>
                </div>
                <p>Full featured event management</p>
              </div>
              <div className="list-good-factor">
                <div className="icon-cover">
                  <img src={image.like} alt=""/>
                </div>
                <p>The registration system is easy to use</p>
              </div>
            </div>
        </section>

        <section className='sec-reviews'>
          <div className='reviews-title'>
            <span className='span-reviews'>REVIEWS</span>
            <span className='span-reviews-fore'>What Our Clients Say</span>
          </div>

          <div className='reviews-content'>
            {/* <div className='rv-content-container'> */}
              {/* <div className='left-btn'>
                <button>l</button>
              </div>
              <div className='center-content'>
                <div className='person-say'>
                  <h4>“</h4>
                  <h5>The support was nothing less than amazing.</h5>
                  <p>"With close to 3,000 participants who we communicate with and receive payment from we needed to make sure we had a company that had understood our needs - we found this with EZ Active. They took time to look over our requirements and built and have maintained a viable platform. We would have no hesitation recommending EZ Active as they have produced the perfect platform for our requirements and answer questions and adapt to our needs in a highly professional manner. We will not be using anyone else in the future."</p>
                  <h5 className='per-name'>Paul Smith</h5>
                  <p className='per-profile'>Chairman, HongKong Junior Football League</p>
                </div>
                <div className="list-person">
                  <div className='person-item per-active' onClick={()=>setPer("1")}>
                    <img className={`${per === "1" ? "per-active" : ""}`} src={profile1} alt='' />
                  </div>
                  <div className='person-item' onClick={()=>setPer("2")}>
                    <img className={`${per === "2" ? "per-active" : ""}`} src={profile2} alt='' />
                  </div>
                  <div className='person-item' onClick={()=>setPer("3")}>
                    <img className={`${per === "3" ? "per-active" : ""}`} src={profile3} alt='' />
                  </div>
                  <div className='person-item' onClick={()=>setPer("4")}>
                    <img className={`${per === "4" ? "per-active" : ""}`} src={profile4} alt='' />
                  </div>
                  <div className='person-item' onClick={()=>setPer("5")}>
                    <img className={`${per === "5" ? "per-active" : ""}`} src={profile5} alt='' />
                  </div>
                </div>
              </div>
              <div className='right-btn'>
                <button>l</button>
              </div> */}
            {/* </div> */}
              <MySlider />
          </div>
        </section>

        
      </main>
    </div>
  );
}

export default App;
