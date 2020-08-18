import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import pokemons from '../images/pokemony.png';
import budget from '../images/budget.png';
import sketchbook from '../images/szkicownik.png';
import alarm from '../images/alarm.png';
import programming from '../images/programming.jpg';
import html5 from '../images/icons/html.png';
import js from '../images/icons/javascript.png';
import css from '../images/icons/css.png';
import canvas from '../images/icons/canvas.png';
import bootstrap from '../images/icons/bootstrap.png';
import node from '../images/icons/nodejs.png';
import npm from '../images/icons/npm.png';
import react from '../images/icons/react.png';
import sass from '../images/icons/sass.png';
import webpack from '../images/icons/webpack.png';
import mysql from '../images/icons/mysql.png';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import '../styles/SkillsPage.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SkillsPage = () => {
  return (
    <>
      <h1 className="skills-title">Projects</h1>
      <Swiper
        spaceBetween={150}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="slide-wrapper">
            <h1 className="slide-title">Pokemons Catalog</h1>
            <img src={pokemons} alt="pokemons" className="img-skills" />
            <p className="slide-desc">
              Project with your favorite Pokemon! Just use the button and you'll
              get new pokemon. You can also use search to find your pokemon
              amongst so far downloaded.
            </p>
            <div className="img-wrapper">
              <img src={html5} alt="html" className="img-icons" />
              <img src={js} alt="js" className="img-icons" />
              <img src={css} alt="css" className="img-icons" />
            </div>
            <div className="buttom-wrapper">
              <button className="button-live">
                <a href="https://skorzyk.github.io/Pokemon-catalog/">Live</a>
              </button>
              <button className="button-code">
                <a href="https://github.com/skorzyk/Pokemon-catalog">Code</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <h1 className="slide-title">Budget App</h1>
            <img src={budget} alt="budget" className="img-skills" />
            <p className="slide-desc">
              Budget application. You can add your incomes and expenses, in case
              of a mistake, edit the funds already added. Are you also waiting
              for your payment day?
            </p>
            <div className="img-wrapper">
              <img src={html5} alt="html" className="img-icons" />
              <img src={js} alt="js" className="img-icons" />
              <img src={css} alt="css" className="img-icons" />
            </div>
            <div className="buttom-wrapper">
              <button className="button-live">
                <a href="https://skorzyk.github.io/Budget-app/">Live</a>
              </button>
              <button className="button-code">
                <a href="https://github.com/skorzyk/Budget-app">Code</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <h1 className="slide-title">Sketchbook</h1>
            <img src={sketchbook} alt="sketchbook" className="img-skills" />
            <p className="slide-desc">
              A sketchbook created thanks to the p5.js library. Of course, it's
              not as great an app as Paint, but still it does provide a moment
              of fun.
            </p>
            <div className="img-wrapper">
              <img src={html5} alt="html" className="img-icons" />
              <img src={js} alt="js" className="img-icons" />
              <img src={css} alt="css" className="img-icons" />
              <img
                src={canvas}
                alt="html"
                className="img-icons img-icons--canvas"
              />
            </div>
            <div className="buttom-wrapper">
              <button className="button-live">
                <a href="https://skorzyk.github.io/Sketchbook-Canvas/">Live</a>
              </button>
              <button className="button-code">
                <a href="https://github.com/skorzyk/Sketchbook-Canvas">Code</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <h1 className="slide-title">Timer-Alarm</h1>
            <img src={alarm} alt="alarm" className="img-skills" />
            <p className="slide-desc">
              Timer with alarm clock setting. Now you can always put the
              potatoes on the gas or count down to an important meeting. With
              this app you won't miss anything anymore.
            </p>
            <div className="img-wrapper">
              <img src={html5} alt="html" className="img-icons" />
              <img src={js} alt="js" className="img-icons" />
              <img src={css} alt="css" className="img-icons" />
            </div>
            <div className="buttom-wrapper">
              <button className="button-live">
                <a href="https://skorzyk.github.io/Timer-Alarm/">Live</a>
              </button>
              <button className="button-code">
                <a href="https://github.com/skorzyk/Timer-Alarm">Code</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <h1 className="slide-title">And more...</h1>
            <img
              src={programming}
              alt="alarm"
              className="img-skills img-skills--last"
            />
            <p className="slide-desc">
              On my github account you will find other projects that I do. I use
              technologies such as:
            </p>
            <div className="img-wrapper img-wrapper--last">
              <img
                src={html5}
                alt="html"
                className="img-icons img-icons-last"
              />
              <img src={js} alt="js" className="img-icons img-icons-last" />
              <img src={css} alt="css" className="img-icons img-icons-last" />
              <img src={sass} alt="sass" className="img-icons img-icons-last" />
              <img
                src={react}
                alt="react"
                className="img-icons img-icons-last"
              />
              <img src={node} alt="node" className="img-icons img-icons-last" />

              <img src={npm} alt="npm" className="img-icons img-icons-last" />
              <img
                src={mysql}
                alt="mysql"
                className="img-icons img-icons-last"
              />
              <img
                src={bootstrap}
                alt="bootstrap"
                className="img-icons img-icons-last"
              />
              <img
                src={webpack}
                alt="webpack"
                className="img-icons img-icons-last"
              />
            </div>
            <div className="buttom-wrapper">
              <button className="button-code">
                <a href="https://github.com/skorzyk">Code</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SkillsPage;
