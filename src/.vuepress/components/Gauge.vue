<template>
  <div class="gauge-box">
    <div class="gauge-content">
      <h4 class="name">{{ name }}</h4>
      <h3 class="value">{{ value }}</h3>
    </div>
    <div class="outer-ring"></div>
  </div>
</template>

<script>
export default {
  name: 'Gauge',
  props: {
    name: {
      type: String,
    },
    value: {
      type: String | Number,
    },
  },
  methods: {},
};
</script>

<style scoped>
.gauge-box {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;
  margin: 0 auto;
  /* border: 1px red solid; */
}

.gauge-content {
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; */
  z-index: 10;

  width: 60%;
  height: 60%;
  background-color: #fff;
  box-shadow: 0 0 30px -10px #33b782;
  border-radius: 50%;

  text-align: center;
}

.gauge-content .name {
  width: 100%;
  /* height: 30%; */
}

.gauge-content .value {
  width: 100%;
  /* height: 30%; */
}

.outer-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  width: 80%;
  height: 80%;
  /* background: linear-gradient(to left, #fff, #000); */
  opacity: 0.5;

  /* border: 15px #28a674 solid; */

  border-radius: 50%;

  /* box-shadow: 2px 0 2px 5px red inset; */
  content: '';

  /* animation: rotate 1s linear infinite; */
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
