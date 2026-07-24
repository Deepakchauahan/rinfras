import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedProjects() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const projects = [
    {
      title: "NORTHERN BEACHES HOSPITAL",
      logo: `${basePath}/nb-hospital.png`, 
      alt: "Northern Beaches Hospital Logo Container",
      isCustomLogo: true
    },
    {
      title: "CENTRES FOR NATIONAL RESILIENCE",
      image: `${basePath}/resilience-centre.jpg`,
      alt: "Aerial view of physical infrastructure building architecture grid",
      isCustomLogo: false
    },
    {
      title: "BAPTIST CARE",
      logo: `${basePath}/baptist-care.png`,
      alt: "BaptistCare Company Logo Asset Showcase Layout",
      isCustomLogo: true,
      customBg: "bg-[#4C1D24]" // Deep maroon backdrop seen in design
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-[#E7E8EC]">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20">
        
        {/* Top Header Flex Matrix Block */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#283860] tracking-tight">
            Featured Projects
          </h2>
          <Link 
            href="/projects" 
            className="inline-flex items-center text-xs font-bold text-[#0891B2] hover:text-[#0670A0] uppercase tracking-wider group transition-colors duration-150"
          >
            View All Projects
            <svg className="w-3.5 h-3.5 ml-1 transform transition-transform duration-150 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Project Card Dynamic Adaptive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col space-y-4 group">
              {/* Media Placement Frame Block */}
              <div className={`w-full aspect-[16/10] border border-[#E7E8EC] rounded-xl overflow-hidden relative shadow-sm transition-shadow duration-200 group-hover:shadow-md ${project.customBg || 'bg-white'}`}>
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.alt} 
                    fill 
                    sizes="(max-w: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" 
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <img 
                      src={project.logo} 
                      alt={project.alt} 
                      className="max-h-[60%] max-w-[80%] object-contain"
                    />
                  </div>
                )}
              </div>
              
              {/* Block Label Sub-text Title Layer */}
              <h3 className="text-xs sm:text-sm font-black text-[#283860] tracking-wider uppercase">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
