import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
  
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  }
 
}


export default nextConfig;