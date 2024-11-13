/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: {
            environment: {
                enableJsxOutlining: true,
            },
          },
    }
};

export default nextConfig;
