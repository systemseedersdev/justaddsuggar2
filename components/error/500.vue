<template>
  <div class="error-500">
    <h1>Internal Server Error</h1>
    <p>Please contact the site administrator.</p>
  </div>
</template>
<script>
export default {
  name: 'error-500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>