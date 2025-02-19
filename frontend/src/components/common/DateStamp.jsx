import { format } from 'date-fns';
import { useMemo } from 'react';

const DateStamp = ({ date, className = '', label }) => {
  // Slight random rotation for a more authentic look
  const rotation = useMemo(() => (Math.random() * 6 - 3).toFixed(2), []);

  return (
    <div
      className={`
        inline-block text-[--color-ink]/50 select-none
        border-2 border-[--color-ink]/50 rounded-md
        px-3 py-1 text-sm font-[--font-ticket] shadow-[2px_2px_0px_rgba(0,0,0,0.1)]
        before:content-[''] before:absolute before:inset-0 before:bg-[url('/assets/textures/grain.png')] before:opacity-10
        ${className}
      `}
      style={{ transform: `rotate(${rotation}deg)`, backgroundBlendMode: 'multiply' }}
    >
      {label && <span className="font-medium mr-1">{label}:</span>}
      {format(new Date(date), 'MMM dd, yyyy')}
    </div>
  );
};

export default DateStamp;