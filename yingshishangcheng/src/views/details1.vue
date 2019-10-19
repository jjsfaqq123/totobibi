<template>
    <div>
        <hea></hea>
        <div class="product-main">
            <div class="li_tab p1200">
                <div class="tab_inner">
                    <div class="tab_inner_1">
                        <span class="pro_title cutwords" title="【新品-全彩标准版】C3C高清互联网摄像机">
                        【新品-全彩标准版】C3C高清互联网摄像机
                        </span>
                        <ul>
                            <li id="t1" class="titem active">概述</li>
                            <li id="1" class="titem">详细参数</li>
                            <li id="tp1" class="titem">评论(144)</li>
                            <li id="tmap" class="titem right_line_none">附近体验店</li>
                            <li id="tmap" class="titem cart groupon">
                                <a href="javascript:;" title="加入购物车" class="btn_e">加入购物车</a>
                            </li>
                        </ul>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            <div class="tab_cont tab">
                <ul>
                    <li class="item_con">
                    <!-- pc版默认加上四张图片 -->
                        <div class="pwhole baners" style="position:relative">
                            <img src="../../public/img/details/26.jpg">
                            <a href="javascript:;" title="立即购买" class="btn_e toCart active-btn">立即购买</a>
                            <div class="pro-banner_safe">
                                <div class="pro-banner_price pos-left" style="top:469px;left:-1215px;">
                                    <div class="pro-banner_price-normal">
                                        <p class="price">
                                            <span class="price-sign">￥</span>
                                            <span class="price-num">249</span>
                                            <span class="price-range">(起)</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pwhole">
                            <img src="../../public/img/details/27.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/28.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/29.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/30.jpg" alt="">
                        </div>
                        <div class="pwhole">
                            <img src="../../public/img/details/31.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/32.jpg" alt="">
                        </div>
                          <div class="pwhole">
                            <img src="../../public/img/details/33.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/34.jpg" alt="">
                        </div>
                        <div class="pwhole">
                            <img src="../../public/img/details/35.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/36.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/37.jpg" alt="">
                        </div>
                        <div class="pwhole">
                            <img src="../../public/img/details/38.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/39.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/40.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/41.jpg" alt="">
                        </div>
                          <div class="pwhole">
                            <img src="../../public/img/details/42.jpg" alt="">
                        </div>
                          <div class="pwhole">
                            <img src="../../public/img/details/43.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/44.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/45.jpg" alt="">
                        </div>
                         <!-- <div class="goods-install-video">
                            <video src="../../public/img/details/1.mp4" controls loop></video>
                        </div> -->
                         <div class="pwhole">
                            <img src="../../public/img/details/46.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/47.jpg" alt="">
                        </div>
                          <div class="pwhole">
                            <img src="../../public/img/details/48.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/49.jpg" alt="">
                        </div>
                         <div class="pwhole">
                            <img src="../../public/img/details/50.jpg" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
 import hea from "../components/header"
 import  foot from "../components/footer.vue"
export default {
    components:{hea,foot}
}
</script>
<style scoped>
    .product-main{
        min-width:960px;
        font-family: "微软雅黑";
        font-size: 12px;
    }
    .li_tab{
        height:55px;
    }
    .p1200{
        width:1200px;
        margin: 0 auto;
    }
    .tab_inner{
        font-size: 14px;
        color:#434a54;
        width:100%;
        height:54px;
        border-bottom:1px solid #e2e2e2;
    }
    .tab_inner_1{
        width:100%;
        margin: 0 auto;
        position: relative;
    }
    .pro_title{
        display: block;
        float: left;
        width: auto;
        font-size: 18px;
        line-height: 54px;
        max-width:50%;
        cursor: default;
        position: absolute;
        left: 0;
    }
    .cutwords{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .product-main .tab_inner ul{
        float: right;
    }
    .product-main .tab_inner .titem.active{
        color:#F15C43;
    }
    .product-main .tab_inner .titem{
        float: left;
        display: block;
        height:54px;
        line-height: 54px;
        margin-right: 0;
        cursor: pointer;
        font-size: 14px;
        text-align: center;
        border: none;
        padding:0 8px;
        background: url("../../public/img/details/1.png")no-repeat right center;
    }
    .product-main .tab_inner .titem.right_line_none{
        background: 0 0;
        padding-right: 0;
    }
    .titem.cart a{
        width:112px;
        height:32px;
        border: 0;
        padding: 0;
        line-height: 32px;
        font-size: 14px;
    }
    .btn_e{
        filter: none;
        background:#ff6102;
        background-image: linear-gradient(#ff6202,#ff7d02);
        border-radius: 5px;
        color:#fff;
        display: inline-block;
        height:29px;
        line-height: 29px;
        padding:0 10px;
        text-align: center;
        text-indent: 0;
    }
    a:hover{
        text-decoration: none;
    }
    .product-main .tab_inner .titem.cart{
        padding-right: 0;
    }
    .product-main .item_con{
        min-height: 400px;
        overflow: hidden;
        width:100%;
        position: relative;
    }
    .pwhole{
        width:100%;
    }
    .product-main .tab_cont .pwhole img{
        position: relative;
        left:50%;
        margin-left: -960px;
        display: block;
    }
    .active-btn.btn_e{
        position: absolute;
        /* top:0; */
        left: 50%;
        width:190px;
        height:48px;
        line-height:48px;
        font-size: 18px;
    }
    .toCart{
        opacity: 1;
        margin-left: -610px;
        top:535px;
        width:240px;
        height:48px;
        line-height: 48px;
    }
    .active-btn{
        border:none;
        padding:0;

    }
     .pro-banner_price{
        position: absolute;
        top:386px;
        left: 40px;
    }
    .pro-banner_safe{
        position: absolute;
        width:1200px;
        left: 50%;
        margin-left: 600px;
        top:0
    }
    .pro-banner_price .price{
        line-height: 1.5;
        vertical-align: middle;
        font-size: 36px;
        color:#ff6a02;
    }
    .price-sign{
        font-size: 24px;
        letter-spacing: -2px;
        vertical-align: middle; 
    }
    .price-range{
        margin-bottom: 0;
        font-size: 16px;
        vertical-align: center;
    }
    .goods-install-video{
        position: relative;
        margin: 0 auto;
        width:1200px;
        height:674px;
    }
    video{
        width:1200px;
        height:677px;
    }
</style>
