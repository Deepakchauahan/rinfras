export default function StatsRibbon() {
  const stats = [
    { value: '14+', label: 'Years In Operation' },
    { value: '25+', label: 'Happy Clients' },
    { value: '70+', label: 'Projects Delivered' },
    { value: '24/7', label: 'Support & Monitoring' },
  ];

  return (
    <section className="w-full bg-[#283860] py-16 lg:py-20 ">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between gap-y-8 gap-x-4 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1 px-4">
              <span className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-white">
                {stat.value}
              </span>
              <span className="text-[14px]  text-[#E7E8EC] font-semibold ">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
