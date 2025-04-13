<template>
  <div class="cv-container">
    <AnimatedHeader 
      name="Your Name" 
      title="Frontend Developer & UX Designer" 
      bio="Passionate about creating beautiful, intuitive interfaces and exceptional user experiences. I combine technical expertise with creative problem-solving to build innovative web applications."
      :social-links="[
        { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'fab fa-github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'fab fa-linkedin' },
        { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'fab fa-twitter' },
        { name: 'Portfolio', url: '#', icon: 'fas fa-globe' }
      ]"
      :stats="[
        { value: '5+', label: 'Years Experience' },
        { value: '30+', label: 'Projects Completed' },
        { value: '15+', label: 'Technologies' },
        { value: '5+', label: 'Happy Clients' }
      ]"
    />

    <section class="section skills-section">
      <div class="container">
        <div class="section-title-container">
          <h2 class="section-title">My Skills</h2>
          <p class="section-subtitle">A combination of technical expertise and creative problem-solving</p>
        </div>
        
        <div class="skills-visual">
          <div class="skills-chart">
            <ClientOnly>
              <SkillsRadarChart :skills="[
                { name: 'JavaScript', level: 90 },
                { name: 'React', level: 85 },
                { name: 'Vue.js', level: 80 },
                { name: 'UI/UX Design', level: 75 },
                { name: 'Node.js', level: 70 },
                { name: 'TypeScript', level: 85 },
                { name: 'CSS/SCSS', level: 90 }
              ]" />
            </ClientOnly>
          </div>
          
          <div class="skills-bars">
            <ClientOnly>
              <SkillsBars />
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>

    <section class="section experience-section">
      <div class="container">
        <div class="section-title-container">
          <h2 class="section-title">Work Experience</h2>
          <p class="section-subtitle">My professional journey and career highlights</p>
        </div>
        
        <ExperienceTimeline :experiences="[
          {
            period: '2022 - Present',
            company: 'Example Tech Co.',
            role: 'Senior Frontend Developer',
            description: 'Leading the frontend development team and implementing new features using React and TypeScript.',
            skills: ['React', 'TypeScript', 'Redux', 'Styled Components']
          },
          {
            period: '2019 - 2022',
            company: 'Digital Solutions Inc.',
            role: 'Full Stack Developer',
            description: 'Developed and maintained web applications using Vue.js and Node.js.',
            skills: ['Vue.js', 'Node.js', 'Express', 'MongoDB']
          },
          {
            period: '2017 - 2019',
            company: 'Web Innovators',
            role: 'Junior Web Developer',
            description: 'Collaborated on various client projects, focusing on responsive design and frontend implementation.',
            skills: ['JavaScript', 'CSS', 'HTML', 'jQuery']
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
            title: 'E-commerce Platform',
            description: 'A fully functional e-commerce platform with product management, cart functionality, and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
            demoLink: 'https://example.com/demo',
            codeLink: 'https://github.com/username/project',
            icon: 'fas fa-shopping-cart',
            iconColor: '#3498db',
            imageBgColor: '#e8f4fc'
          },
          {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates and team functionality.',
            technologies: ['Vue.js', 'Firebase', 'Vuex', 'SCSS'],
            demoLink: 'https://example.com/demo',
            codeLink: 'https://github.com/username/project',
            icon: 'fas fa-tasks',
            iconColor: '#2ecc71',
            imageBgColor: '#e6f9ee'
          },
          {
            title: 'Weather Dashboard',
            description: 'An interactive weather dashboard that displays current and forecasted weather data for multiple locations.',
            technologies: ['JavaScript', 'Weather API', 'Chart.js', 'CSS Grid'],
            demoLink: 'https://example.com/demo',
            codeLink: 'https://github.com/username/project',
            icon: 'fas fa-cloud-sun',
            iconColor: '#f39c12',
            imageBgColor: '#fef5e7'
          }
        ]" />
      </div>
    </section>

    <section class="section github-section">
      <div class="container">
        <ClientOnly>
          <GitHubStats username="yourusername" />
        </ClientOnly>
      </div>
    </section>

    <section class="section testimonials-section">
      <div class="container">
        <div class="section-title-container">
          <h2 class="section-title">Testimonials</h2>
          <p class="section-subtitle">What people say about working with me</p>
        </div>
        <Testimonials />
      </div>
    </section>

    <section class="section contact-section">
      <ContactForm 
        email="your.email@example.com"
        location="Tokyo, Japan"
        availability="Available for freelance & full-time positions"
        :socialLinks="[
          { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'fab fa-github' },
          { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'fab fa-linkedin' },
          { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'fab fa-twitter' }
        ]"
      />
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
</script>