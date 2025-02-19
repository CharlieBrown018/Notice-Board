import { useMemo } from 'react';

const StatusBadge = ({ status }) => {
  // Generate slight randomness for rotation & skew
  const rotation = useMemo(() => (Math.random() * 16 - 8).toFixed(2), []);
  const skewX = useMemo(() => (Math.random() * 8 - 4).toFixed(2), []);

  const getStatusStyles = () => {
    switch (status) {
      case 'TODO':
        return 'bg-[var(--color-todo)] text-white ring-[var(--color-todo)]/40';
      case 'IN_PROGRESS':
        return 'bg-[var(--color-progress)] text-white ring-[var(--color-progress)]/40';
      case 'DONE':
        return 'bg-[var(--color-done)] text-white ring-[var(--color-done)]/40';
      default:
        return 'bg-[var(--color-ink)]/60 text-white ring-[var(--color-ink)]/40';
    }
  };

  return (
    <span
      className={`
        inline-block text-lg font-bold uppercase tracking-wide
        px-6 py-2 rounded-full shadow-md ring-4 border-2 border-white
        ${getStatusStyles()}
      `}
      style={{
        transform: `rotate(${rotation}deg) skewX(${skewX}deg)`,
      }}
    >
      {status.replace('_', ' ')}
    </span>
  );
};

export default StatusBadge;
