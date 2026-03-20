import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dvereastolarstvo.sk';
    const locales = ['sk'];
    const paths = [
        '',
        '/dvere/o-nas',
        '/dvere/dverenamieru',
        '/dvere/typizovane-dvere',
        '/dvere/konfigurator',
        '/dvere/poradna',
        '/dvere/referencie',
        '/dvere/blog',
        '/dvere/kontakt',
        '/dvere/tabulka',
        '/dvere/polozkydopytu',
        '/dvere/dopyt',
        '/stolarstvo/o-nas',
        '/stolarstvo/referencie',
        '/stolarstvo/kontakt',
    ];

    const entries: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        for (const path of paths) {
            entries.push({
                url: `${baseUrl}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: path === '' ? 1 : 0.8,
            });
        }
    }

    return entries;
}
