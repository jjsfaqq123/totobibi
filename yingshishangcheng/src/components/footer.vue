<template>
<div>
     <div class="footer-wrapper">
         <!-- 尾部 -->
            <div class="service-info">
                <ul class="clearfix">
                    <li class="info-item">
                        <a href="javascript:;" target="_blank">
                            <i class="i-seven"></i>
                            7天退货保障
                        </a>
                    </li>
                    <li class="info-item">
                        <a href="javascript:;" target="_blank">
                            <i class="i-fifteen"></i>
                            15天换货承诺
                        </a>
                    </li>
                    <li class="info-item">
                         <a href="javascript:;" target="_blank">
                            <i class="i-free"></i>
                            基础服务免费
                            <small>(限中国)</small>
                        </a>
                    </li>
                    <li class="info-item ent-item">
                        <a href="javascript:;" target="_blank">
                            <i class="i-local"></i>
                            服务网点遍布全国
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer-list">
                <table class="footer-table">
                    <thead>
                        <tr>
                            <th width="20%">新手帮助</th>
                            <th width="20%">购物&配送</th>
                            <th width="20%">售后服务</th>
                            <th width="20%">关注我们</th>
                            <th width="20%">联系我们</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="javascript:;" title="新用户注册">新用户注册</a></td>
                            <td><a href="javascript:;" title="订单流程">订单流程</a></td>
                            <td><a href="javascript:;" title="如何办理退货">如何办理退货</a></td>
                            <td><a href="javascript:;" title="关于萤石">关于萤石</a></td>
                            <td><a href="javascript:;" id="dochat">
                                <i class="i-bob"></i>
                                &nbsp;在线客户&nbsp;
                                <i class="i-reco"></i>
                                </a></td>
                            </tr>
                        <tr>
                            <td><a href="javascript:;" title="会员登录">会员登录</a></td>
                            <td><a href="javascript:;" title="付款方式">付款方式</a></td>
                            <td><a href="javascript:;" title="售后服务网点">售后服务网点</a></td>
                            <td><a href="javascript:;" @mouseenter="weixin">
                                官方微信号
                                <div class="weixin" style="display:none" id="wei">
                                    <img src="../../public/img/index/47.jpg" alt="">
                                </div>
                                </a></td>
                            <td><a href="javascript:;" id="dochat">
                                <i class="i-bob"></i>
                                &nbsp;yingshi@hikvision.com&nbsp;
                                </a></td>
                            </tr>
                        <tr>
                            <td><a href="javascript:;" title="交易须知">交易须知</a></td>
                            <td><a href="javascript:;" title="发票须知">发票须知</a></td>
                            <td><a href="javascript:;" title="维修申请">维修申请</a></td>
                            <td><a href="javascript:;" title="新浪微博">新浪微博</a></td>
                            <td><a href="javascript:;" id="dochat">
                                <i class="i-phone"></i>
                                &nbsp;400-878-7878&nbsp;
                                <i class="i-busy"></i>
                                </a></td>
                            </tr>
                        <tr>
                            <td><a href="javascript:;" title="服务条款">服务条款</a></td>
                            <td><a href="javascript:;" title="收费标准及送达事件">收费标准及送达事件</a></td>
                            <td><a href="javascript:;" title="游客订单查询">游客订单查询</a></td>
                            <td><a href="javascript:;" title="发票查询">发票查询</a></td>
                            <td><a href="javascript:;" title="安全响应中心">安全响应中心</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="copyright">
                <span>©</span>
                2019 杭州萤石网络有限公司 | 
                <a href="javascript:;" style="color:rgb(102,102,102)">浙ICP备16009593号-1</a>
                &nbsp;|&nbsp;
                <a href="javascript:;" style="color:#525252">使用条款</a>
                <span style="color:rgb(51,51,51)">
                    <font size="2">&nbsp;&nbsp;|&nbsp;&nbsp;</font>
                </span>
                <a href="javascript:;" type="url" style="color:#525252;">隐私权策略</a>
            </div>
            <div class="footer-licences">
                <div>
                    <img src="../../public/img/index/11.png" alt="">
                </div>
            </div>
     </div>
     <div class="side-bar">
         <ul>
             <li class="first">
                 <a href="javascript:;" class="bridgehead">
                     <i class="i-kefu"></i>
                     联系客户
                </a>
             </li>
             <li>
                 <a href="javascript" target="_blank">
                     <i class="i-suggest"></i>
                     建议反馈
                 </a>
             </li>
             <li class="third">
                <a href="#" id="back-top">
                    <i class="i-top"></i>
                    返回顶部
                </a>
             </li>
         </ul>
     </div>
