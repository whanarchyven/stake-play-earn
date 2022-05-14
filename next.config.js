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
                    destination: 'https://1milliondao.com',
                },
            ]
        },

  reactStrictMode: true,}
