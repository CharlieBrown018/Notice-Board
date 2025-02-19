const BulletinBoard = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* Cork Background */}
      <div
        className="min-h-screen p-8 relative"
        style={{
          backgroundImage: "url('/assets/textures/cork-texture.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      >
        {/* Overlay Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div className="max-w-5xl mx-auto relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BulletinBoard;