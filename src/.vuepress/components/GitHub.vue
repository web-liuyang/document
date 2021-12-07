<template>
  <div>
    <div class="title"><a href="https://github.com/web-liuyang">GitHub</a></div>
    <div class="github-box">
      <Gauge name="Followers" :value="Followers || 'loading'" />
      <Gauge name="Repositories" :value="Repositories || 'loading'" />
      <Gauge name="Forks" :value="Forks || 'loading'" />
      <Gauge name="Stars" :value="Stars || 'loading'" />
    </div>
  </div>
</template>

<script>
import { session } from "l-browser-storage";
import { user } from "@api";
import { splitRepos } from "@utils";

import Gauge from "./Gauge";

export default {
  name: "GitHub",
  data() {
    return {
      Followers: 0,
      Repositories: 0,
      Forks: 0,
      Stars: 0,
    };
  },
  async mounted() {
    const userinfo = session.get("userinfo", { decode: true });
    const repos = session.get("repos", { decode: true });
    if (!userinfo || !repos) {
      await this.init();
    }
    this.getGitHubData();
  },
  methods: {
    async init() {
      await this.getUserinfo();
      await this.getRepos();
    },

    async getUserinfo() {
      const res = await user.getUserinfo();
      if (!res) return;
      session.set("userinfo", res.data, { encode: true });
    },

    async getRepos() {
      const res = await user.getRepos();
      if (!res) return;
      session.set("repos", res.data, { encode: true });
    },
    getGitHubData() {
      const userinfo = session.get("userinfo", { decode: true });
      let repos = session.get("repos", { decode: true });

      if (!userinfo || !repos) {
        return this.setGitHubData({
          Followers: "error",
          Repositories: "error",
          Forks: "error",
          Stars: "error",
        });
      }

      repos = splitRepos(repos)[0];

      this.setGitHubData({
        Followers: userinfo.followers,
        Repositories: repos.length,
        Forks: repos.reduce((prev, item, index, arr) => prev + item.forks_count, 0),
        Stars: repos.reduce((prev, item, index, arr) => prev + item.stargazers_count, 0),
      });
    },

    setGitHubData({ Followers, Repositories, Forks, Stars }) {
      this.Followers = Followers;
      this.Repositories = Repositories;
      this.Forks = Forks;
      this.Stars = Stars;
    },
  },
  components: {
    Gauge,
  },
};
</script>

<style scoped>
.title {
  margin: 50px 0;

  text-align: center;
  font-size: 40px;
  font-weight: 600;
}

.github-box {
  position: relative;
  z-index: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: none;
}

@media screen and (max-width: 900px) and (min-width: 451px) {
  .github-box {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 450px) {
  .github-box {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: none;
  }
}
</style>
