<template>
  <div class="code-blocks">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CodeBlocks',
  data() {
    return {};
  },
};
</script>

<style>
.code-blocks {
  padding: 3rem 2rem;
  background: #ebedf0;
  font-size: 30px;
  font-weight: 600;
}
</style>
