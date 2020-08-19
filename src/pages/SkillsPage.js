import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import pokemonsSmall from '../images/pokemony_360x176.jpg';
import pokemonsMedium from '../images/pokemony_860x421.jpg';
import pokemonsBig from '../images/pokemony_1200x588.jpg';
import budgetSmall from '../images/budget_360x174.jpg';
import budgetMedium from '../images/budget_860x417.jpg';
import budgetBig from '../images/budget_1200x583.jpg';
import sketchbookSmall from '../images/szkicownik_360x173.jpg';
import sketchbookMedium from '../images/szkicownik_860x417.jpg';
import sketchbookBig from '../images/szkicownik_1200x588.jpg';
import alarmSmall from '../images/alarm_360x173.jpg';
import alarmMedium from '../images/alarm_860x414.jpg';
import alarmBig from '../images/alarm_1200x578.jpg';
import programmingSmall from '../images/programming_360x279.jpg';
import programmingMedium from '../images/programming_860x573.jpg';
import programmingBig from '../images/programming_1200x800.jpg';
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
      <h1 className="skills-title">Skills</h1>
      <Swiper
        spaceBetween={150}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="slide-wrapper">
            <h2 className="slide-title">Pokemons Catalog</h2>
            <img
              srcSet={`${pokemonsSmall} 360w, ${pokemonsMedium} 860w, ${pokemonsBig} 1200w`}
              src={pokemonsBig}
              alt="pokemons image"
              className="img-skills"
              width="980"
              height="480"
            />
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
              <a
                target={`_blank`}
                href="https://skorzyk.github.io/Pokemon-catalog/"
                className="button-live"
              >
                Live
              </a>

              <a
                target={`_blank`}
                href="https://github.com/skorzyk/Pokemon-catalog"
                className="button-code"
              >
                Code
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <h2 className="slide-title">Budget App</h2>
            <img
              srcSet={`${budgetSmall} 360w, ${budgetMedium} 860w, ${budgetBig} 1200w`}
              src={budgetBig}
              alt="budget app image"
              className="img-skills"
              width="980"
              height="480"
            />
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
              <a
                target={`_blank`}
                href="https://skorzyk.github.io/Budget-app/"
                className="button-live"
              >
                Live
              </a>

              <a
                target={`_blank`}
                href="https://github.com/skorzyk/Budget-app"
                className="button-code"
              >
                Code
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <h2 className="slide-title">Sketchbook</h2>
            <img
              srcSet={`${sketchbookSmall} 360w, ${sketchbookMedium} 860w, ${sketchbookBig} 1200w`}
              src={sketchbookBig}
              alt="sketchbook app image"
              className="img-skills"
              width="980"
              height="480"
            />
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
              <a
                target={`_blank`}
                href="https://skorzyk.github.io/Sketchbook-Canvas/"
                className="button-live"
              >
                Live
              </a>

              <a
                target={`_blank`}
                href="https://github.com/skorzyk/Sketchbook-Canvas"
                className="button-code"
              >
                Code
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <h2 className="slide-title">Timer-Alarm</h2>
            <img
              srcSet={`${alarmSmall} 360w, ${alarmMedium} 860w, ${alarmBig} 1200w`}
              src={alarmBig}
              alt="alarm app image"
              className="img-skills"
              width="980"
              height="480"
            />
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
              <a
                target={`_blank`}
                href="https://skorzyk.github.io/Timer-Alarm/"
                className="button-live"
              >
                Live
              </a>

              <a
                target={`_blank`}
                href="https://github.com/skorzyk/Timer-Alarm"
                className="button-code"
              >
                Code
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <h2 className="slide-title">And more...</h2>
            <img
              srcSet={`${programmingSmall} 360w, ${programmingMedium} 860w, ${programmingBig} 1200w`}
              src={programmingBig}
              alt="other projects image"
              className="img-skills img-skills--last"
              width="980"
              height="480"
            />
            <p className="slide-desc">
              On my github account you will find other projects that I do. I use
              technologies such as:
            </p>
            <div className="img-wrapper img-wrapper--last">
              <img
                src={html5}
                alt="html5 icon"
                className="img-icons img-icons-last"
              />
              <img src={js} alt="js" className="img-icons img-icons-last" />
              <img src={css} alt="css" className="img-icons img-icons-last" />
              <img src={sass} alt="sass" className="img-icons img-icons-last" />
              <img
                src={react}
                alt="react icon"
                className="img-icons img-icons-last"
              />
              <img
                src={node}
                alt="node icon"
                className="img-icons img-icons-last"
              />

              <img
                src={npm}
                alt="npm icon"
                className="img-icons img-icons-last"
              />
              <img
                src={mysql}
                alt="mysql icon"
                className="img-icons img-icons-last"
              />
              <img
                src={bootstrap}
                alt="bootstrap icon"
                className="img-icons img-icons-last"
              />
              <img
                src={webpack}
                alt="webpack icon"
                className="img-icons img-icons-last"
              />
            </div>
            <div className="buttom-wrapper">
              <a
                target={`_blank`}
                href="https://github.com/skorzyk"
                className="button-code"
              >
                Code
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SkillsPage;
