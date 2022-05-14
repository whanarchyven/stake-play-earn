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
                    source: '/api/players',
                    destination: 'http://127.0.0.1:5500',
                },
            ]
        },

  reactStrictMode: true,}
