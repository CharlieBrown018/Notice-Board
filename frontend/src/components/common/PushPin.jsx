import { useMemo } from 'react';

const PushPin = () => {
  // Slight random offsets and rotation for realism
  const offsetX = useMemo(() => (Math.random() * 8 - 3).toFixed(2), []);
  const offsetY = useMemo(() => (Math.random() * 8 - 3).toFixed(2), []);
  const rotation = useMemo(() => (Math.random() * 12 - 5).toFixed(2), []);

  return (
    <div
      className="absolute -top-3 left-1/2 w-6 h-6 z-20"
      style={{
        transform: `translate(-50%, ${offsetY}px) rotate(${rotation}deg) translateX(${offsetX}px)`,
      }}
    >
      <div className="w-full h-full rounded-full bg-red-600 shadow-lg
                      ring-4 ring-red-700/20 transform hover:scale-110
                      transition-all duration-300 cursor-pointer">
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-red-400 to-transparent" />
        <div className="absolute inset-0 rounded-full shadow-inner" />
      </div>
    </div>
  );
};

export default PushPin;