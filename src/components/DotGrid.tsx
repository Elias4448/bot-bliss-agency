import { useEffect, useRef, useState } from 'react';

export const DotGrid = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-5 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(220 13% 13% / 0.15) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        maskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0.4), rgba(0,0,0,0.05))`,
        WebkitMaskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0.4), rgba(0,0,0,0.05))`,
      }}
    />
  );
};
