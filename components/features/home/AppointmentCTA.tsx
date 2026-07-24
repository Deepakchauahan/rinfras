import Link from 'next/link';

export default function AppointmentCTA() {
  return (
    <section className="w-full bg-[#FAFBFC] py-16 lg:py-20 border-b border-[#E7E8EC]">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20 text-center">
        
        {/* Label Upper Tag Block Layer */}
        <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest block mb-4">
          Make An Appointment
        </span>
        
        {/* Header Heading Array Context */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#283860] tracking-tight leading-tight max-w-[900px] mx-auto">
          We Are Here To Find The Best<br />Solution For Your IT Problems
        </h2>
        
        {/* Sub-Text Component Info Row */}
        <p className="mt-4 text-sm sm:text-base text-[#6B7280] font-normal max-w-[700px] mx-auto opacity-90">
          Reach out to us today if you want us to architect a solution, require hardware or simply need a competitive quote.
        </p>

        {/* Button Wrapper Container Layout Box */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/assessment"
            className="btn-premium-anim inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white border-2 border-[#0670A0] bg-[#0891B2] rounded-md shadow-sm transform active:scale-98 transition-transform duration-100"
          >
            Get A Free IT Assessment
          </Link>
        </div>

      </div>
    </section>
  );
}
