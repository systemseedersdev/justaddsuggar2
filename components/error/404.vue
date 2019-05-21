<template>
  <div class="error-404">
    <div class="item">
      <img src="/images/404.png"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>