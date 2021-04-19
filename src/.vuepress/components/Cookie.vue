<template>
  <div>
    <div v-html="content"></div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

import { decode } from 'js-base64';
import { session } from 'l-browser-storage';

export default {
  name: 'cookie',
  data() {
    return {
      content: '',
    };
  },
  mounted() {
    
    fetch('https://api.github.com/repos/js-cookie/js-cookie/readme')
      .then((res) => res.json())
      .then((res) => {
        const md = new MarkdownIt();

        const content = decode(res.content);

        const README = md.render(content);

        this.content = README;
      });
  },
};
</script>

<style scoped></style>
