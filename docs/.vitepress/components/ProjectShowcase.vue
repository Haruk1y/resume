<template>
  <div class="projects-container">
    <div v-for="(project, index) in projects" :key="index" class="project-card">
      <div class="project-image" :style="{ backgroundColor: project.imageBgColor || '#f5f5f5' }">
        <div v-if="project.icon" class="project-icon" :style="{ color: project.iconColor || '#333' }">
          <i :class="project.icon"></i>
        </div>
        <img v-else-if="project.image" :src="project.image" :alt="project.title" />
        <div v-else class="project-placeholder">
          {{ project.title.charAt(0) }}
        </div>
      </div>
      <div class="project-details">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-tech">
          <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="tech-badge">
            {{ tech }}
          </span>
        </div>
        <div class="project-links">
          <a v-if="project.demoLink" :href="project.demoLink" target="_blank" rel="noopener noreferrer" class="project-link demo">
            Live Demo
          </a>
          <a v-if="project.codeLink" :href="project.codeLink" target="_blank" rel="noopener noreferrer" class="project-link code">
            View Code
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    default: () => [
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
    ]
  }
});
</script>

<style scoped>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.project-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.project-image {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-icon {
  font-size: 4rem;
}

.project-placeholder {
  font-size: 4rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.2);
}

.project-details {
  padding: 1.5rem;
}

.project-title {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.3rem;
  color: #333;
}

.project-description {
  margin-bottom: 1.25rem;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  padding: 0.25rem 0.75rem;
  background-color: #f5f5f5;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #555;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.project-link.demo {
  background-color: #3498db;
  color: white;
}

.project-link.demo:hover {
  background-color: #2980b9;
}

.project-link.code {
  background-color: #f5f5f5;
  color: #333;
}

.project-link.code:hover {
  background-color: #e0e0e0;
}

@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: 1fr;
  }
}
</style>