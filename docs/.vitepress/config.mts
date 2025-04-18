import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Haruk1y - Portfolio",
  description: "my portfolio",
  base: '/resume/',
  head: [
    // FontAwesome integration
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }],
    
    // Favicons
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/resume/favicon/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/resume/favicon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/resume/favicon/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/resume/favicon/site.webmanifest' }],
    
    // Open Graph / Social Media 
    ['meta', { property: 'og:title', content: 'Haruk1y - Portfolio' }],
    ['meta', { property: 'og:description', content: 'my portfolio' }],
    ['meta', { property: 'og:image', content: 'https://your-username.github.io/resume/images/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://your-username.github.io/resume/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Haruk1y - Portfolio' }],
    ['meta', { name: 'twitter:description', content: 'my portfolio' }],
    ['meta', { name: 'twitter:image', content: 'https://Haruk1y.github.io/resume/images/og-image.png' }],
  ],
  themeConfig: {
    logo: '/images/profile/logo.png',
    
    // Navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/Haruk1y' },
      { text: 'LinkedIn', link: 'https://linkedin.com/in/haruki-yajima-37b4a0337' },
    ],
    
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Haruk1y' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/haruki-yajima-37b4a0337' },
      { icon: 'twitter', link: 'https://twitter.com/Haruk1y_' },
    ],
  },
  
  // For better SEO
  lastUpdated: true,
  
  // Configure VitePress to handle Vue components correctly
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  },
  
  // For better accessibility
  markdown: {
    theme: 'github-dark',
    lineNumbers: false,
  }
})