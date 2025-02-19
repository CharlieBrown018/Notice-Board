const PaperEffect = ({ children, className = '', type = 'ticket', hoverable = true }) => {
  const baseClasses = "bg-[--color-paper] relative transition-all duration-200";

  const paperClasses = {
    ticket: `
      paper-texture rounded-lg shadow-[--shadow-ticket]
      before:ticket-edge before:content-[''] before:h-1 before:w-full
      before:absolute before:top-0 border-2 border-[--color-ink]/10
      ${hoverable ? 'hover:shadow-[--shadow-raised] hover:-translate-y-0.5' : ''}
    `,
    note: `
      paper-texture rounded-lg shadow-[--shadow-raised]
      rotate-[1deg] border-2 border-[--color-ink]/10
      ${hoverable ? 'hover:rotate-0 hover:scale-[1.02]' : ''}
    `,
    card: `
      paper-texture rounded-lg shadow-[--shadow-ticket]
      border-2 border-[--color-ink]/10
      ${hoverable ? 'hover:shadow-[--shadow-raised] hover:-translate-y-1' : ''}
    `
  };

  return (
    <div className={`${baseClasses} ${paperClasses[type]} ${className}`}>
      {/* Corner Fold Effect */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-black/5 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};

export default PaperEffect;