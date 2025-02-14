import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import "../styles/Lovemessage.css";
import loveReasons from "./loveReasons";

const Lovemessage = () => {
  const [hearts, setHearts] = useState([]);

const handleClick = (e) => {
  const heartSize = 200; // Keep heart size as 200px
  const halfHeartSize = heartSize / 2; // 100px

  const x = e.clientX - halfHeartSize;
  const y = e.clientY - halfHeartSize;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const finalX = Math.random() * screenWidth;
  const finalY = Math.random() * screenHeight;

  const newHeart = {
    id: Date.now(),
    startX: x,
    startY: y,
    endX: finalX,
    endY: finalY,
    text: loveReasons[Math.floor(Math.random() * loveReasons.length)],
    scale: Math.random() * 0.5 + 1.5,
    duration: Math.random() * 3 + 4, // 4s to 7s
  };

  setHearts((prev) => [...prev, newHeart]);

  setTimeout(() => {
    setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
  }, newHeart.duration * 1000);
};


  return (
    <div className="lovemessage-container" onClick={handleClick}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-wrapper"
          style={{
            left: `${heart.startX}px`,
            top: `${heart.startY}px`,
            "--endX": `${heart.endX}px`,
            "--endY": `${heart.endY}px`,
            "--scale": heart.scale,
            "--duration": `${heart.duration}s`,
          }}
        >
          <CiHeart className="heart-icon" />
          <span className="heart-text">{heart.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Lovemessage;
