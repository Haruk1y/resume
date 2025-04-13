<template>
  <div class="timeline-container">
    <div v-for="(experience, index) in experiences" :key="index" 
         :class="{'timeline-item': true, 'left': index % 2 === 0, 'right': index % 2 !== 0}">
      <div class="timeline-content">
        <div class="timeline-date">{{ experience.period }}</div>
        <div class="timeline-company">{{ experience.company }}</div>
        <div class="timeline-role">{{ experience.role }}</div>
        <div class="timeline-description">{{ experience.description }}</div>
        <div class="timeline-skills">
          <span v-for="(skill, skillIndex) in experience.skills" :key="skillIndex" class="skill-tag">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experiences: {
    type: Array,
    default: () => [
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
    ]
  }
});
</script>

<style scoped>
.timeline-container {
  position: relative;
  max-width: 1200px;
  margin: 3rem auto;
}

.timeline-container::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #34495e;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  border-radius: 3px;
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  margin-bottom: 3rem;
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border: 4px solid #3498db;
  border-radius: 50%;
  top: 0;
  z-index: 1;
}

.left {
  left: 0;
}

.right {
  left: 50%;
}

.left::after {
  right: -14px;
}

.right::after {
  left: -14px;
}

.timeline-content {
  padding: 20px 25px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.timeline-date {
  font-weight: bold;
  color: #3498db;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.timeline-company {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
}

.timeline-role {
  font-style: italic;
  color: #555;
  margin-bottom: 0.75rem;
}

.timeline-description {
  margin-bottom: 1rem;
  color: #333;
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.25rem 0.75rem;
  background-color: #e8f4fc;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #3498db;
}

@media screen and (max-width: 768px) {
  .timeline-container::after {
    left: 31px;
  }
  
  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
  
  .left::after, .right::after {
    left: 18px;
  }
  
  .right {
    left: 0;
  }
}
</style>