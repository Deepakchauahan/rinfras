'use client';

import { useEffect, useState } from 'react';
import Includes from './overview/Includeds';
import CloudConsulting from './cloud/CloudConsulting';
import IntegratedCom from './ICN/IntegratedCom';

export default function SubNavTabs() {
    const tabs = [
        { id: 'overview', name: 'Overview' },
        { id: 'cloud', name: 'Cloud' },
        { id: 'icn', name: 'ICN' },
        { id: 'gpon', name: 'GPON' },
        { id: 'network', name: 'Network' },
        { id: 'hardware', name: 'Hardware' },
        { id: 'backup', name: 'Back Up & Recovery' },
        { id: 'modern-workplace', name: 'Modern Workplace' },
        { id: 'it-support', name: 'IT Support' },
        { id: 'it-procurement', name: 'IT Procurement' },
        { id: 'it-maintenance', name: 'IT Maintenance' },
    ];

    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        const handleHashChange = () => {
            const currentHash = window.location.hash.replace('#', '');
            if (currentHash && tabs.some(tab => tab.id === currentHash)) {
                setActiveTab(currentHash);
            } else {
                setActiveTab('overview');
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        window.history.pushState(null, '', `#${tabId}`);
    };

    const renderTabData = () => {
        switch (activeTab) {
            case "overview":
                return <Includes />
            case "cloud":
                return <CloudConsulting />
                case "icn":
                return <IntegratedCom />
            default:
                return <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20 py-8 text-gray-400">No data found</div>;
        }

    }

    return (
        <>
            <nav className="w-full pb-6 border-b border-[#E7E8EC]">
                <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20">

                    {/* Pixel-Perfect Multi-Row Pill Grid matching your design sheet */}
                    <div className="flex flex-wrap">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabClick(tab.id)}
                                    className={`transition-all duration-150 px-4 py-2 rounded-lg text-sm cursor-pointer font-medium ${isActive
                                        ? 'bg-[#CFFAFE] text-[#0F52BA]'
                                        : 'text-[#23262E]'
                                        }`}
                                >
                                    {tab.name}
                                </button>
                            );
                        })}
                    </div>

                </div>
            </nav>

            {renderTabData()}
        </>
    );
}