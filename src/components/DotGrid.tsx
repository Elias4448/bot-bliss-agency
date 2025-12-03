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
      style={{ zIndex: 0 }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(220 13% 13% / 0.18) 1px, transparent 1px)`,
          backgroundSize: '14px 14px',
          opacity: 0.8,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(220 13% 13% / 0.45) 1px, transparent 1px)`,
          backgroundSize: '14px 14px',
          maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />
    </div>
  );
};
