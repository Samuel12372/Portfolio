import { useEffect, useState } from "react";

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Only add mouse listener on large screens
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    
    const handleScreenSize = () => {
      if (mediaQuery.matches) {
        window.addEventListener("mousemove", updatePosition);
      } else {
        window.removeEventListener("mousemove", updatePosition);
      }
    };

    handleScreenSize();
    mediaQuery.addEventListener('change', handleScreenSize);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      mediaQuery.removeEventListener('change', handleScreenSize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
      <div
        className="absolute bg-gray-200 rounded-full opacity-20 blur-[100px] transition-transform duration-50 lg:hidden"
        style={{
          width: "500px",
          height: "500px",
          left: "50%",
          top: "65%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute bg-gray-200 rounded-full opacity-20 blur-[100px] transition-transform duration-50 hidden lg:block"
        style={{
          width: "500px",
          height: "500px",
          transform: `translate(${position.x - 250}px, ${position.y - 250}px)`,
        }}
      />
    </div>
  );
};

export default GlowingCursor;
