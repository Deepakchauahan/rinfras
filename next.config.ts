/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Forces Next.js to build static HTML/CSS/JS files
  basePath: '/rinfras',      // Matches your GitHub repo name so links and styles don't break
  images: {
    unoptimized: true,       // Required because GitHub Pages doesn't support Next.js image optimization servers
  },
};

export default nextConfig;
