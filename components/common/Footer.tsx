import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1E293B] text-white pt-16">
      {/* Top Main Dynamic Column Grid Content Block */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-700/60">
        
        {/* Column 1: Core Branding Asset Layout Block (4/12 width) */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <div className="flex items-center gap-2">
            {/* SVG Logo Graphic Element Layout Container */}
            <svg className="w-6 h-6 text-[#0891B2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-xl font-black tracking-tight text-white">Rinfras</span>
          </div>
          <p className="text-sm text-gray-400 font-normal leading-relaxed max-w-[280px]">
            14+ years delivering enterprise IT and cyber security across Australia.
          </p>
        </div>

        {/* Column 2: IT Services Fast Access Group List Links (2/12 width) */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-black tracking-widest text-[#0891B2] uppercase">IT Services</h4>
          <nav className="flex flex-col space-y-2.5 text-sm text-gray-400">
            <Link href="/cloud" className="hover:text-white transition-colors duration-150">Cloud</Link>
            <Link href="/network" className="hover:text-white transition-colors duration-150">Network Architecture</Link>
            <Link href="/support" className="hover:text-white transition-colors duration-150">IT Support</Link>
          </nav>
        </div>

        {/* Column 3: Security Pillar Navigation Link Stack List (2/12 width) */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-black tracking-widest text-[#0891B2] uppercase">Cyber Security</h4>
          <nav className="flex flex-col space-y-2.5 text-sm text-gray-400">
            <Link href="/managed-security" className="hover:text-white transition-colors duration-150">Managed Security</Link>
            <Link href="/offensive-security" className="hover:text-white transition-colors duration-150">Offensive Security</Link>
            <Link href="/compliance" className="hover:text-white transition-colors duration-150">Compliance</Link>
          </nav>
        </div>

        {/* Column 4: Corporate Data Structure Links List Block (2/12 width) */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-black tracking-widest text-[#0891B2] uppercase">Company</h4>
          <nav className="flex flex-col space-y-2.5 text-sm text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors duration-150">About</Link>
            <Link href="/projects" className="hover:text-white transition-colors duration-150">Projects</Link>
            <Link href="/careers" className="hover:text-white transition-colors duration-150">Careers</Link>
            <Link href="/privacy" className="hover:text-white transition-colors duration-150">Privacy Policy</Link>
          </nav>
        </div>

        {/* Column 5: Direct Physical Contact Access Node Panel Block (2/12 width) */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-black tracking-widest text-[#0891B2] uppercase">Contact Us</h4>
          <div className="flex flex-col space-y-3 text-xs text-gray-400 font-normal leading-relaxed">
            <p className="flex items-center gap-2">
              <span className="text-white font-bold">📞</span> 1300 496 643
            </p>
            <p className="flex items-center gap-2">
              <span className="text-white font-bold">✉️</span> sales@rinfras.com.au
            </p>
            <p>
              📍 4502, 526/368 Sussex Street,<br />Sydney, New South Wales 2000
            </p>
            <p>
              📍 Level 27, 101 Collins Street,<br />Melbourne, Victoria 3000
            </p>
          </div>
        </div>

      </div>

      {/* Sub-basement Legal Terms and Meta Content Bar Row */}
      <div className="w-full bg-[#111827] py-4">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-medium">
          <span>RINFRAS PTY LTD</span>
          <span className="mt-1 sm:mt-0">Copyright © {currentYear}. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
