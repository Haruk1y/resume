<template>
  <div class="testimonials-container">
    <h2 class="testimonials-title">What People Say</h2>
    
    <div class="testimonials-slider" ref="slider">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial-card"
        :class="{ active: activeIndex === index }"
      >
        <div class="testimonial-content">
          <div class="quote-icon">
            <i class="fas fa-quote-left"></i>
          </div>
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-author">
            <div class="author-image" v-if="testimonial.image">
              <img :src="testimonial.image" :alt="testimonial.name" />
            </div>
            <div class="author-image placeholder" v-else>
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="author-info">
              <div class="author-name">{{ testimonial.name }}</div>
              <div class="author-title">{{ testimonial.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="testimonials-nav">
      <button
        v-for="(_, index) in testimonials"
        :key="index"
        class="nav-dot"
        :class="{ active: activeIndex === index }"
        @click="setActive(index)"
      ></button>
    </div>
    
    <div class="testimonials-arrows">
      <button class="nav-arrow prev" @click="prevTestimonial" aria-label="Previous testimonial">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="nav-arrow next" @click="nextTestimonial" aria-label="Next testimonial">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  testimonials: {
    type: Array,
    default: () => [
      {
        text: "John is an exceptional developer with a keen eye for detail. His ability to understand complex requirements and translate them into elegant code is remarkable. Working with him was a pleasure, and the results exceeded our expectations.",
        name: "Sarah Johnson",
        title: "CTO, TechInnovate",
        image: ""
      },
      {
        text: "I've had the pleasure of working with John on several projects. His technical expertise, combined with his collaborative approach, makes him an invaluable team member. He consistently delivers high-quality work and is always willing to go the extra mile.",
        name: "Michael Chen",
        title: "Product Manager, DigitalSolutions",
        image: ""
      },
      {
        text: "John's deep knowledge of frontend technologies and his commitment to creating accessible, user-friendly interfaces sets him apart. He's not just a developer; he's a problem solver who genuinely cares about the end-user experience.",
        name: "Emily Rodriguez",
        title: "UX Director, DesignCraft",
        image: ""
      }
    ]
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  }
});

const activeIndex = ref(0);
const slider = ref(null);
let autoplayTimer = null;

const setActive = (index) => {
  activeIndex.value = index;
  resetAutoplay();
};

const nextTestimonial = () => {
  activeIndex.value = (activeIndex.value + 1) % props.testimonials.length;
  resetAutoplay();
};

const prevTestimonial = () => {
  activeIndex.value = activeIndex.value === 0 ? props.testimonials.length - 1 : activeIndex.value - 1;
  resetAutoplay();
};

const startAutoplay = () => {
  if (props.autoplay && props.testimonials.length > 1) {
    autoplayTimer = setInterval(() => {
      nextTestimonial();
    }, props.interval);
  }
};

const resetAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    startAutoplay();
  }
};

onMounted(() => {
  startAutoplay();
});

onBeforeUnmount(() => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
  }
});
</script>

<style scoped>
.testimonials-container {
  position: relative;
  max-width: 900px;
  margin: 4rem auto;
  padding: 3rem 0;
}

.testimonials-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  color: #333;
}

.testimonials-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: #3498db;
  border-radius: 2px;
}

.testimonials-slider {
  position: relative;
  height: 350px;
  overflow: hidden;
}

.testimonial-card {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.testimonial-card.active {
  opacity: 1;
  transform: translateX(0);
}

.testimonial-content {
  background-color: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 700px;
}

.quote-icon {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2rem;
  color: rgba(52, 152, 219, 0.2);
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 2rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  border: 2px solid #3498db;
}

.author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-image.placeholder {
  background-color: #e8f4fc;
  color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.author-name {
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.author-title {
  font-size: 0.9rem;
  color: #777;
}

.testimonials-nav {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  border: none;
  padding: 0;
  transition: all 0.3s ease;
}

.nav-dot.active {
  background-color: #3498db;
  transform: scale(1.2);
}

.testimonials-arrows {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.nav-arrow {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.nav-arrow:hover {
  background-color: #3498db;
  color: white;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .testimonials-container {
    padding: 2rem 1rem;
  }
  
  .testimonial-content {
    padding: 2rem;
  }
  
  .testimonials-slider {
    height: 400px;
  }
  
  .testimonials-arrows {
    display: none;
  }
}
</style>