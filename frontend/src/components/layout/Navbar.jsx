import { Link, useLocation } from 'react-router-dom';
import PaperEffect from '../common/PaperEffect';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="relative z-50">
      {/* Vintage Wood Header Bar */}
      <div className="bg-gradient-to-b from-[#8B4513] to-[#654321] h-16 border-b-4 border-[#483C32] shadow-xl">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-full">
            {/* Embossed Logo (Moved Down) */}
            <div className="relative">
              <h1 className="relative top-3 font-[--font-heading] text-3xl">
                <span className="text-[#FFE4B5] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
                  Notice Board
                </span>
              </h1>
            </div>

            {/* Tabbed Navigation */}
            <div className="flex gap-1 -mb-4 translate-y-2">
              {['Home', 'Tasks'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                const isActive = location.pathname === path;

                return (
                  <Link
                    key={item}
                    to={path}
                    className={`
                      relative px-8 py-3 group
                      transition-all duration-300
                      ${isActive ? 'translate-y-1' : 'hover:translate-y-1'}
                    `}
                  >
                    {/* Tab Background with Fold Effect */}
                    <div className={`
                      absolute inset-0 paper-texture rounded-t-lg
                      transform-origin-bottom transition-transform
                      ${isActive
                        ? 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]'
                        : 'shadow-[0_-2px_4px_rgba(0,0,0,0.1)]'}
                      border-t-2 border-x-2 border-[--color-ink]/20
                      before:absolute before:top-0 before:left-1 before:right-1
                      before:h-1 before:bg-white/40
                    `}>
                      {/* Decorative Corner Folds */}
                      <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-bl from-black/10 to-transparent" />
                      <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-black/10 to-transparent" />
                    </div>

                    <span className={`
                      relative z-10 font-[--font-ticket]
                      ${isActive
                        ? 'text-[--color-ink]'
                        : 'text-[--color-ink]/70'}
                    `}>
                      {item}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;