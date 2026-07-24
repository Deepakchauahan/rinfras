import AppointmentCTA from "@/components/features/home/AppointmentCTA";
import FeaturedProjects from "@/components/features/home/FeaturedProjects";
import HeroBanner from "@/components/features/home/HeroBanner";
import HowWeWork from "@/components/features/home/HowWeWork";
import StatsRibbon from "@/components/features/home/StatsRibbon";
import TechPartners from "@/components/features/home/TechPartners";
import Testimonials from "@/components/features/home/Testimonials";
import WhatWeDo from "@/components/features/home/WhatWeDo";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TechPartners />
      <HowWeWork />
      <WhatWeDo />
      <StatsRibbon />
      <FeaturedProjects />
      <Testimonials />
      <AppointmentCTA />
    </>

  );
}
