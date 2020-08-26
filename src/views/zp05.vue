<!--  -->
<template>
  <div class>
    <div class="header">
      <img src="切图/logo.png" />

      <div>工地直播</div>

      <div class="righticon">
        <div class="iconfont icon-user">
          <span>我的</span>
        </div>
        <div class="iconfont icon-nav">
          <span>导航</span>
        </div>
      </div>
    </div>

    <div class="body_list">
      <div class="details">
        <div class="item">
          <div class="image">
            <img src="img/leaf1.jpg" width="100%" />
          </div>
          <div class="item_right">
            <div>
              <p>
                <span>陈冲</span>
                <van-tag type="primary" size="medium" color="#38c792" style="margin:0 15px">优秀</van-tag>
              </p>

              <p>
                <span style="color:#feb505">738</span>
                <span style="color:#999">人气</span>
              </p>
            </div>
            <div>
              <span>作品:8个</span>
              <span style="margin-left:40px">经验:5年</span>
            </div>
            <div style="font-size:16px;">
              擅长风格:
              <span style="color:#999;font-size:16px">现代/美式/简约/新古典</span>
            </div>

            <div style="margin:10px 0">
              <span style="font-size:16px">设计理念:</span>

              <span style="color:#999;font-size:16px">在满足使用功能的前提下达到审美功能的最大化</span>
            </div>
          </div>
        </div>
      </div>

      <div class="icon_tb">
        <div class="icon_num">
          <span class="iconfont icon-thumb-up" style=" border:2px solid #feb505;color:#feb505"></span>
          <span style="color:#feb505;font-size:16px">人气(618)</span>
        </div>
        <div class="icon_num">
          <span class="iconfont icon-pencle" style=" border: 2px solid #1b9af7;color:#1b9af7"></span>
          <span style="color:#1b9af7;font-size:16px">评价(10)</span>
        </div>
        <div class="icon_num">
          <span class="iconfont icon-design" style=" border: 2px solid #ff4351;color:#ff4351"></span>
          <span style=" color:#ff4351;font-size:16px">找我设计</span>
        </div>
      </div>

      <div class="personcommend">
        <p>
          个人简介：
          <span style="color:#999;font-size:16px">
            在现代多样的设计风格的冲击中，找到自己的立足点，
            以独特的视角对空间进行营造。在实践的过程中不断完善自己的设计理念，
            将材料工艺与设计风格进行融合。设计为人所需，为人服务，即应以人为本。
          </span>
        </p>
      </div>
      <div class="line2">
        <p>猜您喜欢</p>
      </div>

      <div class="list">
        <div class="goods_card">
          <img src="img/i1.png" alt />
          <div class="title">
            <div>欧美文化的抽象美感</div>
            <div>混搭 三室 1100/m</div>
          </div>
        </div>
        <div class="goods_card">
          <img src="img/i2.png" alt />
          <div class="title">
            <div>欧美文化的抽象美感</div>
            <div>混搭 三室 1100/m</div>
          </div>
        </div>
        <div class="goods_card">
          <img src="img/i3.png" alt />
          <div class="title">
            <div>欧美文化的抽象美感</div>
            <div>混搭 三室 1100/m</div>
          </div>
        </div>
        <div class="goods_card">
          <img src="img/i4.png" alt />
          <div class="title">
            <div>欧美文化的抽象美感</div>
            <div>混搭 三室 1100/m</div>
          </div>
        </div>
        <div class="goods_card">
          <img src="img/i5.png" alt />
          <div class="title">
            <div>欧美文化的抽象美感</div>
            <div>混搭 三室 1100/m</div>
          </div>
        </div>
        <div class="goods_card">
          <img src="img/i6.png" alt />
          <div class="title">
            <div>欧美文化的抽象美感</div>
            <div>混搭 三室 1100/m</div>
          </div>
        </div>
        <div class="goods_card">
          <img src="img/i6.png" alt />
          <div class="title">
            <div>欧美文化的抽象美感</div>
            <div>混搭 三室 1100/m</div>
          </div>
        </div>
      </div>


       <div class="content">
        <p>
          房先森互联网家装有别于传统装修公司与其他装修中介平台，
          以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐 + 个性化定制服务。
        </p>
      </div>


       <div class="phonenumber">
        <div class>
          <span class="iconfont icon-tel"></span>
          <span style="font-size:12px">服务热线：400-9977-658</span>
        </div>

        <div class="m1">
          <span>触屏版</span>
          <span>电脑版</span>
          <span>关于我们</span>
          <span>联系我们</span>
        </div>
        <div class="iconfont icon-backtop back"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.header {
border-bottom: .5px solid #eee;
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header img {
  width: 110px;
}
.righticon {
  display: flex;
}
.righticon div {
  color: lightgray;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  margin: 0 5px;
}
.righticon span {
  font-size: 14px !important ;
}
.body_list {
  background: #eee;
}
.item {
  border-bottom: 0.3px solid #eee;
  padding: 20px 5px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
}
.image {
  width: 100px;
  height: 100px;
}
.image img {
  border-radius: 50px;
}
.item_right {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: start;
}
.item_right div:nth-child(1) {
  display: flex;
  justify-content: space-between;
}
.item_right div:nth-child(2) {
  margin: 8px 0;
  display: flex;
  justify-content: start;
}
.icon_tb {
  background: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
}
.icon_tb div {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon_num span:nth-child(1) {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 30px;

  font-size: 45px;
  text-align: center;
  line-height: 60px;
}
.icon_num span:nth-child(2) {
  font-stretch: 16px;
}
.personcommend p {
  font-size: 16px;
  background: #fff;
}
.line2 {
  margin: 5px 0;
  background: #fff;
  padding-left: 10px;
}
.line2 p {
  border-left: 3px solid #39c894;
  height: 30px;
  line-height: 30px;
}
.list {
  padding: 10px 0;
  background: #eee;
  padding: 0 5px;
  display: flex;
  flex-wrap: wrap;
}
.list div {
  width: 48%;
}
.goods_card {
  background: #fff;
  border: 2px solid #eee;
}
.goods_card img {
  width: 176px;
}
.title {
  width: 100%;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  align-items: center;
}

.title div:nth-child(1) {
  font-size: 15px;
}
.title div:nth-child(2) {
  color: lightgrey;
  font-size: 13px;
}
.content {
  margin: 8px 0;
  background: #fff;
  padding: 10px 5px;
}
.content p {
  font-size: 15px;
  color: #999;
}
.icon-tel {
  color: #3ac893;
}
.phonenumber {
  margin: 5px 0;
  background: #fff;
  position: relative;
}
.phonenumber div:nth-child(1) {
  margin: 10px 0;
  text-align: center;
}
.phonenumber div:nth-child(2) {
  display: flex;
  justify-content: space-around;
}
.m1 span {
  font-size: 14px;
}
.icon-backtop {
  font-size: 50px;
  color: lightgrey;
  position: absolute;
  top: -10px;
  right: 5px;
}
</style>