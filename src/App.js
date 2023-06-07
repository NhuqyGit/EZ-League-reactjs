import './App.scss';
import logo from "./image/Asset_2-removebg-preview 1.png";
import headerBg from "./image/Rectangle-2421.png";
import phoneAd from "./image/Group-1219.png";
import hkfa from "./image/HKFA.png";
import hkfc from "./image/HKFC.png";
import hkjfl from "./image/HKJFL.png";
import j7s from "./image/J7S.png";
import sgb from "./image/SGB.png";
import vf from "./image/VF.png";
import image1 from "./image/image-12-1.png";

function App() {
  const sponsors = [hkfa, hkfc, hkjfl, sgb, vf, j7s].map((sp)=>{
    return <img src={sp} alt="" />
  });

  const listFunc = [{
    img: image1,
    title: "Livestream",
    content: "Ez league allows to create online videos, follow tournament information."
  },
  {
    img: image1,
    title: "Livestream",
    content: "Ez league allows to create online videos, follow tournament information."
  },
  {
    img: image1,
    title: "Livestream",
    content: "Ez league allows to create online videos, follow tournament information."
  },
  {
    img: image1,
    title: "Livestream",
    content: "Ez league allows to create online videos, follow tournament information."
  },
  {
    img: image1,
    title: "Livestream",
    content: "Ez league allows to create online videos, follow tournament information."
  },
  {
    img: image1,
    title: "Livestream",
    content: "Ez league allows to create online videos, follow tournament information."
  }];

  const funcComponents = listFunc.map((func)=>{
    return (
      <div className="func">
        <div className="img-container">
          <img src={func.img} alt="" />

        </div>
        <span>{func.title}</span>
        <p>{func.content}</p>
        <button>Learn more</button>
      </div>
    )
  });

  return (
    <div className="App">
      <header className="header-container" style={{backgroundImage: `url(${headerBg})`}}>
        <section className="header-head">
          <div className="logo">
            <img src={logo} alt=''></img>
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
            <img src={phoneAd} alt=''></img>
          </div>
        </section>
      </header>

      <main className="main-container">
        <div className="sponsors">
          <span>Who Keep Trust on Us</span>
          <div className="sponsors-logo">
            {sponsors}
          </div>
        </div>

        <div className="main-heading">
          <span className='span-fore'>categories</span>
          <span className='span-back'>EZ League - Our best framework</span>
          <p>The EZ League app is the team management app exclusively used by the HKJFL (Hong Kong Junior Football League) and the HKFC (Hong Kong Football Club). We are constantly adding new features and improvements to the app based on the experiences and feedback of the over 10,000 users between those two leagues. </p>
        </div>

        <div className="main-content">
          {funcComponents}
        </div>
      </main>
    </div>
  );
}

export default App;
