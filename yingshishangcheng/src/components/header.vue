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
                             <router-link to="login" class="user-link" >登录</router-link>
                         </li>
                         <li class="item-item">
                             <a href="/fall" class="user-link">注册</a>
                         </li>
                     </ul>
                 </div>
            </div>
             <div class="nav-header">
                <div class="top-nav clearfix">
                    <div class="logo" style="padding-right:10px">
                        <a href="/">
                            <img src="../../public/img/header/logo.png" class="img-1">
                        </a>
                    </div>
                    <div class="nav-list" id="middle-nav">
                        <div class="middle-inner">
                            <ul class="clearfix inner-scrool" style="width:8000px;">
                                <li class="nav-list-item">
                                    <a href="#" class="item-link">摄影机</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">智能锁</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">猫眼门铃</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">套装方案</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">摄影机</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">传感报警</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">智能控制</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">运动数码</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">儿童看护</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">智能存储</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">网络通讯</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">配件</a>
                                </li>
                                 <li class="nav-list-item">
                                    <a href="#" class="item-link">更多</a>
                                </li>
                            </ul>
                        </div>
                        <div class="child-list" id="child-list">
                            <div class="product-menu">
                                <div class="child-container">
                                    <ul class="item-ul clearfix">
                                        <li class="child-list-item">
                                            <div class="figure thumb">
                                                <a href="#">
                                                    <img src="../../public/img/header/9.jpg" alt="">
                                                </a>
                                            </div>
                                            <h4 class="goods-title">
                                                <a href="#" class="name-link"  title="【买就赠】S6语音控制防抖4K运动相机">【买就赠】S6语音控制防抖4K运动相机</a>
                                                <p class="price">￥195(起)</p>
                                            </h4>
                                        </li>
                                         <li class="child-list-item">
                                            <div class="figure thumb">
                                                <a href="#">
                                                    <img src="../../public/img/header/6.jpg" alt="">
                                                </a>
                                            </div>
                                            <h4 class="goods-title">
                                                <a href="#" class="name-link"  title="【限时立省30】C3WN高清互联网摄像机 标准版">【限时立省30】C3WN高清互联网摄像机 标准版</a>
                                                <p class="price">￥199(起)</p>
                                            </h4>
                                        </li>
                                         <li class="child-list-item">
                                            <div class="figure thumb">
                                                <a href="#">
                                                    <img src="../../public/img/header/7.jpg" alt="">
                                                </a>
                                            </div>
                                            <h4 class="goods-title">
                                                <a href="#" class="name-link"  title="【新品上市】C4X智能双目互联网摄像机400万高清 POE版-9月底发货">【新品上市】C4X智能双目互联网摄像机400万高清 POE版-9月底发货</a>
                                                <p class="price">￥489(起)</p>
                                            </h4>
                                        </li>
                                          <li class="child-list-item">
                                            <div class="figure thumb">
                                                <a href="#">
                                                    <img src="../../public/img/header/8.jpg" alt="">
                                                </a>
                                            </div>
                                            <h4 class="goods-title">
                                                <a href="#" class="name-link"  title="【新品上市】C3X Wi-Fi版智能双摄互联网摄像机-9月底发货">【新品上市】C3X Wi-Fi版智能双摄互联网摄像机-9月底发货</a>
                                                <p class="price">￥489(起)</p>
                                            </h4>
                                        </li>
                                         <li class="child-list-item">
                                            <div class="figure thumb">
                                                <a href="#">
                                                    <img src="../../public/img/header/5.jpg" alt="">
                                                </a>
                                            </div>
                                            <h4 class="goods-title">
                                                <a href="#" class="name-link"  title="【立省50】C1C萤石互联网摄像机 高清夜视版/1080P">【立省50】C1C萤石互联网摄像机 高清夜视版/1080P</a>
                                                <p class="price">￥149(起)</p>
                                            </h4>
                                        </li>     
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="right-ctrl">
                            <img src="../../public/img/header/5.png" alt="">
                        </div>
                    </div>
                    <div class="search-box">
                        <div class="form-group">
                            <form id="mall-form">
                                <span class="algolia-autocomplete">
                                    <input type="text" class="search-box search">
                                </span>
                                <button type="submit" class="auto-complete">
                                    <i class="search-icon"></i>
                                </button>
                            </form>
                        </div>
                        <div class="hot-worlds" id=hot-worlds>
                            <a href="#" class="hot-world-item">C6C</a>
                            <a href="#" class="hot-world-item">C3W</a>
                        </div>
                    </div>
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
         /* vertical-align: middle; */
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
        /* vertical-align: middle; */
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
      /* vertical-align: middle; */
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
  /* .inner-scrool:hover{
      width:200px
  } */
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
      transition: all 5s linear;
  }
  .toolbar-user .item-item{
      position: relative;
      float: left;
      box-sizing: border-box;
      transition: all .15s;
  }
   .toolbar-user .item-item .user-link{
       position:relative;
       display: block;
       padding: 0 15px;
       line-height: 40px;
       /* vertical-align: middle; */
       color:#fff;
       transition: all .15s
   }
  
   .toolbar-user .item-item .user-link:hover{
      color:darkgray;
   }
   .nav-header{
       margin: 0 auto;
       max-width:1200px;
   }
   .top-nav{
       height:90px;
   }
   .logo{
       float: left;
       padding:17px 100px 17px 0;
   }
   .img-1{
       width:166px;
       height:50px;
   }
   .nav-list{
       float:left;
       width:680px;
       height:80px;
       margin-left: 15px;
       overflow: hidden;
   }
   .middle-inner{
       position: relative;
       height:100%;
       overflow: hidden;
   }
    .middle-inner:hover .inner-scrool{
        height:500px;
        z-index:999;
    }
   .inner-scrool{
       width:1015px;
       margin-left:0px;
       max-height:80px;
   }
   .inner-scrool ul{
       position: absolute;
       display: block;
       overflow: hidden;
   }
   .nav-list .nav-list-item{
       float: left;
       cursor: pointer;
   }
   .nav-list-item .item-link{
       display:block;
       padding:40px 15px 20px;
       color:#767676;
       /* transition: all 5s linear; */
       padding-left: 0;
       text-decoration: none;
   }
   .nav-list-item .item-link:hover {
       color:#f26a18;
       
       /* display: block; */
   }
   .child-list{
       top:120px;
       position: absolute;
       left:0;
       height:0;
       width:100%;
       min-width:1200px;
       background-color:#fff;
       z-index:20;
       transition: all .5s linear;
   }
     .child-list .active{
        height:200px;
        width:100%;
        border-top:1px solid #e6e6e6;
        border-bottom:1px solid #e6e6e6;
        box-shadow: 0 5px 5px rgba(0 0 0 .2);
    }
   .child-list ul{
       width:1200px;
       position: absolute;
       display: none;
       margin-left: 0;
       overflow: hidden;
       margin-top:26px;
      
   }
    /* .child-list ul:hover{
        width:100%;
         border-top: 1px solid #4c4c4c; 
    } */
   .product-menu{
       position: relative;
       width:1199px;
       height:100%;
       margin: 0 auto;
       /* overflow: hidden; */
   }
  .child-container{
       width:1200px;
       height:100%;
       margin: 0 auto;
       overflow: hidden;
   }
    .child-list-item{
        position: relative;
        float: left;
        width:240px;
        height:200px;
        text-align: center;
        cursor: auto;
        overflow: hidden;
    }
    .thumb{
        margin:5px 56px;
        width:128px;
        height:118px;
    }
    .thumb a{
        width:100%;
        height:100%;
        display: block;
    }
     .thumb a img{
         width:128px;
         height:118px;
     }
     .goods-title{
         font-size: 14px;
         font-weight: 500;
         text-align: center;
     }
     .goods-title .name-link{
         height:19px;
         display: block;
         overflow: hidden;
         white-space: nowrap;
         text-overflow: ellipsis;
         color:#232323;
         text-decoration: none;
     }
     .price{
         font-size: 14;
         color:#ff4301;
     }
     .nav-list .right-ctrl{
         position: absolute;
        width: 20px;
        height: 20px;
        top: 94px;
        left: 50%;
        margin-left: 275px;
        cursor: pointer;
     }
     .search-box {
        position: relative;
        float: right;
        width: 297px;
        height: 40px;
        padding: 25px 0;
    }
    .algolia-autocomplete {
    width: 245px;
    position: relative;
    display: inline-block;
    direction: ltr;
    }
    .search-box input {
    position: relative;
    vertical-align: top;
    float: left;
    width: 235px;
    height: 38px;
    padding: 0 5px;
    line-height: 40px;
    vertical-align: middle;
    background-color: #FDFDFD;
    border: 1px solid #E1E1E1;
    transition: all .15s;
    outline:none;
    }
    .search-box .search:focus{
        border-color:#f26b18
    }
    .search-box button.auto-complete{
        position: absolute;
        top:24px;
        right:11px;
        outline: none;
    }
    .search-box button.auto-complete:hover{
        background-color: #f26a18;
    }
     .search-box  button{
         width:50px;
         height:40px;
         cursor: pointer;
         background-color:#FDFDFD;
         border:1px solid #E1E1E1;
         border-left:none;
         transition: all .15s
     }
     .search-icon{
         display: inline-block;
         width:50px;
         height:40px;
         vertical-align: middle;
         background: url("../../public/img/header/6.png")no-repeat center center;
         transition: all .15s;
     }
     .hot-worlds{
         position:absolute;
         width:80px;
         top:33px;
         right:63px;
         height:24px;
         max-width:140px;
     }
     .hot-world-item{
         padding:4px;
         margin-left: 5px;
         color:#767676;
         font-size:12px;
         background-color: #ededed;
         text-decoration: none;
         transition: all .1s linear;
     }
      .hot-world-item:hover{
          background-color:#f26a18;
      }
</style>

