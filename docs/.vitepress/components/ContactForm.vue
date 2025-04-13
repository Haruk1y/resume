<template>
  <div class="contact-section">
    <div class="contact-container">
      <div class="contact-info">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-description">
          I'm currently available for freelance work, full-time positions, or consulting projects.
          Feel free to reach out if you want to collaborate or have any questions.
        </p>
        
        <div class="contact-methods">
          <div class="contact-method">
            <div class="method-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="method-details">
              <h3 class="method-title">Email</h3>
              <p class="method-value">{{ email }}</p>
            </div>
          </div>
          
          <div class="contact-method">
            <div class="method-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="method-details">
              <h3 class="method-title">Location</h3>
              <p class="method-value">{{ location }}</p>
            </div>
          </div>
          
          <div class="contact-method">
            <div class="method-icon">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <div class="method-details">
              <h3 class="method-title">Availability</h3>
              <p class="method-value">{{ availability }}</p>
            </div>
          </div>
        </div>
        
        <div class="social-links">
          <a v-for="(link, index) in socialLinks" :key="index" 
             :href="link.url" target="_blank" rel="noopener noreferrer"
             class="social-link" :title="link.name">
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>
      
      <div class="contact-form-container">
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-header">
            <h3 class="form-title">Send a Message</h3>
            <p class="form-subtitle">I'll get back to you as soon as possible</p>
          </div>
          
          <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              class="form-input" 
              placeholder="Your name"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              class="form-input" 
              placeholder="Your email address"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <input 
              type="text" 
              id="subject" 
              v-model="formData.subject" 
              class="form-input" 
              placeholder="What is this regarding?"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              class="form-textarea" 
              placeholder="Your message here..."
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" class="submit-button" :disabled="submitting">
            <span v-if="!submitting">Send Message</span>
            <span v-else class="loading-spinner"></span>
          </button>
          
          <div v-if="formStatus.show" class="form-status" :class="formStatus.type">
            {{ formStatus.message }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const emit = defineEmits(['form-submitted']);

const props = defineProps({
  email: {
    type: String,
    default: 'your.email@example.com'
  },
  location: {
    type: String,
    default: 'Tokyo, Japan'
  },
  availability: {
    type: String,
    default: 'Open to opportunities'
  },
  socialLinks: {
    type: Array,
    default: () => [
      { name: 'GitHub', url: 'https://github.com/username', icon: 'fab fa-github' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'fab fa-linkedin' },
      { name: 'Twitter', url: 'https://twitter.com/username', icon: 'fab fa-twitter' }
    ]
  }
});

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitting = ref(false);
const formStatus = reactive({
  show: false,
  type: '',
  message: ''
});

const submitForm = async () => {
  submitting.value = true;
  formStatus.show = false;
  
  try {
    // In a real implementation, you would send the form data to a server
    // This is a simulated API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate a successful submission
    formStatus.show = true;
    formStatus.type = 'success';
    formStatus.message = 'Your message has been sent! I\'ll get back to you soon.';
    
    // Reset the form
    formData.name = '';
    formData.email = '';
    formData.subject = '';
    formData.message = '';
    
    // Emit the form submitted event
    emit('form-submitted', { success: true });
  } catch (error) {
    // Simulate an error
    formStatus.show = true;
    formStatus.type = 'error';
    formStatus.message = 'There was an error sending your message. Please try again later.';
    
    emit('form-submitted', { success: false, error });
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>
.contact-section {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 0 1.5rem;
}

.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 50px;
  height: 4px;
  background-color: #3498db;
  border-radius: 2px;
}

.section-description {
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 500px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.method-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(52, 152, 219, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3498db;
  font-size: 1.5rem;
}

.method-title {
  font-size: 1.1rem;
  margin: 0 0 0.25rem;
  color: #333;
}

.method-value {
  margin: 0;
  color: #666;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  color: #3498db;
}

.contact-form-container {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
}

.contact-form {
  padding: 2.5rem;
}

.form-header {
  margin-bottom: 2rem;
  text-align: center;
}

.form-title {
  font-size: 1.75rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.form-subtitle {
  color: #7f8c8d;
  margin: 0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #34495e;
  font-weight: 500;
  font-size: 0.95rem;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-button:hover {
  background-color: #2980b9;
}

.submit-button:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-status {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
}

.form-status.success {
  background-color: rgba(46, 204, 113, 0.1);
  color: #27ae60;
  border: 1px solid rgba(46, 204, 113, 0.3);
}

.form-status.error {
  background-color: rgba(231, 76, 60, 0.1);
  color: #e74c3c;
  border: 1px solid rgba(231, 76, 60, 0.3);
}

@media (max-width: 900px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    text-align: center;
  }
  
  .section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .section-description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .contact-method {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>