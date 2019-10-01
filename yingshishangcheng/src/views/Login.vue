<template>
    <div class="login_mall">
        <div class="header">
            <router-link to="/" class="logo"></router-link>
        </div>
        <div id="parallax">
            <div class="main">
                <div id="parallax_form" class="animated">
                    <p class="description_a">欢迎登录萤石商城</p>
                    <form id="form">
                        <input  type="text" placeholder="用户名或手机号" style="margin-bottom:14px !important">
                        <input  type="parssword" placeholder="请输入密码" style="margin-bottom:14px !important">
                    </form>
                    <div class="clearfix"></div>
                    <div class="msic">
                        <label id="u"><input type="checkbox" class="auto_login" id="u">自动登录</label>
                        <a href="#" class="forget_pass">忘记密码?</a>
                    </div>
                     <div class="clearfix"></div>
                     <a  class="login">登&nbsp;&nbsp;&nbsp;录</a>
                     <div class="line normal"></div>
                     <p class="description_b normal">还没有账户？ 那就注册一个吧！</p>
                     <a href="#" class="register normal" id="register">注册</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        h(){
            
        }
    }
}
</script>
<style scoped>
    html .clearfix{
        height:1%;
    }
    .header{
        width:960px;
        height:60px;
        margin: auto;
    }
    .logo{
        width:368px;
        height:60px;
        display: block;
        background: url('../../public/img/index/logo_mall.png')no-repeat 0 6px;
    }
    #parallax{
        width:100%;
        min-width: 960px;
        height:510px;
        position: relative;
        overflow: hidden;
        background: url("../../public/img/index/login_main_bg.png")no-repeat center top;
    }
    .main{
        width:960px;
        height:540px;
        margin: auto;
        position: relative;
        display: block;
    }
    .login_mall #parallax_form{
        top:50px;
        left: 603px;
        width:220px;
        height:346px;
        padding:25px 32px;
    }
    .login_mall #parallax_form{
        background: url('../../public/img/index/parallax_form_bg_mall.png')
    }
    #parallax_form{
        width:226px;
        height:380px;
        background: url('../../public/img/index/parallax_form_bg_mall.png')no-repeat;
        position: absolute;
        left:650px;
        top:65px;
        padding: 25px;
        z-index: 10
    }
     #parallax_form.animated{
         width:284px;
         height:396px;
     }
    .description_a{
        font-size: 18px;
        color:red;
        margin: 0;
        margin-bottom: 16px;
    }
    form{
        margin:0 0 18px;
    }
    input[type="text"],input[type="parssword"]{
       background-color: #fff;
       border:1px solid #cccccc;
       border-radius: 3px;
       width:220px;
       height:29px;
       padding:4px;
       font-size: 13px;
       margin-bottom: 13px;
       line-height: 18px;
       color:#555555;
    }
    input[type="text"]:focus{
        box-shadow: 0px 0px 5px 3px navajowhite;
    }
    input[type="parssword"]:focus{
        box-shadow: 0px 0px 5px 3px navajowhite;
    }
    .clearfix::after{
        content: "";
        display: table;
        clear: both;
        display: block;
    }
     .clearfix::before{
         display: table;
         content: ""
     }
     .msic{
         margin-top: -8px;
     }
     .msic>.auto_login{
         width: 20px;
         float: left;
     }
     .forget_pass{
         margin-left: 82px;
         color:#5283D4 !important;
        font-size: 13px;
     }
    .login{
        width:225px;
        height:41px;
        background: url('../../public/img/index/login_btn_normal.png')no-repeat;
        display: block;
        line-height: 41px;
        text-align: center;
        color:#fff;
        font-size: 18px;
        margin-top: 15px;
        text-decoration: none;
    }
     .login:hover{
          background: url("../../public/img/index/login_btn_hover.png")no-repeat;
          text-decoration:none;
          cursor: pointer;
     }
     .login_mall #parallax_form .line{
         bottom: 100px
     }
     .line{
         position: absolute;
         bottom:145px;
         width:220px;
         border:1px dashed #D5D5D5;
     }
     .login_mall #parallax_form .description_b{
         bottom: 60px;
     }
     #parallax_form .description_b{
         position: absolute;
         bottom:105px;
         color:#595959;
         width:186px;
         height:18px;
         font-size: 13px;
     }
     .login_mall #parallax_form .register{
         bottom: 30px;
     }
     #parallax_form .register{
         width:222px;
         height:29px;
         position: absolute;
         font-size: 14px;
         text-align: center;
         line-height: 29px;
         color:#B00;
         display: block;
         background: url("../../public/img/index/register_btn_normal.png")no-repeat;
         bottom: 75px;
     }
     .login_mall{
         padding-top:100px;
     }
</style>

