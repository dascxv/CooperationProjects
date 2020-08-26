<!--  -->
<template>
  <div class>
    <div class="header_wrapper">
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
      <div class="tab_line">
        <van-tabs v-model="active">
          <van-tab>
            <template #title>
              <van-icon name="arrow-down" />筛选
            </template>
          </van-tab>
          <van-tab>
            <template #title>
              <van-icon name="arrow-down" />阶段
            </template>
          </van-tab>

          <van-tab>
            <template #title>
              <van-icon name="arrow-down" />排序
            </template>
          </van-tab>
        </van-tabs>

        <div class="search">
          <div class="iconfont icon-search"></div>
        </div>
      </div>
    </div>

    <div class="list_body">
      <div>
        <div class="item">
          <div class="image">
            <img src="img/leaf1.jpg" width="100%" @click="goto('/Designer12')" />
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
              <span>经验:5年</span>
              <span>评价:10</span>
            </div>
            <div style="font-size:16px">
              擅长风格:
              <span style="color:#999;font-size:16px">现代/美式/简约/新古典</span>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="image">
            <img src="img/leaf2.jpg" width="100%" @click="goto('/Designer12')" />
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
              <span>经验:5年</span>
              <span>评价:10</span>
            </div>
            <div style="font-size:16px">
              擅长风格:
              <span style="color:#999;font-size:16px">现代/美式/简约/新古典</span>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="image">
            <img src="img/leaf1.jpg" width="100%" @click="goto('/Designer12')" />
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
              <span>经验:5年</span>
              <span>评价:10</span>
            </div>
            <div style="font-size:16px">
              擅长风格:
              <span style="color:#999;font-size:16px">现代/美式/简约/新古典</span>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="image">
            <img src="img/leaf2.jpg" width="100%" @click="goto('/Designer12')" />
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
              <span>经验:5年</span>
              <span>评价:10</span>
            </div>
            <div style="font-size:16px">
              擅长风格:
              <span style="color:#999;font-size:16px">现代/美式/简约/新古典</span>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="image">
            <img src="img/leaf1.jpg" width="100%" @click="goto('/Designer12')" />
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
              <span>经验:5年</span>
              <span>评价:10</span>
            </div>
            <div style="font-size:16px">
              擅长风格:
              <span style="color:#999;font-size:16px">现代/美式/简约/新古典</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div class="arrow">上一页</div>
        <div>2/30</div>
        <div class="arrow">下一页</div>
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
  methods: {
    goto(path) {
      this.$router.push({
        path,
      });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style  scoped>
.header {
  border-bottom: 0.5px solid #eee;
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
.tab_line {
  display: flex;
}
.van-tabs {
  width: 80%;
}
.search {
  text-align: center;
  line-height: 44px;
}
.search .icon-search {
  margin-left: 20px;
  width: 20%;
  color: #39c894;
  font-size: 30px;
}
.list_body {
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
  justify-content: space-between;
}
.pagination {
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
.pagination div {
  width: 31%;
  height: 40px;
  text-align: center;
  line-height: 40px;
}

.arrow {
  background: #3ac893;
  color: #fff;
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