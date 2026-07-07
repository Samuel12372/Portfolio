import { useEffect, useState } from "react";

const GlowingCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px) and (pointer: fine)');

    const updateDesktopState = () => {
      setIsDesktop(mediaQuery.matches);
    };

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    updateDesktopState();

    const handleScreenSize = () => {
      updateDesktopState();

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

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
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
