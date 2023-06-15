'use client';

import { useState, useEffect } from "react";

const useScroll = () => {
    
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScrolling = () => {
      const y = window.scrollY;
      setScrollValue(y);
    };

    handleScrolling();

    window.addEventListener("scroll", handleScrolling);

    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  });

  return scrollValue;
};


export default useScroll;