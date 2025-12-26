// next.config.mjs

const nextConfig = {
    // Your Next.js configuration
    i18n: {
        locales: ['en', 'esp'],
        defaultLocale: 'en',
    },
    images: {
        domains: ['static.ambitionbox.com', 'images.unsplash.com'],
    },
};

const defaultLocale = nextConfig.i18n.defaultLocale;

export { nextConfig as default, defaultLocale };
