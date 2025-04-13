import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomePageContent from '../components/HomePageContent.vue'
import AnimatedHeader from '../components/AnimatedHeader.vue'
import SkillsRadarChart from '../components/SkillsRadarChart.vue'
import SkillsBars from '../components/SkillsBars.vue'
import ExperienceTimeline from '../components/ExperienceTimeline.vue'
import ProjectShowcase from '../components/ProjectShowcase.vue'
import GitHubStats from '../components/GithubStats.vue'
import Testimonials from '../components/Testimonials.vue'
import ContactForm from '../components/ContactForm.vue'
import ClientOnly from '../components/ClientOnly.vue'
import './index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register all components
    app.component('HomePageContent', HomePageContent)
    app.component('AnimatedHeader', AnimatedHeader)
    app.component('SkillsRadarChart', SkillsRadarChart)
    app.component('SkillsBars', SkillsBars)
    app.component('ExperienceTimeline', ExperienceTimeline)
    app.component('ProjectShowcase', ProjectShowcase)
    app.component('GitHubStats', GitHubStats)
    app.component('Testimonials', Testimonials)
    app.component('ContactForm', ContactForm)
    app.component('ClientOnly', ClientOnly)
  }
} satisfies Theme