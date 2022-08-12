import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Umbrella app",
      desc: "Applcation for people who like to go traveling, whether in pairs, groups or for party goers who need a more reliable method other than using group chats in keeping track of friends",
      img: "./assets/umbrella.png",
      link: "https://umbrellabby15.web.app/",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Extremis app",
      desc: "Application helps people keep track of extreme weather conditions to protect themselves and their properties following real-time weather conditions updated by users on the timeline",
      img: "./assets/extremis.png",
      link: "https://extremis-bby15.herokuapp.com/",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "On the Road blog",
      desc: "The blog provides information about the best hikes in British Columbia and some places in Canada.Its mission is to highlight local trails, educate and inspire local hikers, and get people outside.",
      img: "./assets/ontheroad.png",
      link: "https://ontheroadtocanada.vercel.app/",
    },
    {
      id: "4",
      icon: "./assets/mobile.png",
      title: "Quizz Game - Hackathon",
      desc: "Application is a mobile-first quiz game aimed towards computer science students to help study for exams.",
      img: "./assets/debugrun.png",
      link: "https://debug-run.herokuapp.com/",
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
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link}>
                    <span>Projects</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="This is the link to my website" />
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
        onClick={() => handleClick()}
      />
    </div>
  );
}
