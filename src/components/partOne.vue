<template>
  <div class="page">
    <div class="header">
      <div class="wrap">
        <div class="logo"></div>
        <div class="nav-list">
          <div class="nav-item one">首页</div>
          <div class="nav-item two">关于我们</div>
          <div class="nav-item three">在线咨询</div>
        </div>
      </div>
    </div>
    <div class="banner">
      <div>期刊投稿 论文咨询发表平台</div>
      <div class="label-list">
        <div class="label-item">
          <span class="icon icon1"></span>
          期刊类型丰富
        </div>
        <div class="label-item">
          <span class="icon icon2"></span>
          专业服务团队
        </div>
        <div class="label-item">
          <span class="icon icon3"></span>
          正规刊物发表
        </div>
        <div class="label-item">
          <span class="icon icon4"></span>
          完善售后服务
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">- 服务内容 -</div>
      <div class="question-list">
        <div class="item">
          <p>学术期刊投稿</p>
          <div class="icon icon1"></div>
          <div>各类别期刊，见刊快，费用低</div>
        </div>
        <div class="item">
          <p>论文咨询</p>
          <div class="icon icon2"></div>
          <div>覆盖全学科，助你成功</div>
        </div>
        <div class="item">
          <p>职称晋升</p>
          <div class="icon icon3"></div>
          <div>提供职称评审服务</div>
        </div>
        <div class="item">
          <p>出书服务</p>
          <div class="icon icon4"></div>
          <div>国内独著，电子出书等服务</div>
        </div>
      </div>
      <div class="company-wrap">
        <div class="intro">
          <div class="company-intro">- 10万作者选择我们的理由 -</div>
        </div>
        <div class="reason-wrap"></div>
      </div>
      <div class="sort-bg"></div>
      <div class="company-wrap service-wrap">
        <div class="intro">
          <div class="company-intro">- 服务流程 -</div>
        </div>
        <div class="question-list">
          <div class="item">
            <p>在线咨询</p>
            <div class="icon icon1"></div>
            <div>简单沟通需求</div>
          </div>
          <div class="item">
            <p>加QQ/微沟通</p>
            <div class="icon icon2"></div>
            <div>深入对接，确保了解具体细节</div>
          </div>
          <div class="item">
            <p>目标方案</p>
            <div class="icon icon3"></div>
            <div>制定高效的方案</div>
          </div>
          <div class="item">
            <p>售后服务</p>
            <div class="icon icon4"></div>
            <div>保障您的权益，满意为止</div>
          </div>
        </div>
      </div>
      <div class="company-wrap school-wrap">
        <div class="intro">
          <div class="company-intro">- 长期合作期刊及高校 -</div>
        </div>
        <div class="school-content">
          <div class="left"></div>
          <div class="school-list">
            <div class="school-item">
              <img src="../assets/HuNan.jpg" alt="" />
            </div>
            <div class="school-item">
              <img src="../assets/ZhongShan.jpg" alt="" />
            </div>
            <div class="school-item">
              <img src="../assets/NanJing.jpg" alt="" />
            </div>
            <div class="school-item">
              <img src="../assets/WuHan.jpg" alt="" />
            </div>
            <div class="school-item">
              <img src="../assets/FuDan.jpg" alt="" />
            </div>
            <div class="school-item">
              <img src="../assets/NanKai.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="company-wrap service-wrap">
        <div class="intro">
          <div class="company-intro">- 客户专属特权 -</div>
        </div>
        <div class="specail-list">
          <div class="item">
            <div class="icon icon1"></div>
            <div class="text">
              <p>企业信誉保障</p>
              <div>网站备案可查</div>
            </div>
          </div>
          <div class="item">
            <div class="icon icon2"></div>
            <div class="text">
              <p>客户信息安全</p>
              <div>客户资料/稿件严格保密，交易完成后销毁</div>
            </div>
          </div>
          <div class="item">
            <div class="icon icon3"></div>
            <div class="text">
              <p>一对一服务</p>
              <div>确保0错误</div>
            </div>
          </div>
          <div class="item">
            <div class="icon icon4"></div>
            <div class="text">
              <p>正规期刊</p>
              <div>全文网上收录可查</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="text">
        <span class="left-icon icon"></span>
        <span>联系我们 · 随时为您服务！</span>
        <span class="right-icon icon"></span>
      </div>
      <div>一秒咨询，随时在线，诚信服务，用心做人！！</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "partOne",
};
</script>

