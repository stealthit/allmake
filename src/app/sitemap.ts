import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.stealthinteractivee.co.kr'

    const routes = [
        '',
        '/about',
        '/services',
        '/portfolio',
        '/contact',
        '/consultation',
        '/quote/step1',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
