export const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large blob top right */}
      <div 
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-60 animate-blob-1"
        style={{
          background: 'radial-gradient(circle, hsl(250 95% 63% / 0.3) 0%, hsl(280 85% 70% / 0.2) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Medium blob center */}
      <div 
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full opacity-50 animate-blob-2"
        style={{
          background: 'radial-gradient(circle, hsl(200 95% 60% / 0.3) 0%, hsl(250 95% 63% / 0.2) 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Small blob bottom left */}
      <div 
        className="absolute -bottom-20 left-10 w-[400px] h-[400px] rounded-full opacity-40 animate-blob-3"
        style={{
          background: 'radial-gradient(circle, hsl(280 85% 70% / 0.3) 0%, hsl(200 95% 60% / 0.2) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      
      {/* Extra blob right center */}
      <div 
        className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full opacity-50 animate-blob-4"
        style={{
          background: 'radial-gradient(circle, hsl(200 95% 60% / 0.25) 0%, hsl(280 85% 70% / 0.15) 50%, transparent 70%)',
          filter: 'blur(110px)',
        }}
      />
    </div>
  );
};
