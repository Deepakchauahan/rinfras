import AppointmentCTA from "@/components/features/home/AppointmentCTA";
import ContinueExploring from "@/components/features/services/ContinueExploring";
import ServicesHero from "@/components/features/services/ServicesHero";
import SubNavTabs from "@/components/features/services/SubNavTabs";


export default function ITServices() {
    return (
        <>
            <ServicesHero />
            <SubNavTabs />
            <ContinueExploring/>
            <AppointmentCTA />
        </>

    );
}
