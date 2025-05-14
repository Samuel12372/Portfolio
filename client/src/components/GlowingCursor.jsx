import { useEffect, useState } from "react";

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
      <div
        className="absolute bg-gray-500 rounded-full opacity-15 blur-[100px] transition-transform duration-50"
        style={{
          width: "400px",
          height: "400px",
          transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
        }}
      />
    </div>
  );
};

export default GlowingCursor;
