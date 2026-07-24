export default function Testimonials() {
  const reviews = [
    {
      initials: 'KS',
      name: 'KETAN SHARMA',
      company: 'Allerton Australia',
      text: 'Our experience with Rinfras has been really great. A great team, pro -active in their response time and always available on call to get your server related troubles solved. Thanks team Rinfras.'
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
    <section className="w-full bg-[#F7F7F7] py-16 lg:py-20 ">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20 ">

        <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-black text-[#283860] mb-5">
          What Our Clients Are Saying
        </h2>

        {/* Dynamic Card Display Layout Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-3 lg:mt-5 text-left">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow duration-200"
            >

              {/* Text Layer Block Frame Container */}
              <div className="relative mb-12 z-10">
                {/* Decorative Left/Open Vector Quote Mask */}
                <span className="absolute -top-2 -left-5 text-[50px] font-bold text-[#CFFAFE] select-none inline leading-none z-[-1]">“</span>

                <p className="text-[#23262E] font-normal leading-relaxed inline">
                  {review.text}<span className="inline text-[50px] font-bold text-[#CFFAFE] select-none -ml-2 translate-y-2 absolute -bottom-9">”</span>
                </p>
              </div>

              {/* Author Identity Metadata Layout Footer Row */}
              <div className="flex items-center gap-4 relative z-10">

                {/* Custom Stylized Monogram Graphic Layout Block Box */}
                <div className="relative flex-shrink-0 w-16 h-12 flex items-center select-none z-[-1]">
                  <span className="text-[56px] font-black tracking-tighter text-[#CFFAFE] absolute left-0 bottom-0 leading-none">
                    {review.initials}
                  </span>
                </div>

                {/* Text Identity Matrix */}
                <div className="flex flex-col justify-center -ml-4">
                  <span className="text-[20px] font-semibold text-[#283860] uppercase leading-none">
                    {review.name}
                  </span>
                  <span className="text-[14px] font-medium text-[#6B7280] mt-0.5">
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