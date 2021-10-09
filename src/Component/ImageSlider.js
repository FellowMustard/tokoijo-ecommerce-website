import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import { Slider } from "../Data/Slider";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { withRouter } from "react-router";

function ImageSlider() {
  const [empArr, setEmpArr] = useState(["a", "b", "c", "d", "e"]);
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [bannerData, setBannerData] = useState(Slider);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 8000);

    return () => clearInterval(slider);
  }, [index]);
  useEffect(() => {
    const lastIndex = bannerData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, bannerData]);

  const handleArrowButton = (amount) => {
    if (!clicked) {
      setClicked(true);
      setIndex(index + amount);
      setTimeout(() => {
        setClicked(false);
      }, 800);
    }
  };
  return (
    <>
      <section className="slider-container">
        <button className="arrow-left" onClick={() => handleArrowButton(-1)}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button className="arrow-right" onClick={() => handleArrowButton(1)}>
          <MdOutlineKeyboardArrowRight />
        </button>
        {bannerData.map((banner, bannerIndex) => {
          const { id, img } = banner;
          let position = "slide next-slide";
          if (bannerIndex === index) {
            position = "slide current-slide";
          }
          if (
            bannerIndex === index - 1 ||
            (index === 0 && bannerIndex === bannerData.length - 1)
          ) {
            position = "slide last-slide";
          }
          return (
            <article className={position} key={id}>
              <img src={img} className="slide-image"></img>
            </article>
          );
        })}
        <div className="bullet-container">
          {empArr.map((empty, emIndex) => {
            let currentClass = `bullet ${emIndex === index ? `active` : ``}`;
            return <p className={currentClass} key={emIndex}></p>;
          })}
        </div>
      </section>
    </>
  );
}

export default ImageSlider;
