import Image from 'next/image';

export default function WhyAndHow() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    const whyPoints = [
        "100% client retention rate across 14 years",
        "Local engineers with global delivery experience",
        "Onsite and remote consulting models",
    ];

    const howPoints = [
        "Free assessment of current IT posture",
        "Tailored roadmap, then 24/7 ongoing support",
    ];

    return (
        <section className="w-full bg-[#F7F7F7] py-16 lg:py-20 ">
            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20">

                {/* ROW 1: Why Business Choose Rinfras Layout Block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Visual Asset Display Frame (5/12 width) */}
                    <div className="lg:col-span-5 relative w-full bg-[#E7E8EC] aspect-[2/1] h-full rounded-[24px] flex items-center justify-center p-6 group overflow-hidden">
                        {/* Functional Image Component Placeholder */}
                        <span className="text-[#6B7280]  select-none relative z-10">
                            Engineer at workstation
                        </span>
                    </div>

                    {/* Right Column: Information Content Typography Stack (7/12 width) */}
                    <div className="lg:col-span-7 flex flex-col items-start space-y-3">
                        <h2 className="text-3xl  lg:text-[34px] font-bold text-[#283860]">
                            Why Business Choose Rinfras
                        </h2>
                        <p className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed ">
                            Accountable, outcome-driven delivery from a team of highly skilled engineers blending technical depth with commercial understanding.
                        </p>
                        {/* Styled Check Vector List Container */}
                        <ul className="pt-2 space-y-3 w-full" aria-label="Key highlights list">
                            {whyPoints.map((text, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-[30px] h-[30px] rounded-full bg-[#0891B2] flex items-center justify-center shadow-sm">
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.7561 2.20489L15.8811 0.364268C15.6468 0.130979 15.3296 0 14.999 0C14.6684 0 14.3513 0.130979 14.117 0.364268L6.87481 7.49864L6.86622 7.49005L4.00372 4.73458C3.76886 4.50215 3.45153 4.37217 3.12111 4.37304C2.79069 4.37392 2.47405 4.50559 2.24044 4.73927L0.365437 6.61427C0.131432 6.84863 0 7.16628 0 7.49747C0 7.82866 0.131432 8.14631 0.365437 8.38067L5.96075 14.0057C6.07683 14.1218 6.21464 14.2139 6.36631 14.2767C6.51799 14.3396 6.68056 14.3719 6.84473 14.3719C7.00891 14.3719 7.17148 14.3396 7.32315 14.2767C7.47483 14.2139 7.61264 14.1218 7.72872 14.0057L17.76 3.97599C17.8763 3.8596 17.9685 3.72138 18.0313 3.56928C18.094 3.41718 18.1262 3.25418 18.1258 3.08963C18.1254 2.92508 18.0926 2.76222 18.0291 2.6104C17.9657 2.45857 17.8729 2.32077 17.7561 2.20489ZM6.84512 13.1236L1.24981 7.49864L3.12481 5.62364L3.13341 5.63224L5.99591 8.38771C6.22998 8.61957 6.54612 8.74965 6.87559 8.74965C7.20506 8.74965 7.52121 8.61957 7.75528 8.38771L15.0045 1.24864L16.8748 3.09239L6.84512 13.1236Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className="text-sm sm:text-base font-normal text-[#23262E] ">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ROW 2: How We Work Layout Block (Alternating Columns Alignment Matrix) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 lg:pt-20">
                    {/* Left Column: Content Stack Row (7/12 width) */}
                    <div className="lg:col-span-7 flex flex-col items-start space-y-3">
                        <h2 className="text-3xl  lg:text-[34px] font-bold text-[#283860]">
                            How we work
                        </h2>
                        <p className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed ">
                            Three-step engagement from assessment through to ongoing support and reporting.
                        </p>
                        {/* Styled Check Vector List Container */}
                        <ul className="pt-2 space-y-3 w-full" aria-label="Key highlights list">
                            {howPoints.map((text, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-[30px] h-[30px] rounded-full bg-[#0891B2] flex items-center justify-center shadow-sm">
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.7561 2.20489L15.8811 0.364268C15.6468 0.130979 15.3296 0 14.999 0C14.6684 0 14.3513 0.130979 14.117 0.364268L6.87481 7.49864L6.86622 7.49005L4.00372 4.73458C3.76886 4.50215 3.45153 4.37217 3.12111 4.37304C2.79069 4.37392 2.47405 4.50559 2.24044 4.73927L0.365437 6.61427C0.131432 6.84863 0 7.16628 0 7.49747C0 7.82866 0.131432 8.14631 0.365437 8.38067L5.96075 14.0057C6.07683 14.1218 6.21464 14.2139 6.36631 14.2767C6.51799 14.3396 6.68056 14.3719 6.84473 14.3719C7.00891 14.3719 7.17148 14.3396 7.32315 14.2767C7.47483 14.2139 7.61264 14.1218 7.72872 14.0057L17.76 3.97599C17.8763 3.8596 17.9685 3.72138 18.0313 3.56928C18.094 3.41718 18.1262 3.25418 18.1258 3.08963C18.1254 2.92508 18.0926 2.76222 18.0291 2.6104C17.9657 2.45857 17.8729 2.32077 17.7561 2.20489ZM6.84512 13.1236L1.24981 7.49864L3.12481 5.62364L3.13341 5.63224L5.99591 8.38771C6.22998 8.61957 6.54612 8.74965 6.87559 8.74965C7.20506 8.74965 7.52121 8.61957 7.75528 8.38771L15.0045 1.24864L16.8748 3.09239L6.84512 13.1236Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className="text-sm sm:text-base font-normal text-[#23262E] ">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Visual Asset Display Frame (5/12 width) */}
                    <div className="lg:col-span-5 relative w-full bg-[#E7E8EC] aspect-[2/1] h-full rounded-[24px] flex items-center justify-center p-6 group overflow-hidden">
                        {/* Functional Image Component Placeholder */}
                        <span className="text-[#6B7280]  select-none relative z-10">
                            Dashboard / monitoring view
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
