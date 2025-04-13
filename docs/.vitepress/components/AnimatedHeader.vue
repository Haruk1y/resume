<template>
  <div class="header-container">
    <div class="header-background"></div>
    <div class="header-content">
      <div class="profile-section">
        <div class="profile-image-container">
          <div class="profile-image">
            <img v-if="profileImage" :src="profileImage" :alt="name" />
            <div v-else class="profile-placeholder">
              {{ name.charAt(0) }}
            </div>
          </div>
        </div>
        <div class="profile-info">
          <h1 class="name">{{ name }}</h1>
          <p class="title">{{ title }}</p>
          <p class="bio">{{ bio }}</p>
          <div class="social-links">
            <a v-for="(link, index) in socialLinks" :key="index" 
               :href="link.url" target="_blank" rel="noopener noreferrer"
               class="social-link" :title="link.name">
              <i :class="link.icon"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="header-stats">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <span class="scroll-text">Scroll Down</span>
      <div class="scroll-arrow"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'John Doe'
  },
  title: {
    type: String,
    default: 'Software Engineer & UX Designer'
  },
  bio: {
    type: String,
    default: 'Passionate about creating elegant solutions to complex problems. Focused on frontend development, user experience, and scalable architecture.'
  },
  profileImage: {
    type: String,
    default: ''
  },
  socialLinks: {
    type: Array,
    default: () => [
      { name: 'GitHub', url: 'https://github.com/username', icon: 'fab fa-github' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'fab fa-linkedin' },
      { name: 'Twitter', url: 'https://twitter.com/username', icon: 'fab fa-twitter' },
      { name: 'Portfolio', url: 'https://portfolio.com', icon: 'fas fa-globe' }
    ]
  },
  stats: {
    type: Array,
    default: () => [
      { value: '5+', label: 'Years Experience' },
      { value: '25+', label: 'Projects Completed' },
      { value: '15+', label: 'Happy Clients' },
      { value: '10+', label: 'Technologies' }
    ]
  }
});
</script>

<style scoped>
.header-container {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: white;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2c3e50, #4ca1af);
  z-index: -1;
}

.header-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(76, 161, 175, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(44, 62, 80, 0.6) 0%, transparent 40%);
}

.header-content {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.profile-image-container {
  position: relative;
}

.profile-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.2);
  animation: pulse 2s infinite alternate;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

@keyframes pulse {
  from { box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); }
  to { box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3); }
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 4rem;
  font-weight: bold;
}

.profile-info {
  flex: 1;
}

.name {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  position: relative;
  display: inline-block;
}

.name::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: #4ca1af;
  border-radius: 2px;
}

.title {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 1.5rem;
  opacity: 0.9;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
  max-width: 600px;
}

.social-links {
  display: flex;
  gap: 1.2rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 255, 255, 0.2);
}

.header-stats {
  display: flex;
  justify-content: space-between;
  max-width: 800px;
}

.stat-item {
  text-align: center;
  animation: slideUp 1s ease-out;
  animation-fill-mode: both;
}

.stat-item:nth-child(1) { animation-delay: 0.1s; }
.stat-item:nth-child(2) { animation-delay: 0.3s; }
.stat-item:nth-child(3) { animation-delay: 0.5s; }
.stat-item:nth-child(4) { animation-delay: 0.7s; }

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  position: relative;
  display: inline-block;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.7;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40% { transform: translateY(-20px) translateX(-50%); }
  60% { transform: translateY(-10px) translateX(-50%); }
}

.scroll-text {
  font-size: 0.8rem;
  opacity: 0.7;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
}

@media (max-width: 900px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  
  .name::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .bio {
    margin-left: auto;
    margin-right: auto;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .header-stats {
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .stat-item {
    width: 40%;
  }
}
</style>