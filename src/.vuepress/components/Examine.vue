<template>
  <div v-if="show" ref="modal" class="modal-box" :style="{ top, left }">
    <div class="modal">
      <p>考个简单的问题：我叫什么名字?</p>
      <div class="result-input">
        <input class="input" type="text" v-model="name" />
        <button class="btn" @click="handleClickVerify">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 0,
      left: 0,
      name: '',
      show: true,
    };
  },
  created() {},
  mounted() {
    const isProblem = localStorage.getItem('isProblem');
    console.log(isProblem);
    if (isProblem) {
      this.show = false;
    } else {
      this.removeScroll();
      this.top = this.$refs.modal.offsetTop;
      this.left = this.$refs.modal.offsetLeft;
      this.show = true;
    }
  },
  methods: {
    handleClickVerify() {
      if (this.name !== '刘洋') {
        alert('连我名字都记不住？');
      } else {
        alert('nice!');
        this.addScroll();
        this.show = false;
        localStorage.setItem('isProblem', true);
      }
    },
    addScroll() {
      document.body.style.overflow = 'auto';
    },
    removeScroll() {
      document.body.style.overflow = 'hidden';
    },
  },
};
</script>
<style>
.modal-box {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
.modal-box .modal {
  position: absolute;
  width: 1200px;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  padding: 10px 20px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
}

@media screen and (max-width: 480px) {
  .modal-box .modal {
    width: 300px;
  }
  .modal-box .modal .result-input .input {
    width: 70% !important;
  }
  .modal-box .modal .result-input .btn {
    width: 30% !important;
  }
}

.modal-box .modal .result-input {
  display: flex;
  justify-content: center;
  height: 45px;
}
.modal-box .modal .result-input .input {
  width: 200px;
}
.modal-box .modal .result-input .btn {
  width: 60px;
}
</style>
