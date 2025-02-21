import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
    metadataBase: new URL('https://ppc-website.netlify.app'),
    title: {
        default: 'Blog Posts',
        template: '%s | My Blog'
    },
    description: 'Browse through our collection of interesting blog posts'
}