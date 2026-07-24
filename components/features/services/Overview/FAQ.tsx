'use client';

import { useState } from 'react';

export default function FAQ() {
    const faqs = [
        {
            question: "How Quickly Can Rinfras Onboard A New Managed IT Client?",
            answer: "Our standard onboarding timeframe typically spans 2 to 4 weeks depending on network scale and architectural complexity. This includes a full site auditing infrastructure sweep, centralized documentation provisioning, and complete support channel integration mapping."
        },
        {
            question: "Do You Support Multi-Site Or Interstate Organisations?",
            answer: "Yes. We actively architect and manage unified network connectivity ecosystems supporting multiple offices, industrial campuses, and interstate facilities throughout Australia, ensuring secure low-latency connectivity frameworks across all remote sites."
        },
        {
            question: "What Is Included In The 24/7 Monitoring Service?",
            answer: "Our monitoring matrix deploys systemic alerting pipelines tracking real-time network health, endpoint security diagnostics, automated back-up logs, storage array thresholds, cloud instances, and proactive patch management distributions."
        },
        {
            question: "Can Managed IT Be Combined With Cyber Security Services?",
            answer: "Absolutely. We recommend pairing your infrastructure management directly with our offensive security, risk management compliance templates, and 24/7 localized SOC monitoring structures to secure data access loops entirely."
        }
    ];

    // Track active accordion element ID states
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-white py-16 lg:py-20 ">
            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20 ">

                {/* Section Heading Title Header */}
                <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-black text-[#283860] mb-5">
                    Frequently Asked Questions
                </h2>

                {/* Structured Line Item Grid Stack Containers */}
                <div className="w-full border-t border-[#E7E8EC]">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="w-full border-b border-[#E7E8EC] transition-colors duration-150 hover:bg-gray-50/40"
                            >
                                {/* Trigger Button Interface Layer Row */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full py-6 flex items-center justify-between text-left gap-6 group cursor-pointer focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base sm:text-[18px] font-semibold text-[#23262E] leading-none group-hover:text-[#0891B2] transition-colors duration-150">
                                        {faq.question}
                                    </span>

                                    {/* Dynamic Action Trigger Icon Crosshair Marker */}
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 border border-gray-200/60 flex items-center justify-center relative group-hover:border-[#0891B2]/30 group-hover:bg-[#CFFAFE]/20 transition-all duration-150">
                                        <span className={`text-[24px] font-normal text-[#0891B2] transform transition-transform duration-200 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                                            +
                                        </span>
                                    </div>
                                </button>

                                {/* Smooth Expandable Answer Rich Text Containment Framework */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 pb-6' : 'max-h-0 opacity-0 pointer-events-none'
                                        }`}
                                >
                                    <p className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed  pr-10">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