<style lang="less" scoped>
.page {
  padding-top: 80px;
}
.header {
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  background: #fff;
  z-index: 999;
  .wrap {
    width: 1350px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
  }
  .logo {
    width: 66px;
    height: 66px;
    background: url(../assets/logo.png) no-repeat center/cover;
  }
}
.nav-list {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 16px;
  background: url(../assets/nav-bg.png) no-repeat center/top;
  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    &.one {
      width: 72px;
      padding-left: 40px;
    }
    &.two {
      width: 104px;
      padding-left: 40px;
    }
    &.three {
      width: 140px;
      height: 40px;
      margin-left: 40px;
      background: #3388ff;
      color: #fff;
    }
  }
}
.banner {
  height: 500px;
  padding-top: 100px;
  text-align: center;
  font-size: 42px;
  color: #fff;
  background: url(../assets/banner-bg.jpg) no-repeat center/cover;
  .label-list {
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    margin-top: 100px;
    width: 1350px;
    margin: 100px auto 0;
    color: #fff;
    font-size: 20px;
    .label-item {
      display: flex;
      flex-direction: column;
      background: #fff;
      align-items: center;
      justify-content: center;
      color: #333;
      width: 180px;
      height: 180px;
      border-radius: 50%;
    }
    .icon {
      width: 42px;
      height: 42px;
      background: no-repeat center/cover;
      margin-bottom: 10px;
      &.icon1 {
        background-image: url(../assets/1.png);
      }
      &.icon2 {
        background-image: url(../assets/2.png);
      }
      &.icon3 {
        background-image: url(../assets/3.png);
      }
      &.icon4 {
        background-image: url(../assets/4.png);
      }
    }
  }
}
.content {
  width: 1350px;
  margin: auto;
  .title {
    text-align: center;
    font-size: 36px;
    margin: 30px 0 20px;
    color: #333;
    font-weight: 600;
  }
}
.question-list {
  display: flex;
  justify-content: space-between;
  padding: 25px 0 0;
  color: #333;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 0;
    align-items: center;
    width: 24%;
    height: 380px;
    border-radius: 4px;
    background: #fff;
    font-size: 18px;
    box-shadow: 0px 2px 10px 0px #eee;
    .icon {
      width: 120px;
      height: 120px;
      margin-top: -80px;
      background: url(../assets/icon-1.png) no-repeat center/cover;
      &.icon2 {
        background-image: url(../assets/icon-2.png);
      }
      &.icon3 {
        background-image: url(../assets/icon-3.png);
      }
      &.icon4 {
        background-image: url(../assets/icon-4.png);
      }
    }
    p {
      margin-bottom: 30px;
      font-size: 28px;
    }
  }
}
.company-wrap {
  margin: auto;
  .company-intro {
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    margin: 40px 0;
  }
  .reason-wrap {
    height: 430px;
    margin: auto;
    background: url(../assets/reason-bg.jpg) no-repeat center/cover;
  }
}
.sort-bg {
  height: 532px;
  background: url(../assets/sorts-bg.jpg) no-repeat center/cover;
}
.school-content {
  display: flex;
  .left {
    width: 585px;
    height: 530px;
    flex-shrink: 0;
    margin-right: 50px;
    background: url(../assets/qikan.jpg) no-repeat center/cover;
  }
  .school-list {
    display: flex;
    flex-wrap: wrap;
    height: 530px;
    justify-content: space-between;
    padding: 50px 0 40px;
    .school-item {
      img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        filter: blur(2px);
      }
    }
  }
}
.specail-list {
  display: flex;
  justify-content: space-between;
  margin: auto;
  .item {
    display: flex;
    align-items: center;
  }
  .icon {
    width: 44px;
    height: 44px;
    margin-right: 20px;
    background: url(../assets/xin.png) no-repeat center/cover;
    &.icon2 {
      background-image: url(../assets/safe.png);
    }
    &.icon3 {
      background-image: url(../assets/icon-2.png);
    }
    &.icon4 {
      background-image: url(../assets/gui.png);
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    p {
      font-size: 26px;
      margin-bottom: 5px;
      font-weight: 600;
    }
  }
}
.footer {
  text-align: center;
  padding: 50px 0 0;
  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    margin-bottom: 10px;
  }
  .icon {
    display: inline-block;
    width: 48px;
    height: 19px;
    background: url(../assets/title-left.jpg) no-repeat center/cover;
  }
  .right-icon {
    background-image: url(../assets/title-right.jpg);
  }
}
</style>
