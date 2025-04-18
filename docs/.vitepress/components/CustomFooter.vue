<template>
  <footer class="custom-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-message">Built with VitePress and Vue.js</div>
        <div v-if="lastUpdated" class="last-updated">
          Last Updated: {{ formatDate(lastUpdated) }}
        </div>
        <div class="copyright">Copyright © {{ new Date().getFullYear() }} Haruki Yajima</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useData } from 'vitepress'

const { page } = useData()
const lastUpdated = page.value.lastUpdated

// 日付のフォーマット関数
function formatDate(timestamp) {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.custom-footer {
  padding: 2rem 0;
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}

.footer-message {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.last-updated {
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
  font-style: italic;
}

.copyright {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>