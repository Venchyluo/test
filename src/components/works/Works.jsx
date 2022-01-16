import React, { useState } from "react";
import "./works.scss";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      desc: "Her name is Nono.",
      img: "assets/dog1.jpeg",
    },
    {
      id: "2",
      desc: "She like Chicken and beef.",
      img: "assets/dog2.jpeg",
    },
    {
      id: "3",
      desc: "She is Punky.",
      img: "assets/cat1.jpeg",
    },
    {
      id: "4",
      desc: "She is only 4-month.",
      img: "assets/cat2.jpeg",
    },
    {
      id: "5",
      desc: "And she does not like dog.",
      img: "assets/cat3.jpeg",
    },
    {
      id: "6",
      desc: "Well, she is expert of clicking DELETE.",
      img: "assets/cat4.jpeg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  {/* <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div> */}
                  {/* <h2>{d.title}</h2> */}
                  <p className="ß">{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