</div>
</template>
<script>
export default {
     methods:{
         weixin(){
             var v3=document.getElementById("wei");
             if(v3.style.display=="none"){
             v3.style.display="block"
             }else{ 
            v3.style.display="none"
             }
         }
     }
}
</script>
<style scoped>
    .footer-wrapper{
        margin-top: 80px;
        height:530px;
        min-width:1200px;
        width:100%;
        background-color: #1F1F1F;
    }
    .service-info{
        margin: 0 auto;
        width:1200px;
        /* height:86px; */
        padding:30px 0 15px;
        border-bottom: 1px solid #3c3c3c;
    }
    .service-info .info-item{
        position: relative;
        float: left;
    }
    .info-item a{
        display: block;
        padding: 0 39px;
        color:#525252;
        font-size: 24px;
        height:40px;
        line-height: 40px;
        vertical-align: middle;
    }
    ul{
        text-decoration: none;
    }
    .info-item a i{
        margin-right: 5px;
    }
    .i-seven{
        display: inline-block;
        width:30px;
        height:30px;
        vertical-align: middle;
        background:url("../../public/img/index/3.png")no-repeat center -1px
    }
    a:hover{
        text-decoration: none;
    }
    .info-item a:after{
        content: "";
        display: block;
        position:absolute;
        right: 0;
        top:0;
        width:1px;
        height: 100%;
        background-color: #525252;
    }
    .i-fifteen{
        display: inline-block;
        width: 30px;
        height: 30px;
        vertical-align: middle;
        background: url("../../public/img/index/4.png") no-repeat center -1px;
    }
    .i-free{
        display: inline-block;
        width: 48px;
        height: 30px;
        vertical-align: middle;
        background: url("../../public/img/index/5.png") no-repeat center -2px;
    }
    small{
        font-size: 12px;
    }
    .i-local{
        display: inline-block;
        width:30px;
        height:30px;
        vertical-align: middle;
        background: url("../../public/img/index/6.png")no-repeat center -2px;
    }
    .clearfix::after{
        content: "";
        display: block;
        height:0;
        visibility: hidden;
        clear: both;
    }
    .ent-item a::after{
        content: "";
        display: block;
        height:0;
    }
    .footer-list{
        width:1200px;
        margin: 0 auto;
        padding-bottom: 30px;
        border-bottom:1px solid #525252;
    }
    .footer-table{
        width:100%;
        text-align: left;
    }
    table{
        border-collapse: collapse;
        border-spacing: 0;
    }
    .footer-table th{
        padding:20px 0 8px;
        font-size: 15px;
        color:#525252;
        text-align: left;
    }
    .footer-table td a{
        position: relative;
        display: block;
        width:100%;
        height:10%;
        padding:4px 0;
        color:#525252;
        text-align: left;
        font-size: 14px;
    }
    .i-bob{
        display: inline-block;
        width:16px;
        height:14px;
        vertical-align: middle;
        background: url("../../public/img/index/7.png")no-repeat center center;
    }
    .i-reco{
        display: inline-block;
        width:31px;
        height:18px;
        vertical-align: middle;
        background: url("../../public/img/index/8.png")
    }
     .weixin{
        /* display: block; */
        position: absolute;
        width:234px;
        height:234px;
        top:50%;
        left:-220px;
        margin-top:-122px;
        border:4px solid #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(255, 255, 255, .360784);
        z-index: 10;
        transition: all 5s linear;
    }
    .i-phone{
        display: inline-block;
        width:16px;
        height:14px;
        vertical-align: middle;
        background:url("../../public/img/index/9.png")center center no-repeat;
    }
    .i-busy{
        display: inline-block;
        width:31px;
        height:18px;
        vertical-align: middle;
        background:url("../../public/img/index/10.png")no-repeat center center;
    }
    .copyright{
        width:1200px;
        margin: 20px auto;
        color:#525252;
        text-align: center;
        font-size: 14px;
    }
    .footer-licences{
        text-align: center;
    }
    .side-bar{
        position: fixed;
        right:10px;
        top:50%;
        height:216px;
        width:40px;
        margin-top: -108px;
        z-index:100;
    }
    .i-kefu{
        display: inline-block;
        width:40px;
        height:25px;
        vertical-align: middle;
        background: url("../../public/img/index/12.png")no-repeat center center;
    }
    .side-bar .first a{
        background-color: #f26a18;
    }
    .side-bar a{
        display: block;
        width:100%;
        height:100%;
        text-align: center;
        padding:5px 0;
        color:#fff;
        background-color: #888;
        transition: all .2s; 
    }
    .i-suggest{
        display: inline-block;
        width:40px;
        height:21px;
        vertical-align: middle;
        background: url("../../public/img/index/13.png")no-repeat center center;
    }
     .side-bar li{
         border-bottom: 2px solid transparent;
         transition: all .2s;
     }
    .third{
        border:0;
    }
    .side-bar .third a{
        padding:0 0 5px;
    }  
    .i-top{
        display: inline-block;
        width:40px;
        height:21px;
        vertical-align: middle;
        background: url("../../public/img/index/14.png")no-repeat center center; 
    }
      .side-bar .first a:hover{
              background-color: #DC5B0E;
          }
          .side-bar li a:hover{
              background-color: #707070;
          }
</style>
