import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedProjects() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const projects = [
    {
      title: "NORTHERN BEACHES HOSPITAL",
      // Clean path construction without double slashes
      image: `${basePath}/feature/1.jpg`.replace(/^\/\//, '/'),
      alt: "Northern Beaches Hospital Logo Container",
    },
    {
      title: "CENTRES FOR NATIONAL RESILIENCE",
      image: `${basePath}/feature/2.jpg`.replace(/^\/\//, '/'),
      alt: "Aerial view of physical infrastructure building architecture grid",
    },
    {
      title: "BAPTIST CARE",
      image: `${basePath}/feature/3.jpg`.replace(/^\/\//, '/'),
      alt: "BaptistCare Company Logo Asset Showcase Layout",
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20 ">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-20 ">

        {/* Top Header Flex Matrix Block */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-black text-[#283860]">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center text-[14px] font-semibold text-[#0891B2] transition-colors duration-150 gap-2 hover:text-[#0670A0] transition-colors duration-150"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M9.5628 0.53125V7.4375C9.5628 7.5784 9.50683 7.71352 9.4072 7.81315C9.30757 7.91278 9.17244 7.96875 9.03155 7.96875C8.89065 7.96875 8.75552 7.91278 8.6559 7.81315C8.55627 7.71352 8.5003 7.5784 8.5003 7.4375V1.81355L0.907405 9.40711C0.807721 9.50679 0.67252 9.5628 0.531545 9.5628C0.390571 9.5628 0.25537 9.50679 0.155686 9.40711C0.0560019 9.30743 0 9.17222 0 9.03125C0 8.89028 0.0560019 8.75507 0.155686 8.65539L7.74924 1.0625H2.1253C1.9844 1.0625 1.84927 1.00653 1.74964 0.9069C1.65002 0.807272 1.59405 0.672146 1.59405 0.53125C1.59405 0.390354 1.65002 0.255228 1.74964 0.1556C1.84927 0.0559709 1.9844 0 2.1253 0H9.03155C9.17244 0 9.30757 0.0559709 9.4072 0.1556C9.50683 0.255228 9.5628 0.390354 9.5628 0.53125Z" fill="currentColor" />
            </svg>
          </Link>
        </div>

        {/* Project Card Dynamic Adaptive Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-3 lg:mt-5 text-left">
          {projects.map((project, index) => (
            <div key={index} 
             className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow duration-200">
              {/* Media Placement Frame Block */}
              {/* <div className='h-[150px] rounded-xl overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-w: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
              </div> */}
               <div className={`w-full h-[150px] rounded-xl overflow-hidden relative`}>
                {/* Emergency conditional check keeps page alive if project.image evaluates empty */}
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className='!h-[150px] object-contain'
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                    Missing Asset Path
                  </div>
                )}
              </div>

              {/* Block Label Sub-text Title Layer */}
               <h3 className="text-[20px] font-semibold text-[#283860]  mt-1">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
