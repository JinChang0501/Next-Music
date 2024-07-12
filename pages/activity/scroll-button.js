import React from 'react';

const ScrollButton = () => {
  const scrollToTop = () => {
    console.log("Button clicked, scrolling to top");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div style={{ height: "1000px" }}>highhhhhhh</div>
      <button onClick={scrollToTop}>
        Scroll to Top
      </button>
    </>
  );
};

export default ScrollButton;
