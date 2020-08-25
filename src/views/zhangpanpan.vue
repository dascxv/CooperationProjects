<template>
  <div>
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

    <div class="list">
      <div class="goods">
        <img src="切图/small.png" />

        <div class="title">
          <p>戈雅公寓24懂</p>

          <div class="project">泥木工程</div>

          <div class="details">
            <span>三室</span>
            <span>60-90</span>
            <span>10km</span>
          </div>
        </div>
      </div>

      <div class="goods">
        <img src="切图/small.png" />

        <div class="title">
          <p>观澜代国际云邸栋</p>

          <div class="project">泥木工程</div>

          <div class="details">
            <span>三室</span>
            <span>60-90</span>
            <span>10km</span>
          </div>
        </div>
      </div>

      <div class="goods">
        <img src="切图/small.png" />

        <div class="title">
          <p>中泰阳光城5栋</p>

          <div class="project">泥木工程</div>

          <div class="details">
            <span>三室</span>
            <span>60-90</span>
            <span>10km</span>
          </div>
        </div>
      </div>

      <div class="goods">
        <img src="切图/small.png" />

        <div class="title">
          <p>重汽嘉泽苑7栋</p>

          <div class="project">泥木工程</div>

          <div class="details">
            <span>三室</span>
            <span>60-90</span>
            <span>10km</span>
          </div>
        </div>
      </div>

      <div class="goods">
        <img src="切图/small.png" />

        <div class="title">
          <p>戈雅公寓24栋</p>

          <div class="project">泥木工程</div>

          <div class="details">
            <span>三室</span>
            <span>60-90m</span>
            <span>10km</span>
          </div>
        </div>
      </div>

      <div class="goods">
        <img src="切图/small.png" />

        <div class="title">
          <p>戈雅公寓24栋</p>

          <div class="project">泥木工程</div>

          <div class="details">
            <span>三室</span>
            <span>60-90m</span>
            <span>10km</span>
          </div>
        </div>
      </div>
      <div class="goods">
        <img src="切图/small.png" />

        <div class="title">
          <p>戈雅公寓24栋</p>

          <div class="project">泥木工程</div>

          <div class="details">
            <span>三室</span>
            <span>60-90m</span>
            <span>10km</span>
          </div>
        </div>
      </div>
      <div class="goods">
        <img src="切图/small.png" />

        <div class="title">
          <p>戈雅公寓24栋</p>

          <div class="project">泥木工程</div>

          <div class="details">
            <span>三室</span>
            <span>60-90m</span>
            <span>10km</span>
          </div>
        </div>
      </div>
      <div class="goods">
        <img src="切图/small.png" />

        <div class="title">
          <p>戈雅公寓24栋</p>

          <div class="project">泥木工程</div>

          <div class="details">
            <span>三室</span>
            <span>60-90m</span>
            <span>10km</span>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <div class="arrow">上一页</div>
      <div>2/30</div>
      <div class="arrow">下一页</div>
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
</template>

<script>
</script>

<style scoped>
.header {
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
.goods {
  display: flex;
  justify-content: center;
  padding: 0 6px;
  margin: 30px 0;
}
.goods img {
  width: 48%;
  height: 100px;
}
.goods .title {
  width: 52%;
  height: 100px;
  margin-left: 13px;
}
.title p {
  font-synthesis: 30px;
  color: #000;
}
.project {
  width: 37%;
  background: #3ac893;
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin: 20px 0;
}
.details {
  display: flex;
  justify-content: space-between;
}
.details span {
  font-size: 14px;
  color: lightgrey;
}
.pagination {
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
.icon-tel {
  color: #3ac893;
}
.phonenumber {
  margin: 5px 0;
  border-top: 3px solid #eee;
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
  font-size: 40px;
  color: lightgrey;
  position: absolute;
  top: -10px;
  right: 5px;
}
</style>
