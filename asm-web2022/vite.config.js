const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'home.html'),
        blog: resolve(__dirname, 'blog.html'),
        work: resolve(__dirname, ' work.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  }
})