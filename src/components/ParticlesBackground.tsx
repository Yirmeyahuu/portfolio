import { useState, useEffect, useCallback } from "react";

interface Position {
  x: number;
  y: number;
}

const ParticlesBackground = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isMouseInside) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      }
    },
    [isMouseInside]
  );

  const handleMouseEnter = useCallback(() => {
    setIsMouseInside(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseInside(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const getCircleStyle = (index: number) => {
    if (!isMouseInside) return {};

    const baseScale = isMouseInside ? 1.05 : 1;
    const speed = [0.08, -0.06, 0.04, -0.08, 0.06][index - 1] || 0.05;
    const mouseOffsetX = mousePosition.x * speed;
    const mouseOffsetY = mousePosition.y * speed;

    return {
      transform: `translate(${mouseOffsetX}px, ${mouseOffsetY}px) scale(${baseScale})`,
      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  return (
    <div
      className="absolute inset-0 h-screen bg-[#131313] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className={`circle-blur circle${index}`}
          style={getCircleStyle(index)}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;