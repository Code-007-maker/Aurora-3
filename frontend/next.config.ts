import type { NextConfig } from "next";

// Check if we are in production or local development
const isProd = process.env.NODE_ENV === 'production';
const BACKEND_URL = "https://aurora-backend-2.onrender.com";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                // If on Render, use the Render URL. If local, use localhost.
                destination: isProd 
                    ? `${BACKEND_URL}/api/:path*` 
                    : "http://localhost:8000/api/:path*",
            },
            {
                source: "/auth/:path*",
                destination: isProd 
                    ? `${BACKEND_URL}/auth/:path*` 
                    : "http://localhost:8000/auth/:path*",
            },
        ];
    },
};

export default nextConfig;
