<template>
  <div class="portfolio-container">
    <!-- ヒーローセクション -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-main">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="greeting">Hello, I'm</span>
              <span class="name">Haruki Yajima</span>
            </h1>
            <p class="hero-subtitle">ML Engineer & Student</p>
            <div class="hero-description">
              <p>Undergraduate student at the University of Tokyo, Matsui Lab.</p>
              <p>Focusing on learning-enhanced data structures/algorithms.</p>
            </div>
            <div class="hero-cta">
              <a href="#contact" class="cta-button primary">Get in Touch</a>
              <a href="#projects" class="cta-button secondary">View Projects</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="profile-image">
              <img :src="profileImage" alt="Haruki Yajima" />
            </div>
          </div>
        </div>
        <div class="hero-social">
          <a href="https://github.com/Haruk1y" target="_blank" rel="noopener" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/haruki-yajima-37b4a0337" target="_blank" rel="noopener" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/Haruk1y_" target="_blank" rel="noopener" class="social-link">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div class="hero-background">
        <div class="gradient-sphere"></div>
        <div class="gradient-sphere"></div>
      </div>
    </section>

    <!-- プロジェクトセクション -->
    <section id="projects" class="section projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">A selection of my recent work</p>
        </div>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-content">
              <h3 class="project-title">Historical Map</h3>
              <p class="project-description">TBA</p>
              <div class="project-tech">
                <span class="tech-tag">React</span>
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">MongoDB</span>
              </div>
              <div class="project-links">
                <a href="#" class="project-link">View Project</a>
                <a href="#" class="project-link">Source Code</a>
              </div>
            </div>
          </div>
          <!-- 他のプロジェクトカードも同様に追加 -->
        </div>
      </div>
    </section>

    <!-- キャリアセクション -->
    <section id="career" class="section career-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Career</h2>
          <p class="section-subtitle">My academic journey and experiences</p>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-header">
                <span class="timeline-period">2024 Apr - Present</span>
                <h3 class="timeline-title">工学部電子情報工学科</h3>
                <p class="timeline-subtitle">東京大学 / the University of Tokyo</p>
              </div>
              <p class="timeline-description">
                Studying the foundations of computer architecture and low-level systems to cutting-edge deep learning applications.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Machine Learning</span>
                <span class="timeline-tag">Computer Vision</span>
                <span class="timeline-tag">Deep Learning</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-header">
                <span class="timeline-period">2024 Nov - Present</span>
                <h3 class="timeline-title">ML Engineer Intern</h3>
                <p class="timeline-subtitle">Mind in a Device Co.</p>
              </div>
              <p class="timeline-description">
                Mainly working as a machine learning engineer in projects related to 3D reconstruction.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Python</span>
                <span class="timeline-tag">Computer Vision</span>
                <span class="timeline-tag">3D Reconstruction</span>
                <span class="timeline-tag">AWS</span>
                <span class="timeline-tag">Docker</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-header">
                <span class="timeline-period">2024 Sep - 2024 Sep</span>
                <h3 class="timeline-title">Web Engineer Intern</h3>
                <p class="timeline-subtitle">freee Co.</p>
              </div>
              <p class="timeline-description">
                As a member of the IAM team, worked around the authentication technology in the product.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Ruby on Rails</span>
                <span class="timeline-tag">React</span>
                <span class="timeline-tag">TypeScript</span>
                <span class="timeline-tag">Authentication</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-header">
                <span class="timeline-period">2024 Aug - 2024 Aug</span>
                <h3 class="timeline-title">Web Engineer Intern</h3>
                <p class="timeline-subtitle">Rakuten Group, Inc.</p>
              </div>
              <p class="timeline-description">
                Worked with other interns to develop a web app for disaster prevention. I was mainly in charge of backend processing using django.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">JavaScript</span>
                <span class="timeline-tag">Python</span>
                <span class="timeline-tag">Django</span>
                <span class="timeline-tag">System Design</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-header">
                <span class="timeline-period">2022 Apr - 2024 Mar</span>
                <h3 class="timeline-title">理科一類</h3>
                <p class="timeline-subtitle">東京大学 / the University of Tokyo</p>
              </div>
              <p class="timeline-description">
                Studied a wide variety of subjects to gain a broad liberal arts background.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Liberal Arts</span>
                <span class="timeline-tag">Science</span>
                <span class="timeline-tag">Literature</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- お問い合わせセクション -->
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get in Touch</h2>
          <p class="section-subtitle">Let's discuss potential opportunities</p>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <a href="mailto:yajima.code@gmail.com">yajima.code@gmail.com</a>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Tokyo, Japan</span>
            </div>
          </div>
          <div class="contact-form">
            <ContactForm 
              email="yajima.code@gmail.com"
              location="Tokyo, Japan"
              availability="Available for intern & freelance positions"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.portfolio-container {
  font-family: var(--vp-font-family-base);
  color: var(--text-color);
  line-height: 1.6;
}

