<template>
<body>
    <div>
        <div class="topnavs">
            <div id="inc-topnavs">
                <a href="/" class="topnav-logo"></a>
                <ul class="topnav-list registerNav">
                    <li class="topnav-item topnav-item-login">
                        <a href="/login" class="login">登录</a>
                    </li>
                    <li class="topnav-item topnav-line">|</li>
                    <li class="topnav-item">
                        <a href="javascript:;" class="text-gray">注册</a>
                    </li>
                    <li class="topnav-item topnav-line">|</li>
                    <li class="topnav-item">
                        <a href="javascript:;" class="text-gray">我的订单</a>
                    </li>
                    <li class="topnav-item topnav-line">|</li>
                    <li class="topnav-item">
                        <a href="javascript:;" class="text-gray app-icon">移动版下载</a>
                    </li>
                    <li class="topnav-item topnav-line">|</li>
                    <li class="topnav-item">
                        <a href="javascript:;" class="text-gray">帮助</a>
                    </li>
                    <li class="topnav-item topnav-line">|</li>
                    <li class="topnav-item">
                        <a href="javascript:;" class="text-gray triangle-down"  @mouseenter="show" id='a1'>网站导航</a>
                    </li>
                </ul>
                <div class="nav-box navigation-box" style="display:none" id="a2" @mouseleave="show">
                    <ul>
                        <li><a href="javascript:;" class="triangle-up">网站导航</a></li>
                        <li><a href="javascript:;">萤石官网</a></li>
                        <li><a href="javascript:;">萤石云</a></li>
                        <li><a href="javascript:;">萤石社区</a></li>
                    </ul>
                </div>
            </div>
            <div class="container register">
                <form id="registForm" class="registForm form validator">
                    <div class="title">用户注册</div>
                    <ul>
                        <li>
                            <label for="username">
                                <up:name class="up_noblank">用户名:</up:name>
                                <div class="inputTip"></div>
                                <input type="text" class="loginText">
                            </label>
                        </li>
                         <li>
                            <label for="username">
                                <up:name class="up_noblank">密码:</up:name>
                                <div class="inputTip"></div>
                                <input type="text" class="loginText">
                            </label>
                        </li>
                         <li>
                            <label for="username">
                                <up:name class="up_noblank">确认密码:</up:name>
                                <div class="inputTip"></div>
                                <input type="text" class="loginText">
                            </label>
                        </li>
                         <li>
                            <label for="username">
                                <up:name class="up_noblank">邮箱:</up:name>
                                <div class="inputTip"></div>
                                <input type="text" class="loginText">
                            </label>
                        </li>
                         <li>
                            <label for="username">
                                <up:name class="up_noblank">手机号码:</up:name>
                                <div class="inputTip"></div>
                                <input type="text" class="loginText">
                            </label>
                        </li>
                         <li>
                            <label for="imgcode">
                                <up:name class="up_noblank">验证码:</up:name>
                                <div class="inputTip" style="display:none">请输入图片验证码</div>
                                <input type="text" class="loginText" style="width:130px">
                                <img src="../../public/img/index/48.jpg" alt="">
                            </label>
                            <a href="javascript:;" class="code_again">看不清</a>
                        </li>
                        <li style="margin-bottom:10px;">
                            <label style="float:left;width:80px;margin-left:75px;">
                                <input type="checkbox" id="agree" class="agree" style="width:20px;float:left">
                                <label for="agree" class="agreelabel">&nbsp;&nbsp;我同意</label>
                            </label>
                            <a href="javascript:;" class="login-deal service">《萤石服务协议》</a>
                            <a href="javascript:;" class="login-deal service">《萤石隐私政策》</a>
                            <label for="" id="agreePrompt" class="agree_Prompt" >您要先同意服务条款，才能注册服务哦</label>
                        </li>
                        <li>
                            <button type="button" class="btn_regist redBtn">下一步</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
