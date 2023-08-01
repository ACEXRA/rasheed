import React from "react";
import anime from "animejs";

const Droplets = () => {
  return <DotGrid />;
};

const Grid_w = 25;
const Grid_h = 20;
const DotGrid = () => {
  const handleCLick = (e) => {
    anime({
      targets: ".dot",

      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [Grid_w, Grid_h],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;
  for (let i = 0; i < Grid_w; i++) {
    for (let j = 0; j < Grid_h; j++) {
      dots.push(
        <div
          className="dots"
          data-index={index}
          key={`${i}-${j}`}
          onClick={handleCLick}
        >
          <div className="dot" data-index={index}></div>
        </div>
      );
      index++;
    }
  }
  return <div className="dotGrid">{dots}</div>;
};
export default Droplets;
