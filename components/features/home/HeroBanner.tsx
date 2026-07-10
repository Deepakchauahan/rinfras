import Image from 'next/image';
import Link from 'next/link';

export default function HeroBanner() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 lg:py-24">
      {/* Structural Centered Layout Container */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Typography & Conversion Elements (7/12 Width) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10">

          {/* Trust Badge Indicator */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#CFFAFE] border-2 border-[#0F52BA] transition-transform duration-300 hover:scale-102">
            <span className="text-sm font-semibold text-[#0F52BA] tracking-wide">
              Trusted by Australians for over 14 years
            </span>
          </div>

          {/* Main Hero Header Stack */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#283860] tracking-tight leading-[1.2] max-w-[766px]">
            Enterprise IT & Cyber Security. <br />Proven at Scale.
          </h1>

          {/* Contextual Descriptive Copy */}
          <p className="text-base sm:text-[20px] text-[#6B7280] font-normal leading-relaxed max-w-[686px]">
            Managed IT, Cloud And Cyber Security For Enterprise, Health And Government
            Clients — Backed By 14 Years Of Delivery On Australia's Most Critical
            Infrastructure.
          </p>

          {/* Double Action Button Matrix */}
          <div className="flex flex-wrap gap-4 sm:gap-6 w-full sm:w-auto">
            <Link
              href="/about"
              className="btn-premium-anim inline-flex items-center justify-center px-[18px] py-2.5 text-sm font-semibold text-white border-2 border-[#0670A0] bg-[#0891B2] rounded-md shadow-sm transform active:scale-98"
            >
              More About Us
            </Link>

            <Link
              href="/projects"
              className="btn-secondary-shutter inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#0891B2] border-2 border-[#0891B2] rounded-md shadow-sm transform active:scale-98"
            >
              View Our Projects
            </Link>
          </div>


          {/* Social Proof Hospital / Client Subtext */}
          <div className="flex flex-wrap items-center gap-3 w-full pt-2">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="w-7 h-7 rounded-full bg-[#CFFAFE] border-[#0670A0] border flex items-center justify-center text-[12px] font-bold text-[#0670A0] drop-shadow-md">NB</span>
              <span className="w-7 h-7 rounded-full bg-[#CFFAFE] border-[#0670A0] border flex items-center justify-center text-[12px] font-bold text-[#0670A0] drop-shadow-md">BC</span>
              <span className="w-7 h-7 rounded-full bg-[#CFFAFE] border-[#0670A0] border flex items-center justify-center text-[12px] font-bold text-[#0670A0] drop-shadow-md">NR</span>
              <span className="w-7 h-7 rounded-full bg-[#CFFAFE] border-[#0670A0] border flex items-center justify-center text-[12px] font-bold text-[#0670A0] drop-shadow-md">CP</span>
            </div>
            <p className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed">
              Delivered for Northern Beaches Hospital, BaptistCare & more
            </p>
          </div>

        </div>

        {/* Right Column: Hero Graphic Section (5/12 Width) */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">

          {/* Decorative Background Dots Component (Pure CSS - Zero Image Load Weight) */}
          <div
            className="absolute -top-4 -right-4 w-32 h-32 opacity-20 pointer-events-none hidden sm:block bg-[radial-gradient(#00c2ff_1.5px,transparent_1.5px)] [background-size:12px_12px]"
            aria-hidden="true"
          />

          {/* High Performance Image Element Linked via Public Root Directory */}
          <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3]">
            <Image
            src={`${basePath}/banner1.png`} 
              alt="Enterprise Cyber Security and Network Infrastructure Abstract Diagram Illustration"
              fill
              // Re-enabled optimized sizes fallback to scale resolution on smaller mobile devices
              sizes="(max-w: 768px) 100vw, (max-w: 1200px) 40vw, 600px"
              priority={true}
              quality={90}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
