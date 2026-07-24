import Link from 'next/link';

export default function AppointmentCTA() {
  return (
    <section className="w-full py-16 lg:py-20 bg-[#E7E8EC]">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20 text-center">
        {/* Label Upper Tag Block Layer */}
        <span className="text-[20px] font-semibold text-[#6B7280]   block mb-3">
          Make An Appointment
        </span>

        {/* Header Heading Array Context */}
        <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-black text-[#283860] mx-auto mb-3">
          We Are Here To Find The Best<br />Solution For Your IT Problems
        </h2>

        {/* Sub-Text Component Info Row */}
        <p className="mt-4 text-[#6B7280] font-normal max-w-[600px] mx-auto">
          Reach out to us today if you want us to architect a solution, require hardware or simply need a competitive quote.
        </p>

        {/* Button Wrapper Container Layout Box */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/assessment"
            className="btn-premium-anim inline-flex items-center justify-center px-[18px] py-2.5 text-sm font-semibold text-white border-2 border-[#0670A0] bg-[#0891B2] rounded-md shadow-sm transform active:scale-98"                    >
            Get Free Assessment
          </Link>
        </div>

      </div>
    </section>
  );
}
