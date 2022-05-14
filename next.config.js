/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports =
    {
      images: {
        loader: 'akamai',
        path: '',
      },
        async rewrites() {
            return [
                {
                    source: '/api/:path*',
                    destination: 'https://1milliondao.com/:path*',
                },
            ]
        },
  reactStrictMode: true,}
