import React, { useEffect, useRef, useState } from 'react';

const ThirdSection = () => {
  const sectionRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      },
      { threshold: 0, rootMargin: '0px 0px -100% 0px' } // Trigger when the top reaches the viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <h1 className="text-center py-10">Scroll Down</h1>

      {/* Third Section */}
      <div
        ref={sectionRef}
        className={`${
          isFixed ? 'fixed top-0 left-0 w-full bg-gray-800 text-white' : ''
        } transition-all`}
        style={{ height: '100vh' , backgroundColor:"black"}}
      >
        <h2 className="text-center py-20 grid place-items-center">I am the Third Section</h2>
      </div>

      {/* Placeholder content */}
      <div style={{ height: '200vh' }}></div>
    </div>
  );
};

export default ThirdSection;
