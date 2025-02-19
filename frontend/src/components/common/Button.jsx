const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseClasses = "relative font-[--font-ticket] rounded-lg transition-all duration-200";

  const variants = {
    primary: `
      bg-[--color-ink] text-[--color-paper] shadow-[--shadow-ticket]
      hover:shadow-[--shadow-raised] hover:-translate-y-0.5
      active:shadow-[--shadow-ticket] active:translate-y-0
      border-2 border-[--color-ink] px-5 py-2
    `,
    secondary: `
      bg-[--color-paper] text-[--color-ink] shadow-[--shadow-ticket]
      hover:shadow-[--shadow-raised] hover:-translate-y-0.5
      active:shadow-[--shadow-ticket] active:translate-y-0
      border-2 border-[--color-ink]/20 px-5 py-2
    `,
    ticket: `
      paper-texture shadow-[--shadow-ticket] px-4 py-2
      hover:shadow-[--shadow-raised] hover:-translate-y-0.5
      active:shadow-[--shadow-ticket] active:translate-y-0
      border-2 border-[--color-ink]/10
    `
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity rounded-lg" />
    </button>
  );
};

export default Button;