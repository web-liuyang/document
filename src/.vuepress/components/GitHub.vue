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
import { user } from "@api";
import { splitRepos } from "@utils";
import Gauge from "./Gauge";

export default {
  name: "GitHub",
  components: {
    Gauge,
  },
  data() {
    return {
      Followers: 0,
      Repositories: 0,
      Forks: 0,
      Stars: 0,
    };
  },
  mounted() {
    this.init();
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
          this.setGitHubData({
            Followers: data.followers,
            Repositories: data.public_repos,
            Forks: this.Forks,
            Stars: this.Stars,
          });
        })
        .catch(err => {
          this.setGitHubData({
            Followers: "error",
            Repositories: "error",
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
          this.setGitHubData({
            Followers: this.Followers,
            Repositories: this.Repositories,
            Forks: repos.reduce((prev, item, index, arr) => prev + item.forks_count, 0),
            Stars: repos.reduce((prev, item, index, arr) => prev + item.stargazers_count, 0),
          });
        })
        .catch(err => {
          this.setGitHubData({
            Followers: this.Followers,
            Repositories: this.Repositories,
            Forks: "error",
            Stars: "error",
          });
        });
    },

    setGitHubData({ Followers, Repositories, Forks, Stars }) {
      this.Followers = Followers;
      this.Repositories = Repositories;
      this.Forks = Forks;
      this.Stars = Stars;
    },
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
