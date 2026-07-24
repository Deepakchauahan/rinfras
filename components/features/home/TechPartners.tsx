import React from 'react';
import { Slider1, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7 } from '@/components/icon';

// Explicitly type definition to satisfy strict TypeScript environments
interface AlliancePartner {
    name: string;
    svg: React.ReactNode;
}

export default function TechPartners() {
    const technicalAlliances: AlliancePartner[] = [
        { name: "Partner Logo 1", svg: <Slider1 /> },
        { name: "Partner Logo 2", svg: <Slider2 /> },
        { name: "Partner Logo 3", svg: <Slider3 /> },
        { name: "Partner Logo 4", svg: <Slider4 /> },
        { name: "Partner Logo 5", svg: <Slider5 /> },
        { name: "Partner Logo 6", svg: <Slider6 /> },
        { name: "Partner Logo 7", svg: <Slider7 /> }
    ];

    return (
        <section className="w-full bg-[#F7F7F7] border-y border-gray-100 py-5 overflow-hidden">
            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20">

                {/* Section Header */}
                <div className="mb-8">
                    <p className="text-[20px] font-bold text-[#6B7280]">
                        Our Technology Partners
                    </p>
                </div>

                {/* High Performance Infinite Slider Container */}
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
                    <div className="animate-marquee flex items-center gap-16 md:gap-24">

                        {/* Base Core Array Loop Mapping */}
                        {technicalAlliances.map((partner, index) => (
                            <div
                                key={`alliance-core-${index}`}
                                className="h-10 w-32 flex-shrink-0 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:text-[#0891B2] transition-all duration-300 ease-in-out cursor-pointer"
                                title={partner.name}
                            >
                                <div className="w-full h-full flex items-center justify-center">
                                    {partner.svg}
                                </div>
                            </div>
                        ))}

                        {/* Duplicate Array Loop Mapping to form the Seamless Marquee Continuation */}
                        {technicalAlliances.map((partner, index) => (
                            <div
                                key={`alliance-dup-${index}`}
                                className="h-10 w-32 flex-shrink-0 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:text-[#0891B2] transition-all duration-300 ease-in-out cursor-pointer"
                                title={partner.name}
                            >
                                <div className="w-full h-full flex items-center justify-center">
                                    {partner.svg}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}
