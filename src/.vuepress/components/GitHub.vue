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
  mounted() {
    const userinfo = session.get("userinfo", { decode: true });
    const repos = session.get("repos", { decode: true });
    if (!userinfo || !repos) {
      this.init();
    } else {
      this.getGitHubData();
    }
  },
  methods: {
    init() {
      this.getUserinfo();
      this.getRepos();
    },

    getUserinfo() {
      user
        .getUserinfo()
        .then(res => {
          const data = res.data;
          session.set("userinfo", data, { encode: true });
          this.setGitHubData({
            Followers: data.followers,
            Repositories: this.Repositories,
            Forks: this.Forks,
            Stars: this.Stars,
          });
        })
        .catch(err => {
          session.set("userinfo", null, { encode: true });
          this.setGitHubData({
            Followers: "error",
            Repositories: this.Repositories,
            Forks: this.Forks,
            Stars: this.Stars,
          });
        });
    },

    getRepos() {
      user
        .getRepos()
        .then(res => {
          const data = res.data;
          const repos = splitRepos(data)[0];
          session.set("repos", data, { encode: true });
          this.setGitHubData({
            Followers: this.Followers,
            Repositories: repos.length,
            Forks: repos.reduce((prev, item, index, arr) => prev + item.forks_count, 0),
            Stars: repos.reduce((prev, item, index, arr) => prev + item.stargazers_count, 0),
          });
        })
        .catch(err => {
          session.set("repos", null, { encode: true });
          this.setGitHubData({
            Followers: this.Followers,
            Repositories: "error",
            Forks: "error",
            Stars: "error",
          });
        });
    },

    getGitHubData() {
      const userinfo = session.get("userinfo", { decode: true });
      let repos = session.get("repos", { decode: true });

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
