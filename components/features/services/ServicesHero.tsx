import Image from 'next/image';
import Link from 'next/link';

export default function ServicesHero() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const inlineStats = [
        { value: '30min', label: 'Avg Response' },
        { value: '24/7', label: 'Monitoring' },
        { value: '100%', label: 'Retention' },
    ];

    return (


        <section className="relative w-full bg-white overflow-hidden py-[20px] lg:py-[44px] pt-[114px] lg:pt-[134px]">
            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    style={{ background: 'linear-gradient(90deg, #283860 50%, #5374C6 100%)' }} className="rounded-[24px] max-w-[1520px] mx-auto p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10">

                        {/* Trust Badge Indicator */}
                        <div className="inline-flex items-center px-5 py-2.5 rounded-[16px] bg-[#CFFAFE] border-2 border-[#0F52BA] transition-transform duration-300 hover:scale-102">
                            <span className="text-sm font-semibold text-[#0F52BA] tracking-wide">
                                IT Services
                            </span>
                        </div>

                        {/* Main Hero Header Stack */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white  leading-[1.2] max-w-[766px] capitalize">
                            Cloud, network and workplace IT — <br />fully managed
                        </h1>

                        {/* Contextual Descriptive Copy */}
                        <p className="text-base sm:text-[20px] text-[#F7F7F7] font-normal leading-relaxed max-w-[686px]">
                            Managed IT, Cloud And Cyber Security For Enterprise, Health And Government
                            Clients — Backed By 14 Years Of Delivery On Australia's Most Critical
                            Infrastructure.
                        </p>

                        {/* Double Action Button Matrix */}
                        <div className="flex flex-wrap gap-4 sm:gap-6 w-full sm:w-auto">
                            <Link
                                href="/about"
                                className="btn-premium-anim inline-flex items-center justify-center px-[18px] py-2.5 text-sm font-semibold text-white border-1 border-[#0670A0] bg-[#0891B2] rounded-md shadow-sm transform active:scale-98"
                            >
                                More About Us
                            </Link>

                            <Link
                                href="/projects"
                                className="bg-[white] inline-flex items-center justify-center px-5 py-2.5 text-sm font-nmedium text-[#0891B2] border-2 border-[#0891B2] rounded-md shadow-sm transform active:scale-98"
                            >
                                View Our Projects
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col relative z-10 w-full">
                        <div className="relative w-full ">
                            <img src={`${basePath}/services/banner1.png`} alt="IT Infrastructure Map" className="object-contain" />
                        </div>
                        <div className="grid grid-cols-3 gap-3 sm:gap-3 w-full absolute bottom-8">
                            {inlineStats.map((stat, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-[#C1C1C1CC]/80 to-[#DFDFDFCC]/80 backdrop-blur-[5px] rounded-xl p-5 px-0 flex flex-col items-center text-center">
                                    <span className="text-lg sm:text-2xl lg:text-[40px] font-bold text-[#283860] leading-none mb-1">{stat.value}</span>
                                    <span className="text-[14px] text-[#283860] font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
