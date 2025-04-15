/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn-icons-png.flaticon.com',
          port: '',
          pathname: '/512/**', // allows all images under /512/
        },{
          protocol : 'https',
          hostname : 'images.clerk.dev',
          port : '',
          pathname :'/*'
        },{
          protocol : 'https',
          hostname : 'getstream.io',
          port : '',
          pathname :'/*'
        }
      ],
    },
  };
  
export default nextConfig;
