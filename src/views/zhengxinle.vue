<template>
  <div>
    <div class="nav">
      <img src="/切图/logo.png" alt="" class="nav-1" />
      <div class="nav-2">装修方案</div>
      <div class="nav-3">
        <div class="nav-4">
          <i class="iconfont icon-user"> </i>
          <p>我的</p>
        </div>
        <div class="nav-4">
          <i class="iconfont icon-nav"> </i>
          <p>导航</p>
        </div>
      </div>
    </div>
    <div class="nav-5"></div>
    <div class="content">
      <div class="content-1">
        <img src="/切图/1.png" alt="" />
        <div class="content-2">
          <p class="p1">699全包精装套装</p>
          <p>
            <span class="span1">价格:</span><span class="span2">￥699元/m</span>
          </p>
          <p>
            <span class="span1">已预约:</span><span class="span2">221套</span>
          </p>
          <p>
            <span class="span1">正式发售:</span
            ><span class="span2">全包套餐火爆预约中</span>
          </p>
        </div>
      </div>
      <div class="content-3">
        精装全包套装，包设计/包主材/包施工/包监理。采用知名辅材、一线主材、工厂直供F2C模式
      </div>
      <div class="nav-5"></div>
      <ul class="ul1">
        <li>套餐详情</li>
        <li class="li1">配置清单</li>
        <li>施工工艺</li>
        <li>服务流程</li>
      </ul>
      <div class="content-4">
        <button class="button1">厨房</button>
        <button class="button2">卫生间</button>
        <button class="button2">阳台</button>
        <button>卧室/客房/书房</button>
        <button class="button2">客厅</button>
      </div>
      <div class="content-5">
        <table cellpadding="0" cellspacing="0">
          <tr class="tr1">
            <td>项目</td>
            <td>品牌</td>
            <td>详细说明</td>
          </tr>
          <tr>
            <td>规格</td>
            <td>定制橱柜</td>
            <td>3延米之内</td>
          </tr>
          <tr>
            <td>吊柜</td>
            <td>定制橱柜</td>
            <td>1.2延米内、阻尼抽屉2个(单色石英石台面)</td>
          </tr>
          <tr>
            <td>台面</td>
            <td>石英石</td>
            <td>3延米之内</td>
          </tr>
          <tr>
            <td>套装门/移门及五金</td>
            <td>樱花</td>
            <td>
              含门以及门安装、三维可调式合页、门锁、门吸、厨房空间提供一樘门，平面和插框造型，仅限原始户型空间配门。若为移门，只限3平方米
            </td>
          </tr>
          <tr>
            <td>门套</td>
            <td>双诺</td>
            <td>定制</td>
          </tr>
          <tr>
            <td>小地砖</td>
            <td>马可波罗瓷砖</td>
            <td>地砖铺满</td>
          </tr>
        </table>
      </div>
      <div class="nav-5"></div>
      <div class="content-6" style="text-indent: 2em;">
        &nbsp; &nbsp; &nbsp;
        &nbsp;房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
      </div>
      <div class="nav-5"></div>
      <p class="p1">服务热线：400-9977-658</p>
    <ul class="ul2">
      <li class="li2">触屏板</li>
      <li>电脑版</li>
      <li>关于我们</li>
      <li>联系我们</li>
    </ul>
    </div>
    <img src="/切图/3.png" alt="" class="img">
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "/iconfont/iconfont.css";
.nav {
  width: 100%;
  height: 50px;
  display: flex;
  line-height: 50px;
  justify-content: space-between;
  align-items: center;
}
.nav-1 {
  height: 40px;
  width: 110px;
}
.nav-2 {
  font-size: 19px;
}
.nav-4 p {
  margin: 0;
  color: #999999;
  line-height: 5px;
  font-size: 12px;
  margin-left: 10px;
}
.nav-3 {
  text-align: center;
  display: flex;
  align-items: center;
  margin-top: -20px;
  margin-right: 5px;
}
.nav i {
  font-size: 20px;
  padding-left: 10px;
  color: #999999;
  margin-top: 0;
}
.nav-3 div {
  height: 40px;
  display: flex;
  flex-direction: column;
}
.nav-5 {
  width: 100%;
  height: 12px;
  background: #eaeaea;
  margin-top: 8px;
}
.content-2 {
  margin-left: 10px;
  margin-top: -20px;
}
.content-1 {
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
}
.content-1 img {
  height: 120px;
}
.p1 {
  font-size: 18px;
  text-align: center;
  margin-left: -19px;
}
.span1 {
  color: #c7c4c4;
  font-size: 12px;
}
.span2 {
  color: #ff4153;
  font-size: 12px;
}
.content-3 {
  font-size: 11px;
  margin-left: 10px;
}
.ul1 {
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  border-bottom: 1px solid #eaeaea;
  margin: 0 auto;
}
li {
  border-right: 1px solid #eaeaea;
  width: 100px;
  text-align: center;
  height: 50px;
}
.li1 {
  border-bottom: 3px solid #0e8559;
}
.content-4 {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.content-4 button {
  border: 1px solid #39c894;
  color: #39c894;
  border-radius: 20px;
  font-size: 12px;
  height: 25px;
  background: white;
}
.content-5 {
  width: 100%;
  height: 420px;
}
.button1 {
  background: #39c894 !important;
  color: white !important;
  width: 50px;
}
.button2 {
  width: 50px;
}
table {
  width: 100%;
  font-size: 14px;
  border: 1px solid #c7c4c4;
  margin-top: 20px;
}
tr {
  border: 1px solid #c7c4c4;
}
td {
  width: 100px;
  height: 35px;
  border: 1px solid #c7c4c4;
  border-left: none;
  padding-left: 10px;
  color: #a3a2a2;
}
.tr1 td {
  color: #39c894;
}
.content-6 {
  margin-top: 15px;
  font-size: 15px;
}
.p1{
  text-align: center;
}
 .ul2{
  display: flex;
  text-align: center;
}
.li2{
  color:#39c894
}
.img{
  width: 100%;
  margin-top:-20px;
}
</style>