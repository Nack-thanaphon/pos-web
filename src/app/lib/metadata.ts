import { siteConfig } from '@/app/config/site'
import { Metadata } from 'next'

export function constructMetadata({
    title,
    description,
    image,
    noIndex,
}: {
    title?: string
    description?: string
    image?: string
    noIndex?: boolean
} = {}): Metadata {
    return {
        title: {
            default: title || siteConfig.name,
            template: `%s | ${siteConfig.name}`,
        },
        description: description || siteConfig.description,
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: siteConfig.url,
            siteName: siteConfig.name,
            images: [{ url: image || siteConfig.ogImage }],
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
        },
        authors: [{ name: siteConfig.author }],
        metadataBase: new URL(siteConfig.url),
    }
}