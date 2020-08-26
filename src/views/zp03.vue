<!--  -->
<template>
  <div class>
    <div class="header">
      <img src="切图/logo.png" />

      <div>装修预算</div>

      <div class="righticon">
        <div class="iconfont icon-nav">
          <span>导航</span>
        </div>
      </div>
    </div>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#0076ff">
      <van-swipe-item>
        <img src="切图/house_info.jpg" width="100%" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="切图/house_info.jpg" width="100%" />
      </van-swipe-item>
    </van-swipe>

    <div class="wrapper_line">
      <p>房先森 &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;装修攻略&nbsp;&nbsp;&nbsp;/装修预算&nbsp;&nbsp;&nbsp;/正文</p>
    </div>
    <div style="text-align:center;font-size:24px">
      装修预算注意事项
      <div class="time">
        <span>2016-07-09</span>
        <span class="iconfont icon-view" style="font-size:28px;margin-left:30px"></span>
        <span style="margin-left:10px">115</span>
      </div>
    </div>

    <div class="stag">
      <div>客厅装修隔断</div>
      <div>客厅装修图</div>
      <div>客厅装修效果</div>
      <div>客厅装修隔断</div>
      <div>客厅装修图</div>
      <div>客厅装修效果</div>
    </div>

    <div>
      <p
        style="font-size:16px;color:#999"
      >导语：在装修时如果没有提前最好准备预算，很容易造成最后开支过大，黑油很多没必要的增项，那么在做预算的时候又有什么需要注意的地方呢？</p>
      <div class="mainpic" style="padding:20px 5px 30px;text-align:center">
        <img src="img/image.png" />

        <div class="btn1">点击展开全文</div>

        <div class="icon_frams">
          <div class="item">
            <span class="iconfont icon-pencle"></span>
            <span style="color:#1b9af7">评价(10)</span>
          </div>
          <div class="item">
            <span class="iconfont icon-share"></span>
            <span style="color:#feb505">分享</span>
          </div>
        </div>

        <div class="btn1">进入装修预算</div>
      </div>

      <div class="line2">
        <p>猜您喜欢</p>
      </div>
    </div>

    <div class="list">
      <div class="list_item">
        <img src="img/list1.png" />
        <div class="list_right">
          <div>遇见这样房子的男人就嫁了吧</div>
          <div class>
            <p>
              <span class="iconfont icon-time"></span>
              <span>2016-07-07</span>
            </p>
            <span class="iconfont icon-view" style="margin-left:30px;font-size:20px"></span>
            <span>115</span>
          </div>
        </div>
      </div>
      <div class="list_item">
        <img src="img/list2.png" />
        <div class="list_right">
          <div>能让您涨工资的家居风水</div>
          <div class>
            <p>
              <span class="iconfont icon-time"></span>
              <span>2016-07-07</span>
            </p>
            <span class="iconfont icon-view" style="margin-left:30px;font-size:20px"></span>
            <span>115</span>
          </div>
        </div>
      </div>
      <div class="list_item">
        <img src="img/list1.png" />
        <div class="list_right">
          <div>遇见这样房子的男人就嫁了吧</div>
          <div class>
            <p>
              <span class="iconfont icon-time"></span>
              <span>2016-07-07</span>
            </p>
            <span class="iconfont icon-view" style="margin-left:30px;font-size:20px"></span>
            <span>115</span>
          </div>
        </div>
      </div>
      <div class="list_item">
        <img src="img/list2.png" />
        <div class="list_right">
          <div>能让您涨工资的家居风水</div>
          <div class>
            <p>
              <span class="iconfont icon-time"></span>
              <span>2016-07-07</span>
            </p>
            <span class="iconfont icon-view" style="margin-left:30px;font-size:20px"></span>
            <span>115</span>
          </div>
        </div>
      </div>
      <div class="list_item">
        <img src="img/list1.png" />
        <div class="list_right">
          <div>遇见这样房子的男人就嫁了吧</div>
          <div class>
            <p>
              <span class="iconfont icon-time"></span>
              <span>2016-07-07</span>
            </p>
            <span class="iconfont icon-view" style="margin-left:30px;font-size:20px"></span>
            <span>115</span>
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
<style  scoped>
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
.wrapper_line {
  padding: 20px 10px 30px 10px;
}
.wrapper_line p {
  background: #f4f4f4;
}
.time {
  border-bottom: 1px solid #eee;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}
.stag {
  margin: 20px 0;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.stag div {
  margin: 10px;
  text-align: center;
  line-height: 28px;
  height: 28px;
  border: 1px solid #eee;
  color: #999;
  border-radius: 14px;
  font-size: 16px;
}
.btn1 {
  height: 40px;
  border: 1px solid #39c894;
  text-align: center;
  line-height: 40px;
  color: #39c894;
}
.icon_frams {
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
}
.icon_frams .item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.icon-pencle,
.icon-share {
  text-align: center;
  line-height: 70px;
  height: 70px;
  border-radius: 35px;
  width: 70px;
  display: block;
  font-size: 40px;
}
.icon-pencle {
  color: #1b9af7;
  border: 2px solid #1b9af7;
}
.icon-share {
  color: #feb505;
  border: 2px solid #feb505;
}
.line2 {
  padding-left: 10px;
}
.line2 p {
  font-size: 25px;
  border-left: 3px solid #39c894;
  height: 30px;
  line-height: 30px;
}
.list {
  background: #eee;
}
.list_item {
  border-bottom: 0.3px solid #eee;
  background: #fff;
  padding: 15px 5px;
  display: flex;
}
.list_right {
  margin-left: 8px;
  text-align: left;
}
.list_right div:nth-child(2) {
  margin-top: 30px;
  display: flex;
  color: #999;
  justify-content: start;
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