import React from "react";
import "./testmonials.scss";

export default function Testmonials() {
  const data = [
    {
      id: 1,
      name: "Friend 1",
      title: "Friend1 title",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
    {
      id: 2,
      name: "Friend 2",
      title: "title of friend 2",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
      featured: true,
    },
    {
      id: 3,
      name: "friend 3",
      title: "title of friend 3",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testmonials" id="testmonials">
      <h1>Testmonials</h1>
      <div className="container">
        {data.map((p) => (
          <div className={p.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="left" src="assets/right-arrow.png" alt="" />
              <img className="user" src={p.img} alt="" />
              <img className="right" src={p.icon} alt="" />
            </div>
            <div className="center">{p.desc}</div>
            <div className="bottom">
              <h3>{p.name} </h3>
              <h4>{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
