import Link from 'next/link';
import { LogoMain } from '../icon';

export default function TopHeader() {
    // Navigation links array for clean, scalable rendering
    const navLinks = [
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cyber Security', href: '/cyber-security' },
        { name: 'Projects', href: '/projects' },
        { name: 'Company', href: '/company' },
    ];

    return (
         <header className="w-full border-b border-[#E7E8EC] bg-white/50 backdrop-blur-[5px] fixed top-0 z-50 transition-all duration-200">
            {/* Height locked explicitly at h-[90px] to preserve browser thread pixels for 100% Core Web Vitals (CLS) score */}
            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 h-[90px] flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <Link
                        href="/"
                        className="flex items-center gap-2 group"
                        aria-label="RINFRAS Home" // Fixed syntax: Removed from inside the className string
                    >
                        <LogoMain />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-x-8" aria-label="Main Navigation">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-[#098bab] transition-colors duration-150 relative py-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Button Section */}
                <div className="flex items-center">
                    <Link
                        href="/assessment"
                        className="btn-premium-anim inline-flex items-center justify-center px-[18px] py-2.5 text-sm font-semibold text-white border-2 border-[#0670A0] bg-[#0891B2] rounded-md shadow-sm transform active:scale-98"                    >
                        Get Free Assessment
                    </Link>
                </div>

            </div>
        </header>
    );
}