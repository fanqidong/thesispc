<template>
  <div class="page">
    <div class="header">
      <div class="nav-list">
        <div class="nav-item">首页</div>
        <div class="nav-item">论文咨询</div>
        <div class="nav-item">期刊投稿</div>
        <div class="nav-item">在线咨询</div>
      </div>
    </div>
    <div class="banner">
      <div>毕业季一站式论文网</div>
      <div class="red">不限专业 不限类型</div>
      <div class="label"></div>
      <div class="label-list">
        <div class="label-item">
          <span class="icon icon1"></span>
          硕博/本科/专科
        </div>
        <div class="label-item">
          <span class="icon icon2"></span>
          学术论文
        </div>
        <div class="label-item">
          <span class="icon icon3"></span>
          职称论文
        </div>
      </div>
    </div>
    <div class="content">
      <div class="company-wrap">
        <div class="intro">
          <div class="company-intro">- 我们的优势 -</div>
          <div class="blue">安全放心</div>
        </div>
        <div class="intro-list">
          <div class="intro-item">
            <div class="top">实力</div>
            <div class="bottom">
              近10年团队经验 服务全国
            </div>
          </div>
          <div class="intro-item">
            <div class="top">迅速</div>
            <div class="bottom">接受，立即响应 准时保质交付</div>
          </div>
          <div class="intro-item">
            <div class="top">精英</div>
            <div class="bottom">
              每位处理 认真负责
            </div>
          </div>
          <div class="intro-item">
            <div class="top">团队协作</div>
            <div class="bottom">
              多角度分析 满意为止
            </div>
          </div>
        </div>
      </div>
      <div class="company-wrap service-wrap">
        <div class="intro">
          <div class="company-intro">- 服务流程 -</div>
          <div class="blue">
            全程一对一服务
          </div>
        </div>
        <div class="intro-list">
          <div class="intro-item">
            <div class="top">在线咨询</div>
            <div class="bottom">
              简单沟通需求
            </div>
          </div>
          <div class="intro-item">
            <div class="top">加微/QQ沟通</div>
            <div class="bottom">深入对接，确保了解具体细节</div>
          </div>
          <div class="intro-item">
            <div class="top">目标方案</div>
            <div class="bottom">
              制定高效的方案
            </div>
          </div>
          <div class="intro-item">
            <div class="top">售后服务</div>
            <div class="bottom">
              保障您的权益，满意为止
            </div>
          </div>
        </div>
      </div>
      <div class="company-wrap service-wrap">
        <div class="intro">
          <div class="company-intro">- 合作高校 -</div>
          <div class="blue">
            100多名高校老师长期合作
          </div>
        </div>
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
          <div class="school-item">
            <img src="../assets/QingHua.jpg" alt="" />
          </div>
          <div class="school-item">
            <img src="../assets/BeiJing.jpg" alt="" />
          </div>
          <div class="school-item">
            <img src="../assets/XiaMen.jpg" alt="" />
          </div>
          <div class="school-item">
            <img src="../assets/SiChuan.jpg" alt="" />
          </div>
          <div class="school-item">
            <img src="../assets/ZhengZhou.jpg" alt="" />
          </div>
          <div class="school-item">
            <img src="../assets/ChongQing.jpg" alt="" />
          </div>
          <div class="school-item">
            <img src="../assets/ZheJiang.jpg" alt="" />
          </div>
          <div class="school-item">
            <img src="../assets/SuZhou.jpg" alt="" />
          </div>
          <div class="school-item">
            <img src="../assets/AnHui.jpg" alt="" />
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
  </div>
</template>

<script>
export default {
  name: "partTwo",
};
</script>

<style lang="less" scoped>
.page {
  background: rgb(245, 245, 245);
}
.nav-list {
  display: flex;
  height: 60px;
  color: #99ccff;
  background: #212940;
  font-weight: 600;
  font-size: 18px;
  background: url(../assets/nav-bg.png) no-repeat center/top;
  .nav-item {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.banner {
  height: 450px;
  padding-top: 50px;
  text-align: center;
  font-size: 42px;
  color: #fff;
  background: url(../assets/banner-bg.jpg) no-repeat center/cover;
  .red {
    margin-bottom: 40px;
  }
  .label {
    font-size: 30px;
    margin-bottom: 70px;
  }
  .label-list {
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    margin-top: 40px;
    color: #fff;
    font-size: 20px;
    .label-item {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .icon {
      width: 43px;
      height: 38px;
      background: no-repeat center/cover;
      margin-bottom: 10px;
      &.icon1 {
        background-image: url(../assets/icon1.png);
      }
      &.icon2 {
        background-image: url(../assets/icon2.png);
      }
      &.icon3 {
        background-image: url(../assets/icon3.png);
      }
    }
  }
}
.content {
  width: 1200px;
  margin: auto;
  .title {
    text-align: center;
    font-size: 36px;
    margin: 40px 0;
    color: #333;
  }
}
.company-wrap {
  .intro {
    margin-bottom: 15px;
    font-size: 13px;
    text-align: center;
    .company-intro {
      margin-top: 20px;
      font-size: 32px;
      font-weight: 500;
    }
    .blue {
      color: #568cf6;
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
}
// .intro-list {
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   color: #fff;
//   font-size: 12px;
//   .intro-item {
//     width: 590px;
//     height: 160px;
//     display: flex;
//     flex-direction: column;
//     padding: 25px 10px 10px 10px;
//     border-radius: 4px;
//     margin-bottom: 15px;
//     font-size: 12px;
//     background: #fff;
//     color: #333;
//     font-size: 18px;
//     box-shadow: 0px 0px 10px 0px #eeeeee;
//     .top {
//       padding-bottom: 2px;
//       margin-bottom: 20px;
//       font-weight: 500;
//       border-bottom: 1px solid;
//       font-size: 28px;
//       color: rgb(75, 132, 245);
//     }
//   }
// }
.intro-list {
  display: flex;
  justify-content: space-between;
  color: #fff;
  &.active {
    .intro-item {
      width: 228px;
    }
  }
  .intro-item {
    width: 290px;
    height: 280px;
    display: flex;
    flex-direction: column;
    padding: 25px 10px 10px 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    font-size: 12px;
    background: #fff;
    color: #333;
    font-size: 15px;
    box-shadow: 0px 0px 10px 0px #eeeeee;
    background: url(../assets/list-bg.jpg) no-repeat center/cover;
    .top {
      padding-bottom: 2px;
      margin-bottom: 20px;
      font-weight: 500;
      border-bottom: 1px solid;
      font-size: 28px;
      color: rgb(75, 132, 245);
    }
    .bottom {
      line-height: 1.7;
    }
  }
}
.footer {
  text-align: center;
  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
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
.school-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px 0;
  .school-item {
    margin-bottom: 10px;
    img {
      width: 66px;
      height: 66px;
      border-radius: 50%;
    }
  }
}
</style>
