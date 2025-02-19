import PaperEffect from '../common/PaperEffect';

const StatsCard = ({ title, value }) => {
  const getRandomRotation = () => {
    const rotations = ['rotate-1', '-rotate-1', 'rotate-0'];
    return rotations[Math.floor(Math.random() * rotations.length)];
  };

  return (
    <PaperEffect type="card" className={getRandomRotation()}>
      <div className="p-5">
        <h3 className="text-sm text-[--color-ink]/60 font-[--font-ticket] mb-2">
          {title}
        </h3>
        <p className="font-[--font-heading] text-3xl text-[--color-ink]">
          {value}
        </p>

        {/* Decorative Corner Lines */}
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[--color-ink]/10" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[--color-ink]/10" />
      </div>
    </PaperEffect>
  );
};

export default StatsCard;