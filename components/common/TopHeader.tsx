"use client"
import Link from 'next/link';
import { LogoMain } from '../icon';
import { usePathname } from 'next/navigation'

export default function TopHeader() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'IT Services', href: '/services#overview' },
        { name: 'Cyber Security', href: '/cyber-security' },
        { name: 'Projects', href: '/projects' },
        { name: 'Company', href: '/company' },
    ];

    return (
        <header className="w-full border-b border-[#E7E8EC] bg-white/80 backdrop-blur-[5px] fixed top-0 z-50 transition-all duration-200">
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
                    {navLinks.map((link) => {
                        const baseHref = link.href.split('#')[0];
                        const isActive = pathname === baseHref || pathname?.startsWith(`${baseHref}`);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-all duration-150 relative py-2 block ${isActive
                                    ? 'text-[#098bab]'
                                    : 'hover:text-[#098bab]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
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