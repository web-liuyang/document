<template>
  <div class="base-box">
    <textarea ref="oTextarea" class="textarea" placeholder="base64放在这里，记得把引号去掉！" v-model="baseValue" />
    <div class="transfrom-btn" @click="handleClickChangeColor">点我转换</div>
    <div style="white-space: pre-wrap; line-height:30px">{{ resolveValue }}</div>
  </div>
</template>

<script>
const decodeBase = (value) => {
  if (!value)
    return {
      code: 202,
      data: '',
      msg: '参数为空',
    };
  try {
    return {
      code: 200,
      data: decodeURIComponent(
        atob(value)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      ),
      msg: 'ok',
    };
  } catch (err) {
    return {
      code: 201,
      data: '',
      msg: '解析错误',
    };
  }
};

export default {
  name: 'Base64',
  data() {
    return {
      baseValue: '',
      resolveValue: '',
      isChangeColor: false,
      oTextarea: null,
    };
  },
  methods: {
    handleClickChangeColor() {
      console.log();
      const data = decodeBase(this.baseValue);
      switch (data.code) {
        case 200:
          this.resolveValue = decodeBase(this.baseValue).data;
          break;
        case 201:
          this.resolveValue = '你别乱传参数';
          break;
        case 202:
          this.resolveValue = '别以为传个空我就不知道了';
          break;
      }
    },
  },
};
</script>

<style>
.base-box {
  width: 100% !important;
  margin-top: 20px;
}
.textarea {
  box-sizing: border-box;

  width: 100%;
  height: 150px;
  padding: 20px;
  border: 1px #eee solid;
  border-radius: 5px;

  outline: none;
}
.textarea:focus {
  /* box-shadow: 0 0 3px 0 var(--color); */
  animation: identifier 3s linear infinite alternate;
}
.transfrom-btn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin: 20px 0;
  background: #4caf59;
  border-radius: 5px;

  font-weight: 800;
  color: #fff;
  text-align: center;
}
@keyframes identifier {
  0% {
    box-shadow: 0 0 5px 0 red;
  }
  50% {
    box-shadow: 0 0 5px 0 green;
  }
  100% {
    box-shadow: 0 0 5px 0 rebeccapurple;
  }
}
</style>
