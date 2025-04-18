<template>
  <div class="cv-container">
    <AnimatedHeader 
      name="矢島陽樹 / Haruki Yajima" 
      title="ML engineer" 
      bio="Undergraduate student in the Matsui Lab, Department of Information and Communication Engineering at the University of Tokyo🇯🇵"
      :social-links="[
        { name: 'GitHub', url: 'https://github.com/Haruk1y', icon: 'fab fa-github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/haruki-yajima-37b4a0337', icon: 'fab fa-linkedin' },
        { name: 'Twitter', url: 'https://twitter.com/Haruk1y_', icon: 'fab fa-twitter' },
        { name: 'Portfolio', url: '#', icon: 'fas fa-globe' }
      ]"
      :stats="[
        { value: '2+', label: 'Years Experience' },
        { value: '15+', label: 'Technologies' },
        { value: '3+', label: 'Projects Completed' },
        { value: '0', label: 'papers published' }
      ]"
    />

    <section class="section experience-section">
      <div class="container">
        <div class="section-title-container">
          <h2 class="section-title">Carrer</h2>
          <p class="section-subtitle">My academic journey and career highlights</p>
        </div>
        
        <ExperienceTimeline :experiences="[
        {
          period: '2024 Apr - Present',
          company: '東京大学 / the University of Tokyo',
          role: '工学部電子情報工学科 / Department of Information and Communication Engineering',
          description: 'Studying the foundations of computer architecture and low-level systems to cutting-edge deep learning applications.',
          skills: ['machine learning', 'ele', 'Literature']
        },
        {
            period: '2024 Nov - Present',
            company: 'Mind in a Device Co.',
            role: 'ML engineer intern',
            description: 'Mainly working as a machine learning engineer in projects related to 3D reconstruction.',
            skills: ['python', 'Machine learning', 'Computer Vision', '3D reconstruction', 'AWS', 'docker']
          },
          {
            period: '2024 Sep - 2024 Sep',
            company: 'freee Co.',
            role: 'Web enginner intern',
            description: 'As a member of the IAM team, worked around the authentication technology in the product.',
            skills: ['ruby on Rails', 'React', 'Typescript', 'authentication']
          },
          {
            period: '2024 Aug - 2024 Aug',
            company: 'Rakuten Group, Inc.',
            role: 'Web engineer intern',
            description: 'Worked with other interns to develop a web app for disaster prevention. I was mainly in charge of backend processing using django.',
            skills: ['javascript', 'python', 'django', 'System design']
          },
          {
            period: '2022 Apr - 2024 Mar',
            company: '東京大学 / the University of Tokyo',
            role: '理科一類 / Natural Sciences I',
            description: 'Studied a wide variety of subjects to gain a broad liberal arts background',
            skills: ['Liberal Arts', 'Science', 'Literature']
          }
        ]" />
      </div>
    </section>

    <section class="section projects-section">
      <div class="container">
        <div class="section-title-container">
          <h2 class="section-title">Projects</h2>
          <p class="section-subtitle">A selection of my recent work and personal projects</p>
        </div>
        
        <ProjectShowcase :projects="[
          {
            title: 'Historical Map',
            description: 'TBA',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
            demoLink: 'https://example.com/demo',
            codeLink: 'https://github.com/username/project',
            icon: 'fas fa-shopping-cart',
            iconColor: '#3498db',
            imageBgColor: '#e8f4fc'
          },
          {
            title: 'TBA',
            description: 'TBA',
            technologies: ['Vue.js', 'Firebase', 'Vuex', 'SCSS'],
            demoLink: 'https://example.com/demo',
            codeLink: 'https://github.com/username/project',
            icon: 'fas fa-tasks',
            iconColor: '#2ecc71',
            imageBgColor: '#e6f9ee'
          },
        ]" />
      </div>
    </section>

    <section class="section github-section">
      <div class="container">
        <ClientOnly>
          <GitHubStats username="Haruk1y" />
        </ClientOnly>
      </div>
    </section>

    <section class="section contact-section">
      <ContactForm 
        email="yajima.code@gmail.com"
        location="Tokyo, Japan"
        availability="Available for intern & freelance positions"
        :socialLinks="[
          { name: 'GitHub', url: 'https://github.com/Haruk1y', icon: 'fab fa-github' },
          { name: 'LinkedIn', url: 'https://linkedin.com/in/haruki-yajima-37b4a0337', icon: 'fab fa-linkedin' },
          { name: 'Twitter', url: 'https://twitter.com/Haruk1y_', icon: 'fab fa-twitter' }
        ]"
      />
    </section>

    <section class="custom-footer-section">
        <CustomFooter />
    </section>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --accent-color: #9b59b6;
  --text-color: #333;
  --light-text-color: #666;
  --bg-color: #fff;
  --light-bg-color: #f8f9fa;
  --border-radius: 10px;
  --box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.cv-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
}

.section {
  padding: 5rem 0;
}

.section:nth-child(odd) {
  background-color: var(--light-bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title-container {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: var(--primary-color);
  border-radius: 2px;
}

.section-subtitle {
  color: var(--light-text-color);
  max-width: 700px;
  margin: 0 auto;
}

.skills-visual {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
}

@media (max-width: 900px) {
  .skills-visual {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
// 必要なコンポーネントをインポート
import AnimatedHeader from './AnimatedHeader.vue'
import SkillsRadarChart from './SkillsRadarChart.vue'
import SkillsBars from './SkillsBars.vue'
import ExperienceTimeline from './ExperienceTimeline.vue'
import ProjectShowcase from './ProjectShowcase.vue'
import GitHubStats from './GithubStats.vue'
import Testimonials from './Testimonials.vue'
import ContactForm from './ContactForm.vue'
import ClientOnly from './ClientOnly.vue'
import CustomFooter from './CustomFooter.vue'
</script>