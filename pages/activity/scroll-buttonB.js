import React, { useRef } from 'react';

const ScrollButtonB = () => {
  const topRef = useRef(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div ref={topRef}></div> {/* 放置在頁面頂部的參考元素 */}
      <div style={{ height: "1000px" }}>highhhhhhh</div>
      <button onClick={scrollToTop}>
        Scroll to Top
      </button>
      {/* 其他頁面內容 */}
    </div>
  );
};

export default ScrollButtonB;
