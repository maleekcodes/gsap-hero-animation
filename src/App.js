import React, {useRef, useEffect} from 'react';
import { TweenMax,Power3,TimelineLite } from "gsap";
import arrow from "./images/arrow-right.svg";
import imgBoy from "./images/boy.webp";
import imgGirl from "./images/girl.webp";
import './App.scss';

function App() {

  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  useEffect(() => {
    // IMAGES VARS
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    // CONTENT VARS
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];


    let tl = new TimelineLite({delay: .8});

    TweenMax.to(app, 0, {css: {visibility: "visible"}})

    // Images animation
    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
      .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
      .from(boyImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
      .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    

      // Content Aimation
      tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1,{
        y:44,
        ease: Power3.easeOut,
        delay: .8
      }, .15, 'Start')
      .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
      .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
  })

  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviours.</div>
                </div>
              </h1>
              <p>
                Better treat serious cardiometabolic diseases to transform lives and reduce healthcare 
                utilization through the use of digital therapeutics
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore 
                  <div className="arrow-icon">
                    <img src={arrow} alt="Arrow" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => images = el}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="Girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="Boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
