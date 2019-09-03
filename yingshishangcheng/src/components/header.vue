<template>
   <div id="container">
       <div class="nav-wrapper">
           <div class="toolbar-container">
               <div class="nav-toolbar">
                <ul class="toolbar-menu">
                    <li class="menu-item">
                        <a href="">萤石商城</a>
                    </li>
                    <li class="menu-item">
                        <a href="">服务下载</a>
                    </li>
                    <li class="menu-item">
                        <a href="">开发者平台</a>
                    </li>
                    <li class="menu-item">
                        <a href="">零售服务商</a>
                    </li>
                    <li class="menu-item">
                        <a href="">萤石运动</a>
                    </li>
                    <li class="menu-item">
                        <a href="">集团客户</a>
                    </li>
                     <li class="menu-item">
                        <a href="">
                            <i class="arrow-right"></i>
                            进入莹石云
                            </a>
                        </li>
                     </ul>
                     <ul class="toolbar-user clearfix align-right">
                         <li class="user-item end-item">
                             <a href="login.html" class="user-link">我的订单</a>
                         </li>
                         <li class="user-item end-item header-cart">
                             <div class="user-link" id="minicart-link">
                                 <i class="i-cart"></i>
                                 <span>(0)</span>
                             </div>
                             <div class="minicart-cont" id="minicart-cont">
                                <div class="minicart_top"></div>
                                <div class="miniCarDetail">
                                    <div class="cart-empty">购物车中还没有商品，快去选购吧</div>
                                </div>
                             </div>
                         </li>
                         <li class="user-item end-item" id="header-qrcode-img">
                             <a href="javascript:;" class="user-link">app下载</a>
                             <div class="header-qrcode-line"></div>
                             <div class="header-qrcode-img" id="header-qrcode-img">
                                 <a href="#" class="header-qrcode-sys" target="_blank"></a>
                                 <a href="#" class="header-qrcode-sys" target="_blank"></a>
                             </div>
                         </li>
                     </ul>
                     <ul class="toolbar-user" clearfix id="loginbar">
                         <li class="item-item  login">
                             <a href="login">登录</a>
                         </li>
                     </ul>
                 </div>
            </div>
       </div>
    </div> 
</template>
<script>
export default {
    
}
</script>
<style scoped>
@import url("../assets/css/comm.css"); 
    .nav-wrapper{
        width:100%;
        min-width:1200px;
    }
     .nav-wrapper .toolbar-container{
         height:40px;
         background: #525252;
         font-size:12px;
     }
     .nav-toolbar{
         position:relative;
         max-width:1200px;
         min-width:1130px;
         height:100%;
         margin:  0 auto;
     }
     .toolbar-menu{
         float: left;
         min-width:720px;
     }
     .toolbar-menu .menu-item{
         position: relative;
         float: left;
     }
     .toolbar-menu .menu-item a{
         display: block;
         padding:0  10px;
         line-height: 40px;
         vertical-align: middle;
         text-decoration: none;
         color:#fff;
         transition: all .15s;
     }
      .toolbar-menu .menu-item a:hover{
          color: darkgray
      }
      .arrow-right{
          display: inline-block;
          width:12px;
          height:9px;
          background:url("../../public/img/header/1.png")
      }
      .toolbar-user .align-right{
          margin-right: -15px;
      }
      .toolbar-user{
          float:right;
      }
     .toolbar-user>.user-item{
         position:relative;
         float: left;
         box-sizing: border-box;
         transition: all .15s 
     }
     .toolbar-user>.user-item:hover .minicart-cont{
         display: block;
         background-color: #fff;
         color:red;
     }
     .header-cart{
         background-color:#f26a18;
         z-index: 4;
     }
     #minicart-link{
        cursor: pointer;
        z-index:4;
        background: #f26a18;
     }
     .user-link{
        position: relative;
        display: block;
        padding:0 15px;
        line-height: 40px;
        vertical-align: middle;
        color:#fff;
        transition: all .15s;
     }
     .user-link:hover{
         text-decoration: none;
         color:darkgray;
     }
    .i-cart{
        display: inline-block;
        width:20px;
        height:16px;
        vertical-align: middle;
        background: url(../../public/img/header/2.png)no-repeat center center
    }
    .minicart-cont{
        position: absolute;
        width:333px;
        height:auto;
        right:-1px;
        top:39px;
        padding-top:15px;
        border:1px solid #c6c6c6;
        box-shadow: 0 2px 10px rgba(0,0,0,.15);
        background-color:#fff;
        overflow-y: auto;
        overflow-x: hidden;
        display: none;
        z-index: 5;
        border-top-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
        transition: width .5s linear,height.5s linear;  
    }
    .minicart_top{
        width:333px;
        height:4px;
        float: left;
    }
    .minicart_top{
        width:328px;
        padding-right: 4px;
        padding-left: 1px;
        float: left;
    }
  .cart-empty{
      background:url(../../public/img/header/3.png) 20px center no-repeat;
      padding:30px 0 30px 110px;
      color:#ccc; 
  }
  .user-item{
      position: relative;
      float: left;
      box-sizing: border-box;
      transition: all .15s;
  }
  .user-item:hover .header-qrcode-img{
      display: block;
  }
  .user-link{
      position: relative;
      display: block;
      padding: 0 15px;
      line-height: 40px;
      vertical-align: middle;
      color:#fff;
      transition: all .15s
  }
  .header-qrcode-line{
      display: none;
      position: absolute;
      z-index:20;
      left: 0;
      bottom:-2px;
      width:100%;
      height:2px;
      background: #fff;
  }
  .header-qrcode-img{
      display: none;
      position:absolute;
      right:-1px;
      z-index: 10;
      top:40px;
      width: 174px;
      height:235px;
      background:url(../../public/img/header/4.png)no-repeat;
      border:1px solid #c6c6c6;
      border-radius: 4px;
      border-top-right-radius: 0;
      box-shadow: 0 1px 2px #ddd;
  }
</style>
