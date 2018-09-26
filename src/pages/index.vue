<template>
  <div>
    <div class="title">Dom元素骨架图生成展示</div>
    <div class="line"></div>
    <div class="section">
      <jad-icon icon-name="edit" :icon-size="40"></jad-icon>
      <div class="sub-title">jad-mobile组件：</div>
      <div class="sub-line"></div>
      <jad-cell
        title="cellTitle1"
        value="cellValue2" class="custom">
      </jad-cell>
    </div>
    <div class="section">
      <jad-icon icon-name="edit" :icon-size="40"></jad-icon>
      <div class="sub-title">文本块：div, p, span</div>
      <div class="sub-line"></div>
      <span class="span">我是一个 span 元素</span>
      <div class="div">我是一个 div 元素</div>
      <div class="div div1">描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息</div>
      <p class="p">我是一个 p 元素</p>
    </div>
    <div class="section">
      <jad-icon icon-name="edit" :icon-size="40"></jad-icon>
      <div class="sub-title" @click="linkTo">图片块：img</div>
      <div class="sub-line"></div>
      <img src="../assets/1.jpeg" class="image">
    </div>
    <div class="section">
      <jad-icon icon-name="edit" :icon-size="40"></jad-icon>
      <div class="sub-title">按钮块：button</div>
      <div class="sub-line"></div>
      <button class="button">我是一个button</button>
    </div>
    <div class="section">
      <jad-icon icon-name="edit" :icon-size="40"></jad-icon>
      <div class="sub-title">svg块：a</div>
      <div class="sub-line"></div>
      <a class="a" href="https://github.com/ElemeFE/page-skeleton-webpack-plugin" target="_blank">page-skeleton-webpack-plugin</a>
    </div>
    <div class="section">
      <jad-icon icon-name="edit" :icon-size="40"></jad-icon>
      <div class="sub-title">伪元素块：::before ::after</div>
      <div class="sub-line"></div>
      <span class="after">blahblah...</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'app',

    components: {
    },

    data() {
      return {
      }
    },
    methods: {
      panelClick() {},
      linkTo(){
        this.$route.push('/search')
      }
    }
  }
</script>

<style scoped>
  .section {
    margin-top: 20px;
    padding: 0 0 0 20px;
  }
  .section:first-child {
    margin-top: 20px;
  }
  .sub-title {
    font-size: 30px;
    margin: 0 0 10px 10px;
    display: inline-block;
    font-weight: bold;
  }
  .sub-line {
    height: 1px;
    background: #cccccc;
    margin-bottom: 10px;
  }
  .title {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    padding: 25px 0;
  }
  .line {
    height: 2px;
    background: #cccccc;
  }
  .div {
      font-size: 24px;
      padding: 10px;
      border: 1px solid #eee;
      color: darkslateblue;
      margin-top: 20px;
      line-height: 35px;
  }
  .div1 {
    width: 600px;
    height: 100px;
  }
  .image {
      width: 150px;
      height: 150px;
      display: block;
      margin: 0 auto;
  }
  .span {
    font-size: 24px;
    display: block;
    margin-bottom: 20px;
    color: #f50;
  }
  .p {
    color:dodgerblue;
    font-size: 24px;
  }
  .button {
    width: 250px;
    height: 50px;
    font-size: 28px;
    background: #cccccc;
    border-radius: 20px;
    color: #ffffff;
    margin: 0 auto;
    display: block;
    margin-top: 30px;
  }
  .custom .jad-cell-title .jad-cell-title__text {
    display: inline-block;
  }
  .after {
    background-color: #5BC8F7;
    font-size: 28px;
    display: block;
    line-height: 28px;
  }
  .after::after {
    content: "这是一个::after";
    background-color: #FFBA10;
    border-color: black;
    border-style: dotted;
    font-size: 28px;
  }
  .after::before {
    content: "这是一个::before";
    background-color: #FFBA10;
    border-color: black;
    border-style: dotted;
    font-size: 28px;
  }
  .a {
    font-size: 24px;
  }
</style>
