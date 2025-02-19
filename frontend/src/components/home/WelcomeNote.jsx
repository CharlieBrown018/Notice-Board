import PaperEffect from '../common/PaperEffect';

const WelcomeNote = () => {
  return (
    <div className="relative max-w-4xl mx-auto pt-16">
      {/* Enhanced Pushpins */}
      <div className="absolute top-12 -left-4 w-8 h-8 z-20">
        <div className="w-full h-full rounded-full bg-red-600 shadow-lg
                      ring-4 ring-red-700/20 transform hover:scale-110
                      transition-all duration-300 cursor-pointer">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-red-400 to-transparent" />
          <div className="absolute inset-0 rounded-full shadow-inner" />
        </div>
      </div>
      <div className="absolute top-14 -right-2 w-8 h-8 z-20">
        <div className="w-full h-full rounded-full bg-blue-600 shadow-lg
                      ring-4 ring-blue-700/20 transform hover:scale-110
                      transition-all duration-300 cursor-pointer">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400 to-transparent" />
          <div className="absolute inset-0 rounded-full shadow-inner" />
        </div>
      </div>

      {/* Main Note with PaperEffect */}
      <PaperEffect type="card">
        <div className="p-12 relative">
          <h1 className="text-center mb-8">
            <span className="font-[--font-heading] text-5xl text-[--color-ink] block mb-4">
              Welcome to Notice Board
            </span>
            <span className="font-[--font-ticket] text-[--color-ink]/60 text-lg">
              A vintage-inspired task management system
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="relative h-px bg-[--color-ink]/20 my-8">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[--color-paper]">
              ✦
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-3 gap-12 mt-12">
            {[
              { title: 'Create', icon: '✎', desc: 'Add new tasks', color: 'amber' },
              { title: 'Track', icon: '◎', desc: 'Monitor progress', color: 'blue' },
              { title: 'Complete', icon: '✓', desc: 'Achieve goals', color: 'green' }
            ].map(({ title, icon, desc, color }) => (
              <div key={title}
                   className="group relative transform transition-all duration-300 hover:-translate-y-2">
                <div className={`
                  paper-texture p-6 rounded-lg text-center
                  shadow-md hover:shadow-lg transition-shadow
                  border border-[--color-ink]/10
                `}>
                  <div className={`
                    text-3xl mb-4 transition-transform duration-300
                    group-hover:scale-110 group-hover:rotate-12
                  `}>
                    {icon}
                  </div>
                  <h3 className="font-[--font-heading] text-xl mb-2">{title}</h3>
                  <p className="text-sm text-[--color-ink]/70 font-[--font-ticket]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PaperEffect>
    </div>
  );
};

export default WelcomeNote;
