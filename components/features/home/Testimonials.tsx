export default function Testimonials() {
  const reviews = [
    {
      initials: 'KS',
      name: 'KETAN SHARMA',
      company: 'Allerton Australia',
      text: 'Our experience with Rinfras has been really great. A great team, pro-active in their response time and always available on call to get your server related troubles solved. Thanks team Rinfras.'
    },
    {
      initials: 'CS',
      name: 'CATHERINE SWINKELS',
      company: 'JSR Electrical & Communication',
      text: "I can't say enough great things about Rinfras. They know their stuff and are extremely friendly and easy to work with. As a mid-size company, we rely on Rinfras to keep our system operating and our people focused on their jobs and not on maintaining the IT systems. We leave IT systems, networks, wifi, telephony to Rinfras to troubleshoot and resolve."
    },
    {
      initials: 'LH',
      name: 'LACHALAN HAACK',
      company: 'Operational Intelligence',
      text: 'Rinfras are very professional and provide an excellent service. No job too big or small. Highly recommend them for all IT projects and services.'
    }
  ];

  return (
    <section className="w-full bg-[#FAFBFC] py-16 lg:py-24 border-b border-[#E7E8EC]">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20 text-center">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#283860] tracking-tight mb-12 lg:mb-16">
          What Our Clients Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left items-start">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white border border-[#E7E8EC] rounded-xl p-8 shadow-sm flex flex-col justify-between min-h-[280px]">
              {/* Quote Copy Area Layout */}
              <p className="text-sm text-[#6B7280] leading-relaxed font-normal mb-8 relative">
                "{review.text}"
              </p>

              {/* Author Identity Badge Layout Footer Row */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#FAFBFC]">
                <div className="w-10 h-10 rounded-lg bg-[#CFFAFE] border border-[#0891B2]/20 flex items-center justify-center text-sm font-black text-[#0891B2]">
                  {review.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-[#283860] tracking-wider uppercase">
                    {review.name}
                  </span>
                  <span className="text-[11px] font-medium text-[#6B7280]">
                    {review.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
