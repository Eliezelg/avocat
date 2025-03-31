export default {
  server: {
    host: true, // listen on all addresses
    port: 5000,
    hmr: {
      clientPort: 443,
      host: '0.0.0.0'
    },
    // Allow connections from any host
    cors: true,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 5000
  }
};