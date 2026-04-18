import { MetadataRoute } from 'next';
import { locales, pathnames, type InternalPathname } from '@/i18n/routing';
import { BASE_URL, getLocalizedPath } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];
    const now = new Date();
    const routes = Object.keys(pathnames) as InternalPathname[];

    for (const locale of locales) {
        for (const pathname of routes) {
            entries.push({
                url: `${BASE_URL}${getLocalizedPath(pathname, locale)}`,
                lastModified: now,
                changeFrequency: pathname === '/' ? 'weekly' : 'monthly',
                priority: pathname === '/' ? 1 : 0.8,
                alternates: {
                    languages: Object.fromEntries(
                        locales.map((altLocale) => [
                            altLocale,
                            `${BASE_URL}${getLocalizedPath(pathname, altLocale)}`,
                        ]),
                    ),
                },
            });
        }
    }

    return entries;
}