</body>
</template>
<script>
export default {
    methods:{
        show(){
            var a1=document.getElementById("a1")
            var a2=document.getElementById("a2")
            if(a2.style.display=="none"){
                a2.style.display="block"
            }else{
                a2.style.display="none"
            }
        }
    }
}
</script>
<style scoped>
    body{
        background: url("../../public/img/index/20.png")repeat-x top center #ffffff;
        width:100%;
        height:100%;
    }
    #inc-topnavs{
        width:960px;
        height:83px;
        margin: 0 auto;
        position: relative;
    }
    .topnav-logo{
        width:315px;
        height:100%;
        background:url('../../public/img/index/15.png')no-repeat 0 25px;
        float: left;
    }
     #inc-topnavs>.topnav-list{
         height:22px;
         float: right;
         margin-top: 33px;
     }
     #inc-topnavs .topnav-item{
            display: inline-block;
            height:22px;
            padding-left: 5px;
            padding-right: 5px;
            float: left;
            color:#BEBEBE;
            line-height: 18px;
       }
      #inc-topnavs .topnav-item-login{
          padding-left: 19px;
          padding-right: 20px;
          background:url("../../public/img/index/16.png")no-repeat 
      }
       #inc-topnavs .topnav-item-login a{
           color:#fff;
           font-size: 13px;
       }
       #inc-topnavs .text-gray{
           color:gray;
       }
       
      #inc-topnavs .text-gray:hover{
           color:#f06c5a;
       }
        #inc-topnavs a:hover{
            color:#fff;
        }
         #inc-topnavs .topnav-item .app-icon{
            padding-left: 25px;
            background: url("../../public/img/index/17.png")no-repeat 5px 4px;
        }
        #inc-topnavs .navigation-box{
            right:3px;
            top:30px;
        }
         #inc-topnavs .nav-box{
             position: absolute;
             min-width: 80px;
             border:1px solid #d0d0d0;
             background: white;
             z-index:200    
         }
          #inc-topnavs .nav-box ul{
              padding-bottom: 6px;
          }
           #inc-topnavs .nav-box li{
               height:25px;
               line-height: 25px;
               padding-right: 5px;
           }
            #inc-topnavs .nav-box .triangle-up{
                 padding-right: 15px;
                background: url("../../public/img/index/18.png") no-repeat  right 7px;
            }
             #inc-topnavs .nav-box li a{
                 display: block;
                 color:#8b8b8b;
                 padding-left: 5px;
                 padding-right: 5px;
                 text-align: center;
             }
              #inc-topnavs .nav-box li a:hover{
                  color:#f06c5a;
              }
              #inc-topnavs .topnav-item>.triangle-down{
                  padding-right: 15px;
                  background:url("../../public/img/index/20.png")no-repeat right 9px;
              }
            .register{
                width:960px;
                height:610px;
                border:1px solid #dedede;
                background-color:rgba(61,61,61,0);
                box-shadow: 0 3px 7px rgba(0,0,0,.07);
                background-image: linear-gradient(to top,#f4f4f4,#fff 76%);
                position: relative;
                background: url("../../public/img/index/21.png")#fff no-repeat right bottom !important;
            }
            .container{
                width:960px !important;
                margin:0 auto;
                margin-top:10px;
                min-height: 400px;
                padding-bottom: 10px;
                padding-left: 0;
                padding-right: 0;
            }
            .container::before{
                display: table;
                content: "";
            }
            .register>.registForm{
                padding-left:20px;
                padding-top:40px;
            }
            form.validator{
                position: relative;
            }
            .register .title{
                font-size: 14px;
                font-weight: bold;
                color:#6c6c6c;
                margin-bottom: 15px;
            }
            label{
                margin-bottom: 5px;
            }
            label{
                position: relative;
            }
            li label{
                display: inline-block;
            }
            up\:name.up_noblank{
                width:85px;
                font-size: 13px;
                display: inline-block;
            }
            up\:name{
                padding-left: 10px;
            }
            .inputTip{
                color:#999999;
                display: block;
                position: absolute;
                width:500px;
                height:18px;
                top:4px;
                left: 87px;
            }
            .register .registForm input{
                border-color:#E7E7E7;
            }
            .register input{
                width:450px;
            }
            input[type="text"]{
                background-color: #ffffff;
                border:1px solid #cccccc;
                border-radius: 3px;
            }
            input[type="text"]{
                display: inline-block;
                height:28px;
                padding:4px;
                margin-bottom: 9px;
                font-size: 13px;
                line-height: 28px;
                color:#555555;
            }
            .code_again{
                margin-left: 5px;
                user-select: none;
                font-size: 12px;
            }
            a{
                cursor: pointer;
            }
             input[type="checkbox"]{
                 margin: 5px 0;
                 line-height: normal;
                 cursor: pointer;
             }
             .service{
                 padding-left: 30px;
                color:#5283D4 !important;
                 font-size: 12px;
             }
             .agree_Prompt{
                color: #e1593b;
                padding-left: 22px;
                display: inline;
                visibility: hidden;
                margin-left: 15px;
             }
             .register .redBtn{
                 border: none;
                 margin-left: 75px;
             }
             .redBtn{
                 width:155px;
                 height:40px;
                 display: block;
                 margin: auto;
                 color: white;
                 font-size: 16px;
                 line-height: 40px;
                 text-align: center;
                 background: linear-gradient(to top,#f00 bottom, #dc3545);
             }
</style>
