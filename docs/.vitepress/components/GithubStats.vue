<template>
  <div class="github-stats-container">
    <div class="stats-header">
      <h2 class="stats-title">GitHub Activity</h2>
      <a :href="`https://github.com/${username}`" target="_blank" rel="noopener noreferrer" class="github-profile-link">
        @{{ username }}
      </a>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-code-branch"></i>
        </div>
        <div class="stat-content">
          <div class="stat-value">{{ stats.repositories }}</div>
          <div class="stat-label">Repositories</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="stat-content">
          <div class="stat-value">{{ stats.stars }}</div>
          <div class="stat-label">Stars</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-code-commit"></i>
        </div>
        <div class="stat-content">
          <div class="stat-value">{{ stats.contributions }}</div>
          <div class="stat-label">Contributions</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-code"></i>
        </div>
        <div class="stat-content">
          <div class="stat-value">{{ stats.languages.length }}</div>
          <div class="stat-label">Languages</div>
        </div>
      </div>
    </div>
    
    <div class="languages-section">
      <h3 class="languages-title">Top Languages</h3>
      <div class="languages-bars">
        <div v-for="(language, index) in stats.languages.slice(0, 5)" :key="index" class="language-bar-container">
          <div class="language-details">
            <span class="language-name">{{ language.name }}</span>
            <span class="language-percentage">{{ language.percentage }}%</span>
          </div>
          <div class="language-bar-bg">
            <div class="language-bar" :style="{ width: `${language.percentage}%`, backgroundColor: language.color }"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="contribution-section">
      <h3 class="contribution-title">Contribution Activity</h3>
      <div class="contribution-chart">
        <!-- This would be where a real contribution graph would go -->
        <div class="placeholder-chart">
          <div v-for="i in 52" :key="i" class="placeholder-week">
            <div v-for="j in 7" :key="j" class="placeholder-day" :style="{ opacity: getRandomOpacity() }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  username: {
    type: String,
    default: 'github-username'
  },
  stats: {
    type: Object,
    default: () => ({
      repositories: 1,
      stars: 1,
      contributions: 1,
      languages: [
        { name: 'JavaScript', percentage: 45, color: '#f1e05a' },
        { name: 'TypeScript', percentage: 25, color: '#2b7489' },
        { name: 'HTML', percentage: 15, color: '#e34c26' },
        { name: 'CSS', percentage: 10, color: '#563d7c' },
        { name: 'Python', percentage: 5, color: '#3572A5' }
      ]
    })
  }
});

// Helper function to generate random opacity for the placeholder contribution graph
function getRandomOpacity() {
  const random = Math.random();
  if (random < 0.6) return 0.1;
  if (random < 0.75) return 0.3;
  if (random < 0.9) return 0.5;
  return 0.8;
}
</script>

<style scoped>
.github-stats-container {
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin: 3rem 0;
}

.stats-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.stats-title {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.github-profile-link {
  color: #0366d6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.github-profile-link:hover {
  color: #1277db;
  text-decoration: underline;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.stat-card {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  font-size: 1.75rem;
  color: #0366d6;
  margin-right: 1rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.stat-label {
  font-size: 0.875rem;
  color: #666;
}

.languages-section, .contribution-section {
  margin-top: 2.5rem;
}

.languages-title, .contribution-title {
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
  color: #333;
}

.languages-bars {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.language-bar-container {
  width: 100%;
}

.language-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.language-name {
  font-weight: 500;
  color: #333;
}

.language-percentage {
  color: #666;
}

.language-bar-bg {
  width: 100%;
  height: 8px;
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.language-bar {
  height: 100%;
  border-radius: 4px;
}

.contribution-chart {
  margin-top: 1rem;
}

.placeholder-chart {
  display: flex;
  gap: 2px;
  overflow-x: auto;
}

.placeholder-week {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.placeholder-day {
  width: 10px;
  height: 10px;
  background-color: #0366d6;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .github-stats-container {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>