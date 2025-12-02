import { useEffect, useState } from 'react';

export const DotGrid = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(220 13% 13% / 0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: '20px 20px',
          opacity: 0.6,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(220 13% 13% / 0.25) 1.5px, transparent 1.5px)`,
          backgroundSize: '20px 20px',
          maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />
    </div>
  );
};
