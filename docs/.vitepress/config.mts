import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Your Name - CV",
  description: "Professional Resume & Portfolio",
  base: '/resume/', // Replace with your GitHub repository name
  head: [
    // FontAwesome integration
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }],
    
    // Favicons
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/resume/favicon/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/resume/favicon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/resume/favicon/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/resume/favicon/site.webmanifest' }],
    
    // Open Graph / Social Media 
    ['meta', { property: 'og:title', content: 'Your Name - CV' }],
    ['meta', { property: 'og:description', content: 'Professional Resume & Portfolio' }],
    ['meta', { property: 'og:image', content: 'https://your-username.github.io/resume/images/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://your-username.github.io/resume/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Your Name - CV' }],
    ['meta', { name: 'twitter:description', content: 'Professional Resume & Portfolio' }],
    ['meta', { name: 'twitter:image', content: 'https://your-username.github.io/resume/images/og-image.png' }],
  ],
  themeConfig: {
    logo: '/images/profile/logo.png',
    
    // Navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/your-username' },
      { text: 'LinkedIn', link: 'https://linkedin.com/in/your-username' },
    ],
    
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/your-username' },
      { icon: 'twitter', link: 'https://twitter.com/your-username' },
    ],
    
    // Footer
    footer: {
      message: 'Built with VitePress and Vue.js',
      copyright: `Copyright © ${new Date().getFullYear()} Your Name`
    }
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