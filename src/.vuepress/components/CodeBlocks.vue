<template>
  <div class="code-blocks">
    <slot />
  </div>
</template>

<script>
// import { session, cookie, local } from 'l-storage';
// import { encode, decode } from 'js-base64';

// const {session} = require('l-storage');

export default {
  name: 'CodeBlocks',
  data() {
    return {};
  },
  created() {
    // console.log(session)
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
