import React, { useState, useEffect } from 'react';

const PageProgress = ({ color, height }) => {
  const [width, setWidth] = useState(null);

  const watchScrolling = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    const winScroll = document.body.scrollTop || scrollTop;
    const winHeight = scrollHeight - clientHeight;
    const scrolled = `${(winScroll / winHeight) * 100}%`;
    if (winHeight > 0) {
      return setWidth(scrolled);
    } else {
      return setWidth(0);
    }
  };

  useEffect(
    () => {
      window.addEventListener('scroll', watchScrolling);
      return () => {
        window.removeEventListener('scroll', watchScrolling);
      };
    },
    [color, height]
  );

  const styles = {
    progress: {
      marginTop: 0,
      padding: 0,
      background: color || 'skyblue',
      position: 'fixed',
      height: height || 4,
      width,
      top: 86,
      bottom: -1,
      zIndex: 99,
      transition: 'width 200ms ease-out',
    },
  };

  return <div style={styles.progress} />;
};

export default PageProgress;