/* ヒーローセクション */
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background: transparent;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 2.5rem;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero-image {
  flex-shrink: 0;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--primary-color);
  box-shadow: var(--box-shadow);
  transition: var(--transition-base);
}

.profile-image:hover {
  transform: scale(1.02);
  box-shadow: var(--box-shadow-hover);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.greeting {
  font-size: 1.25rem;
  color: var(--text-color-light);
}

.name {
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-color-light);
  margin-bottom: 1.25rem;
}

.hero-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 600px;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.cta-button {
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition-base);
}

.cta-button.primary {
  background: var(--primary-color);
  color: white;
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--box-shadow);
}

.hero-social {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  font-size: 1.5rem;
  color: var(--text-color);
  transition: var(--transition-base);
}

.social-link:hover {
  color: var(--primary-color);
  transform: translateY(-2px);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.gradient-sphere {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
}

.gradient-sphere:nth-child(1) {
  width: 600px;
  height: 600px;
  background: var(--primary-color);
  top: -200px;
  right: -100px;
}

.gradient-sphere:nth-child(2) {
  width: 400px;
  height: 400px;
  background: var(--accent-color);
  bottom: -100px;
  left: -100px;
}

/* セクション共通スタイル */
.section {
  padding: 6rem 2rem;
  position: relative;
  background: transparent;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
  padding-top: 1rem;
}

.section-title {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--text-color-light);
  margin-top: 1.5rem;
}

/* プロジェクトセクション */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition-base);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-hover);
}

.project-content {
  padding: 2rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.project-description {
  color: var(--text-color-light);
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: var(--bg-color-alt);
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition-base);
}

.project-link:hover {
  color: var(--accent-color);
}

/* お問い合わせセクション */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
}

.contact-item i {
  color: var(--primary-color);
  font-size: 1.5rem;
}

/* レスポンシブデザイン */
@media (max-width: 1024px) {
  .hero-main {
    gap: 2rem;
  }

  .profile-image {
    width: 250px;
    height: 250px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-main {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }

  .hero-text {
    max-width: 100%;
  }

  .profile-image {
    width: 200px;
    height: 200px;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-social {
    justify-content: center;
  }

  .section {
    padding: 4rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-header {
    margin-bottom: 3.5rem;
  }
  
  .hero-cta {
    flex-direction: column;
  }
  
  .cta-button {
    width: 100%;
    text-align: center;
  }
}

/* キャリアセクション */
.career-section {
  background: transparent;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, 
    var(--primary-color) 0%,
    var(--accent-color) 100%
  );
  opacity: 0.15;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-content {
  position: relative;
  background: var(--bg-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition-base);
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-hover);
}

.timeline-header {
  margin-bottom: 1rem;
}

.timeline-period {
  display: inline-block;
  font-size: 0.875rem;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: var(--primary-color-light);
  border-radius: var(--border-radius-sm);
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-color);
}

.timeline-subtitle {
  font-size: 1.125rem;
  color: var(--text-color-light);
  margin-bottom: 1rem;
}

.timeline-description {
  color: var(--text-color);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.timeline-tag {
  padding: 0.25rem 0.75rem;
  background: var(--bg-color-alt);
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  color: var(--text-color-light);
  transition: var(--transition-base);
}

.timeline-tag:hover {
  background: var(--primary-color-light);
  color: var(--primary-color);
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .timeline::before {
    left: 1rem;
  }

  .timeline-content {
    margin-left: 2rem;
  }

  .timeline-title {
    font-size: 1.25rem;
  }

  .timeline-subtitle {
    font-size: 1rem;
  }
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import ContactForm from './ContactForm.vue'
import profileImage from '../public/images/profile.png'

// スクロールアニメーション
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1
  })

  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('animate-on-scroll')
    observer.observe(section)
  })
})
</script>