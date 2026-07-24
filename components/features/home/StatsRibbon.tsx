export default function StatsRibbon() {
  const stats = [
    { value: '14+', label: 'Years In Operation' },
    { value: '25+', label: 'Happy Clients' },
    { value: '70+', label: 'Projects Delivered' },
    { value: '24/7', label: 'Support & Monitoring' },
  ];

  return (
    <section className="w-full bg-[#1E293B] py-8 lg:py-10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
