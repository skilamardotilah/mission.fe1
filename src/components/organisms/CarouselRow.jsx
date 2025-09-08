import PosterCard from '../molecules/PosterCard.jsx';

const asset = (p) => new URL(`../../assets/${p}`, import.meta.url).href;

export default function CarouselRow({ title, items = [], variant = 'landscape' }) {
  const left = asset('img/arrow-left.png');
  const right = asset('img/arrow-right.png');

  return (
    <section className="w-full px-4 md:px-[80px] py-[40px] flex flex-col gap-[32px]">
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>

      <div className="relative w-full">
        {/* tombol kiri */}
        <button className="hidden md:flex absolute left-[-32px] top-1/2 -translate-y-1/2 z-10 bg-[#333] rounded-full w-[48px] h-[48px] items-center justify-center shadow-md">
          <img src={left} alt="Left Arrow" className="w-6 h-6" />
        </button>

        {/* list */}
        <div className="overflow-x-auto w-full">
          <div className="flex gap-[10px] flex-nowrap w-max">
            {items.map((it, i) => (
              <PosterCard key={i} {...it} variant={variant} />
            ))}
          </div>
        </div>

        {/* tombol kanan */}
        <button className="hidden md:flex absolute right-[-32px] top-1/2 -translate-y-1/2 z-10 bg-[#333] rounded-full w-[48px] h-[48px] items-center justify-center shadow-md">
          <img src={right} alt="Right Arrow" className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
