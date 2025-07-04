/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      }
    }
    
    // Fix for undici/Firebase compatibility
    config.externals = config.externals || []
    config.externals.push({
      'undici': 'undici',
    })
    
    return config
  },
  experimental: {
    esmExternals: 'loose',
  },
}

export default nextConfig
