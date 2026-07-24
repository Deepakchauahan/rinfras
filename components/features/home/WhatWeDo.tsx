import Link from 'next/link';

export default function WhatWeDo() {
  const pillars = [
    {
      title: 'IT SERVICES',
      description: 'Cloud, network, hardware, workplace and IT support — fully managed end to end',
      href: '/it-services',
      linkText: 'Explore IT Services',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'CYBER SECURITY',
      description: 'Offensive security, risk & compliance, and 24/7 SOC monitoring',
      href: '/cyber-security',
      linkText: 'Explore Cyber Security',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'CRITICAL PROJECTS',
      description: 'Hospitals, government, commercial property and enterprise delivery',
      href: '/projects',
      linkText: 'View Projects',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#FAFBFC] py-16 lg:py-24">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20 text-center">
        
        {/* Header Stack */}
        <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest block mb-3">
          What We Do
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#283860] tracking-tight leading-tight max-w-[800px] mx-auto">
          Three Pillars,<br />One Trusted Partner
        </h2>

        {/* Pillars Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16 text-left">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title} 
              className="bg-white border border-[#E7E8EC] rounded-xl p-8 shadow-sm flex flex-col justify-between min-h-[250px] group hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Block Icon Background Indicator */}
                <div className="w-10 h-10 bg-[#283860] rounded-lg flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>

                {/* Typography Information Stack */}
                <h3 className="text-sm font-bold text-[#283860] tracking-wider mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed font-normal mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Dynamic Callout Action Links */}
              <div>
                <Link
                  href={pillar.href}
                  className="inline-flex items-center text-xs font-bold text-[#0891B2] hover:text-[#0670A0] tracking-wide transition-colors duration-150 uppercase"
                >
                  {pillar.linkText}
                  <svg 
                    className="w-3.5 h-3.5 ml-1 transform transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
