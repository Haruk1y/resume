<template>
  <div class="skills-container">
    <div class="skills-header">
      <h2 class="skills-title">Technical Skills</h2>
      <p class="skills-subtitle">A comprehensive overview of my technical capabilities and expertise levels</p>
    </div>
    
    <div class="skills-categories">
      <div v-for="(category, index) in categories" :key="index" class="skills-category">
        <h3 class="category-title">{{ category.name }}</h3>
        
        <div class="skills-list">
          <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex" 
               class="skill-item" :class="{'animate': animate}">
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar" 
                   :style="{ width: animate ? `${skill.level}%` : '0%', backgroundColor: skill.color || getCategoryColor(index) }"></div>
            </div>
            <div class="skill-icons">
              <span v-if="skill.icon" class="skill-icon">
                <i :class="skill.icon"></i>
              </span>
              <span v-if="skill.years" class="skill-years">{{ skill.years }}+ years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    default: () => [
      {
        name: 'Frontend Development',
        color: '#3498db',
        skills: [
          { name: 'HTML/CSS', level: 95, years: 5, icon: 'fab fa-html5' },
          { name: 'JavaScript', level: 90, years: 5, icon: 'fab fa-js' },
          { name: 'React', level: 85, years: 4, icon: 'fab fa-react' },
          { name: 'Vue.js', level: 80, years: 3, icon: 'fab fa-vuejs' },
          { name: 'TypeScript', level: 75, years: 3, icon: 'fas fa-code' }
        ]
      },
      {
        name: 'Backend Development',
        color: '#2ecc71',
        skills: [
          { name: 'Node.js', level: 85, years: 4, icon: 'fab fa-node-js' },
          { name: 'Express', level: 80, years: 4, icon: 'fas fa-server' },
          { name: 'REST API Design', level: 90, years: 4, icon: 'fas fa-exchange-alt' },
          { name: 'GraphQL', level: 75, years: 2, icon: 'fas fa-project-diagram' },
          { name: 'SQL', level: 70, years: 3, icon: 'fas fa-database' }
        ]
      },
      {
        name: 'Tools & Others',
        color: '#9b59b6',
        skills: [
          { name: 'Git', level: 95, years: 5, icon: 'fab fa-git-alt' },
          { name: 'Docker', level: 80, years: 3, icon: 'fab fa-docker' },
          { name: 'CI/CD', level: 75, years: 3, icon: 'fas fa-sync-alt' },
          { name: 'Agile/Scrum', level: 90, years: 4, icon: 'fas fa-tasks' },
          { name: 'UI/UX Design', level: 70, years: 3, icon: 'fas fa-paint-brush' }
        ]
      }
    ]
  },
  animateOnScroll: {
    type: Boolean,
    default: true
  }
});

const animate = ref(false);
let observer = null;

const getCategoryColor = (index) => {
  const colors = ['#3498db', '#2ecc71', '#9b59b6', '#e74c3c', '#f39c12'];
  return colors[index % colors.length];
};

const handleIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    animate.value = true;
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }
};

onMounted(() => {
  if (props.animateOnScroll && window.IntersectionObserver) {
    observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.1
    });
    
    const container = document.querySelector('.skills-container');
    if (container) {
      observer.observe(container);
    }
  } else {
    // If IntersectionObserver is not supported or animateOnScroll is false
    setTimeout(() => {
      animate.value = true;
    }, 500);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.skills-container {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1.5rem;
}

.skills-header {
  text-align: center;
  margin-bottom: 3rem;
}

.skills-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.75rem;
}

.skills-subtitle {
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}

.skills-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.skills-category {
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skills-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.category-title {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: currentColor;
  border-radius: 1.5px;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  width: 100%;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
  color: #333;
}

.skill-level {
  color: #666;
}

.skill-bar-bg {
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.skill-bar {
  height: 100%;
  width: 0;
  border-radius: 4px;
  transition: width 1s ease-out;
}

.skill-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-icon {
  color: #666;
  font-size: 1.1rem;
}

.skill-years {
  font-size: 0.85rem;
  color: #888;
  font-style: italic;
}

@media (max-width: 768px) {
  .skills-categories {
    grid-template-columns: 1fr;
  }
}
</style>