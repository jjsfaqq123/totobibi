<template>
<div id="container">
    <hea></hea>
   <div class="container">
    <div id="demo" class="carousel" data-ride="carousel">
        <!-- 1.轮播图片-->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <a href="/details" >
                <img  class="d-block index-img scale" :src="list0.pic0"/>
                </a>
            </div>
            <div class="carousel-item">
                <a href="/details">
                <img  class=" d-block index-img scale" :src="p1.pic0"/>
                </a>
            </div>
            <div class="carousel-item">
                <a href="/details">
                <img  class=" d-block index-img scale" :src="p2.pic0"/>
                </a>
            </div>
            <div class="carousel-item">
                <a href="/details">
                <img  class=" d-block index-img scale"  :src="p3.pic0"/>
                </a>
            </div>
             <div class="carousel-item">
                 <a href="/details">
                <img  class=" d-block index-img scale"  :src="p4.pic0"/>
                </a>
            </div>
             <div class="carousel-item">
                <a href="/details">
                <img  class=" d-block index-img scale"  :src="p5.pic0"/>
                </a>
            </div>
        </div>
        <!-- 3.轮播指示器-->
        <div class="imgslide-nav">
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            <li data-target="#demo" data-slide-to="4"></li>
            <li data-target="#demo" data-slide-to="5"></li>
        </ul>
        </div>
    </div>
    <div class="bottom-banner">
        <ul class="clearfix">
            <li class="bottom-banner-item" v-for="(item,i) of list" :key="i">
                <a href="/details2">
                    <img :src="item.pic" alt="">
                </a>
            </li>
            <!-- 此处删除了3个li -->
        </ul> 
    </div>
    <div class="goods-container ">
        <div class="goods-card" id="shop-card">
            <div class="card-header">
                <h2>{{title.titleb}}</h2>
                <a href="#" class="view-more">{{title_right.title_right}}&nbsp;></a>
            </div>
            <div class="card-body clearfix">
                    <div class="goods-body m">
                        <div id="demo" class="carousel" data-ride="carousel">
                        <!-- 1.轮播图片-->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img  class=" d-block index-img scale" :src="p6.pic0"/>
                            </div>
                            <div class="carousel-item">
                                <img  class=" d-block index-img scale" :src="p7.pic0"/>
                            </div>
                        </div>
                        <div class="imgslide-nav">
                        <ul class="carousel-indicators  carouseo-to">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="goods-list m-list">
                    <ul class="clearfix">
                        <li class="goods-item" v-for="(item1,i) of list1" :key="i">
                            <div class="figure movetop">
                                <a href="/details1">
                                    <img :src="item1.pic1" alt="">
                                </a>
                            </div>
                            <h4 class="goods-title">
                                <a href="/details1" class="name-link">{{item1.title}}</a>
                            </h4>
                            <p class="price">{{item1.price}}</p>
                            <p class="comment"></p>
                            <div class="key-worlds slidd">
                                <a href="#">
                                    {{item1.sub_title}}                                    
                                </a>
                            </div>
                        </li>
                         <!-- 此处删除5个li -->
                    </ul>
                </div>
            </div>
             <div class="goods-footer"></div>
        </div>
        <div class="goods-card">
            <div class="card-header">
                <h2>{{titleb1.titleb1}}</h2>
                <a href="javascript:;" class="view-more">{{title_right1.title_right1}}&nbsp;></a>
            </div>
            <div class="card-body clearfix">
                <div class="goods-banner m">
                <div id="demo" class="carousel" data-ride="carousel">
                        <!-- 1.轮播图片-->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img  class=" d-block index-img scale" :src="p8.pic0"/>
                            </div>
                            <div class="carousel-item">
                                <img  class=" d-block index-img scale" :src="p9.pic0"/>
                            </div>
                        </div>
                        <div class="imgslide-nav">
                        <ul class="carousel-indicators  carouseo-ti">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        </ul>
                    </div>
                </div>
                </div>
                 <div class="goods-list m-list">
                    <ul class="clearfix">
                        <li class="goods-item" v-for="(item2,i) of list2" :key="i">
                            <div class="figure movetop">
                                <a href="#">
                                    <img :src="item2.pic2" alt="">
                                </a>
                            </div>
                            <h4 class="goods-title">
                                <a href="#" class="name-link">
                                {{item2.title1}}</a>
                            </h4>
                            <p class="price">{{item2.price1}}</p>
                            <p class="comment"></p>
                            <div class="key-worlds slidd">
                                <a href="#">
                                    {{item2.sub_title1}}                                                                       
                                </a>
                            </div>
                        </li>
                         <!-- 此处删除5个li -->
                    </ul>
                </div>
            </div>
        </div>
        <div class="goods-card">
            <div class="card-header">
                <h2>{{titleb2.titleb2}}</h2>
                <a href="javascript:;" class="view-more">{{title_right2.title_right2}}</a>
            </div>
            <div class="card-body clearfix">
                <div class="goods-bannar la">
                    <div class="video">
                        <video src="../../public/img/index/141161717.mp4" controls  
                         loop autoplay style="object-fit:cover;width:710ox;height:600px;"></video>
                    </div>
                </div>
                <div class="goods-list la-list">
                    <ul class="clearfix">
                        <li class="goods-item full" >
                            <div class="figure movetop" style="height:248px;">
                                <a href="#">
                                    <img :src="pric_img.pic3" class="index-img scale">
                                </a>
                            </div>
                        </li>
                        <li class="goods-item no-bottom" v-for="(item4,i) of list3" :key="i">
                            <div class="figure movetop">
                                <a href="#">
                                    <img :src="item4.pic3" alt="">
                                </a>
                                <h4 class="goods-title">
                                    <a href="#">{{item4.title_img}}</a>
                                </h4>
                                <p class="price">{{item4.titie_price}}</p>
                                <p class="comment"></p>
                            </div>
                        </li>
                        <!-- 此处删除一个li -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="goods-card">
        <div class="card-header" style="padding:0">
            <h2>{{titleb3.titleb3}}</h2>
            <a href="javascript:;" class="view-more">{{title_right3.title_right3}}</a>
        </div>
        <div class="card-body clearfix  haha">
            <div class="goods-banner m">
                <div class="goods-banner-item" style="overflow:none">
                    <a href="#">
                        <img :src="pric_img1.pic4" class="index-img scale">
                    </a>
                </div>
            </div>
            <div class="goods-list m-list">
                <ul class="clearfix">
                    <li class="goods-item no-bottom" v-for="(item5,i) of list4" :key="i">
                        <div class="figure movetop">
                            <a href="#">
                                <img :src="item5.pic4" class="index-img">
                            </a>
                        </div>
                        <h4 class="goods-title">
                            <a href="javascript:;" class="name-link">{{pic_center.title_img1}}</a>
                        </h4>
                        <p class="price">{{pic_center1.title_price}}</p>
                        <p class="key-worlds">
                            <a href="javascript:;"></a>
                        </p>
                    </li>
                    <li class="goods-item no-bottom">
                        <div class="figure movetop">
                            <a href="#">
                                <img src="../../public/img/index/1.png" class="index-img">
                            </a>
                        </div>
                        <h4 class="goods-title">
                            <a href="javascript:;" class="name-link">
                            【新品上市】POE200万高清双摄暗光夜视套装C3X-10月中发货</a>
                        </h4>
                        <p class="price">￥799(起)</p>
                        <p class="key-worlds">
                            <a href="javascript:;"></a>
                        </p>
                    </li>
                    <li class="goods-item no-bottom aside-right">
                        <div class="figure movetop">
                            <a href="#">
                                <img src="../../public/img/index/1.png" class="index-img">
                            </a>
                        </div>
                        <h4 class="goods-title">
                            <a href="javascript:;" class="name-link">
                            【全彩双摄新品】室外无线双摄暗光全彩套装C3X-10月中发货</a>
                        </h4>
                        <p class="price">￥799(起)</p>
                        <p class="key-worlds">
                            <a href="javascript:;"></a>
                        </p>
                    </li>
                </ul>   
            </div> 
        </div>
    </div>
    <div class="goods-card">
        <div class="card-header" style="padding:0">
            <h2>{{titleb4.titleb4}}</h2>
            <a href="javascript:;" class="view-more">{{title_right4.title_right4}}&nbsp;></a>
        </div>
        <div class="card-body clearfix">
            <div class="goods-banner sm">
                <div class="goods-banner-item">
                    <a href="javascript:;">
                        <img src="../../public/img/index/33.jpg" class="index-img  scale">
                    </a>
                </div>
            </div>
            <div class="goods-list sm-list">
                <ul class="clearfix">
                    <li class="goods-item">
                        <div class="figure movetop">
                            <a href="javascript:;">
                                <img src="../../public/img/index/34.jpg" class="index-img">
                            </a>
                        </div>
                        <h4 class="goods-title">
                            <a href="javasript:;" class="name-link">萤石视频监控专用Micro SD存储卡【质保2年</a>
                        </h4>
                        <p class="price">￥59(起)</p>
                        <p class="comment"></p>
                        <div class="key-worlds"></div>
                    </li>
                    <li class="goods-item">
                        <div class="figure movetop">
                            <a href="javascript:;">
                                <img src="../../public/img/index/35.jpg" class="index-img">
                            </a>
                        </div>
                        <h4 class="goods-title">
                            <a href="javasript:;" class="name-link">云存储充值卡</a>
                        </h4>
                        <p class="price">￥120(起)</p>
                        <p class="comment"></p>
                        <div class="key-worlds"></div>
                    </li>
                    <li class="goods-item">
                        <div class="figure movetop">
                            <a href="javascript:;">
                                <img src="../../public/img/index/36.jpg" class="index-img">
                            </a>
                        </div>
                        <h4 class="goods-title">
                            <a href="javasript:;" class="name-link">运动相机通用自拍杆1</a>
                        </h4>
                        <p class="price">￥79</p>
                        <p class="comment"></p>
                        <div class="key-worlds"></div>
                    </li>
                    <li class="goods-item">
                        <div class="figure movetop">
                            <a href="javascript:;">
                                <img src="../../public/img/index/2.png" class="index-img">
                            </a>
                        </div>
                        <h4 class="goods-title">
                            <a href="javasript:;" class="name-link">CS-CMT-BOXA通用藏线盒（仅供C3C,E,S系列使用）</a>
                        </h4>
                        <p class="price">￥50</p>
                        <p class="comment"></p>
                        <div class="key-worlds"></div>
                    </li>
                    <li class="goods-item">
                        <div class="figure movetop">
                            <a href="javascript:;">
                                <img src="../../public/img/index/37.jpg" class="index-img">
                            </a>
                        </div>
                        <h4 class="goods-title">
                            <a href="javasript:;" class="name-link">C2C C6H C6C  C2C全景 通用电源线</a>
                        </h4>
                        <p class="price">￥10</p>
                        <p class="comment"></p>
                        <div class="key-worlds"></div>
                    </li>
                    <li class="goods-item">
                        <div class="figure movetop">
                            <a href="javascript:;">
                                <img src="../../public/img/index/38.jpg" class="index-img">
                            </a>
                        </div>
                        <h4 class="goods-title">
                            <a href="javasript:;" class="name-link">C2C C6H C6C  C2C全景 通用电源线</a>
                        </h4>
                        <p class="price">￥25</p>
                        <p class="comment"></p>
                        <div class="key-worlds"></div>
                    </li>
                    <li class="goods-item">
                        <div class="figure movetop">
                            <a href="javascript:;">
                                <img src="../../public/img/index/39.jpg" class="index-img">
                            </a>
                        </div>
                        <h4 class="goods-title">
                            <a href="javasript:;" class="name-link">C6  C6C C6T C6TC C6P C6H 宇航员版   安装底座片</a>
                        </h4>
                        <p class="price">￥5</p>
                        <p class="comment"></p>
                        <div class="key-worlds"></div>
                    </li>
                     <li class="goods-item">
                        <div class="figure movetop">
                            <a href="javascript:;">
                                <img src="../../public/img/index/40.jpg" class="index-img">
                            </a>
                        </div>
                        <h4 class="goods-title">
                            <a href="javasript:;" class="name-link">Z3 HDMI高清直播编码器</a>
                        </h4>
                        <p class="price">￥1499</p>
                        <p class="comment"></p>
                        <div class="key-worlds"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="caed"></div>
    </div>
    <!-- 服务专区 -->
    <div class="goods-card" id="service-card">
        <div class="card-header">
            <h2>{{titleb5.titleb5}}</h2>
            <a href="javascript:;" class="view-more"></a>
        </div>
        <div class="card-body service-card-body clearfix">
            <div class="service-item">
                <a href="javascript:;" target="_blank">
                    <img src="../../public/img/index/41.jpg" class="index-img scale">
                </a>
            </div>
            <div class="service-item">
                <a href="javascript:;" target="_blank">
                    <img src="../../public/img/index/42.jpg" class="index-img scale">
                </a>
            </div>
             <div class="service-item end-item">
                <a href="javascript:;" target="_blank">
                    <img src="../../public/img/index/43.jpg" class="index-img scale">
                </a>
            </div>
        </div>
        <div class="caed"></div>
    </div>
    <!-- 视频体验 -->
    <div class="goods-card" id="video-card">
        <div class="card-header">
            <h2>{{titleb6.titleb6}}</h2>
        </div>
        <div class="card-body video-card-body cleaefix">
            <div class="video-item">
                <div class="video" style="height:100%;">
                    <a href="javascript:;">
                        <img src="../../public/img/index/44.jpg" class="index-img scale">
                    </a>
                </div>
            </div>
             <div class="video-item">
                <div class="video" style="height:100%;">
                    <a href="javascript:;">
                        <img src="../../public/img/index/45.jpg" class="index-img scale">
                    </a>
                </div>
            </div>
             <div class="video-item end-item">
                <div class="video" style="height:100%;">
                    <a href="javascript:;">
                        <img src="../../public/img/index/46.jpg" class="index-img scale">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<foot></foot>
</div>
</template>
<script>
 import  hea from "../components/header.vue";
 import  foot from "../components/footer.vue"
export default { 
    data(){
        return{
            // 左标题文字
            title:{titleb:"店铺必备"},
            titleb1:{titleb1:"家庭必备"},
            titleb2:{titleb2:"运动必备"},
            titleb3:{titleb3:"套装专区"},
            titleb4:{titleb4:"配件换区"},
            titleb5:{titleb5:"服务专区"},
            titleb6:{titleb6:"视频体验"},
            //右标题文字
            title_right:{title_right:"查看详情"},
            title_right1:{title_right1:"查看详情"},
            title_right2:{title_right2:"查看详情"},
            title_right3:{title_right3:"查看详情"},
            title_right4:{title_right4:"查看详情"},
            // 轮播图图片
            list0:{pic0:require("../../public/img/index/1.jpg")},
                p1:{pic0:require("../../public/img/index/2.jpg")},
                p2:{pic0:require("../../public/img/index/3.jpg")},
                p3:{pic0:require("../../public/img/index/4.jpg")},
                p4:{pic0:require("../../public/img/index/5.jpg")},
                p5:{pic0:require("../../public/img/index/6.jpg")},
                p6:{pic0:require("../../public/img/index/12.jpg")},
                p7:{pic0:require("../../public/img/index/13.jpg")},
                p8:{pic0:require("../../public/img/index/20.jpg")},
                p9:{pic0:require("../../public/img/index/21.jpg")},
            // 轮播图下的第一个图片
           list:[
                {pic:require("../../public/img/index/8.jpg")},
                {pic:require("../../public/img/index/9.jpg")},
                {pic:require("../../public/img/index/10.jpg")},
                {pic:require("../../public/img/index/11.jpg")},
            ],
            // 店铺必备数据
            list1:[
                {
                    pic1:require("../../public/img/index/14.jpg"),
                    title:"【新品-全彩标准版】C3C高清互联网摄像机-10月中旬发货",
                    price:"￥299（起）",
                    sub_title:"【全彩升级】200万超清，夜间彩色监控，H.265智能编码，AI人形检测，防水防尘"
                },
                {
                    pic1:require("../../public/img/index/15.jpg"),
                    title:"【立省30】C3WN高清互联网摄像机 标准版",
                    price:"￥199（起）",
                    sub_title:"无线连接，防水防尘，高清夜视支持接入大部分海康硬盘录像机"
                },
                {
                    pic1:require("../../public/img/index/16.jpg"),
                    title:"【日夜全彩】C3W摄像机全彩版/1080P/夜间全彩 ",
                    price:"￥399（起）",
                    sub_title:" 高清全彩夜视，告别夜间黑白监控，1080P高清，个性语音提示支持接入大部分海康硬盘录像机"
                },
                {
                    pic1:require("../../public/img/index/17.jpg"),
                    title:"【声光告警】 C3W壁挂式互联网摄像机",
                    price:"￥249（起）",
                    sub_title:"【免费送7天云存储一个月】声光告警，语音对讲，防水防尘，无线稳定连接支持接入大部分海康硬盘录像机"
                },
                {
                    pic1:require("../../public/img/index/18.jpg"),
                    title:"【下单送插排】智能高清摄录套装1080P/4mm/C3W",
                    price:"￥549（起）",
                    sub_title:"【下单送插排】声光告警，无线关联，可用于家庭店铺，室内室外通用"
                },
                {
                    pic1:require("../../public/img/index/19.jpg"),
                    title:"【POE套装推荐】200万高清POE防水套装/1080P/4mm ",
                    price:"￥508（起）",
                    sub_title:"250米网线供电，支持16个摄像机同步监控，支持多品牌高清摄像机接入，商铺社区通用"
                },
            ],
            // 家庭必备图片
            list2:[
                {
                    pic2:require("../../public/img/index/22.jpg"),
                    title1:"【新品首发】CP1萤石互联网摄像机</a>",
                    price1:"￥199（起)",
                    sub_title1:"【送1个月云存储视频回放】1080p高清,夜视自动调节,人脸检测,人形追踪,360度监控"
                },
                {
                    pic2:require("../../public/img/index/23.jpg"),
                    title1:"【室内高清】C6C互联网摄像机-无极巡航版/1080P ",
                    price1:"￥349（起）",
                    sub_title1:"【送1个月云存储视频回放】1080p高清,夜视自动调节,人脸检测,人形追踪,360度监控"
                },
                {
                    pic2:require("../../public/img/index/24.jpg"),
                    title1:"【室内高清】C6C互联网摄像机-无极巡航版/1080P ",
                    price1:"￥349（起）",
                    sub_title1:"【送1个月云存储视频回放】1080p高清,夜视自动调节,人脸检测,人形追踪,360度监控"
                },
                {
                    pic2:require("../../public/img/index/25.jpg"),
                    title1:"【室内高清】C6C互联网摄像机-无极巡航版/1080P ",
                    price1:"￥349（起）",
                    sub_title1:"【送1个月云存储视频回放】1080p高清,夜视自动调节,人脸检测,人形追踪,360度监控"
                },
                {
                    pic2:require("../../public/img/index/26.jpg"),
                    title1:"【室内高清】C6C互联网摄像机-无极巡航版/1080P ",
                    price1:"￥349（起）",
                    sub_title1:"【送1个月云存储视频回放】1080p高清,夜视自动调节,人脸检测,人形追踪,360度监控"
                }
                ,{
                    pic2:require("../../public/img/index/27.jpg"),
                    title1:"【室内高清】C6C互联网摄像机-无极巡航版/1080P ",
                    price1:"￥349（起）",
                    sub_title1:"【送1个月云存储视频回放】1080p高清,夜视自动调节,人脸检测,人形追踪,360度监控"
                }
            ],
            //视频右侧图片
           pric_img:{pic3:require("../../public/img/index/28.jpg")},
           pric_img1:{pic4:require("../../public/img/index/31.jpg")},
            list3:[
                {
                    pic3:require("../../public/img/index/29.jpg"),
                    title_img:"S1C行车记录运动相机",
                    title_price:"￥299(起)",
                },
                {
                    pic3:require("../../public/img/index/30.jpg"),
                    title_img:"S2行车记录仪运动相机",
                    title_price:"￥399(起)",
                },
            ],
           list4:[
               {pic4:require("../../public/img/index/32.jpg")}, 
           ],
            pic_center:{title_img1:"【全彩双摄新品】POE400万高清双摄暗光夜视套装-10月中发货"},
            pic_center1:{title_price:"￥799(起)"}
           }
        },
    components:{hea,foot}
}
</script>
<style scoped>
    /* #container{
        height:100%;
        width:100%;
        min-width: 1200px;
        margin-bottom: 80px;
    } */
    .container{
        padding-left: 0px;
        padding-right: 0px;
    }
    @media (min-width:1200px){
        .container{max-width:1200px;}
    }
     .carousel-control-prev,
        .carousel-control-next{
            width:4%;height: 20%;
            background:#aaa;
            border-radius: 0.25rem;
            top:40%;
        }
        .carousel-indicators li{
            width:23px;height:12px;
            background-color:#fff;
            border-radius: 50%;
            margin:0 4px;
        }
        .carousel-indicators li:hover{
            cursor: pointer;
        }
        .carousel-indicators{
            /* width:20px; */
            height:23px;
            line-height: 23px;
        }
        .carousel-indicators .active{
            background-color:#0aa1ed;
        }  
        .imgslide-nav{
            width:167px;
            height:12px;
            position: absolute;
            bottom: 20px;
            right: 20px;
            z-index: 2;
        }
        /* #demo:hover{
            transition: all .5s linear;
            transform: scale(1.01)
        } */
        .bottom-banner{
            width:1200px;
            margin-top: 10px;
            margin-left: -8px;
        }
        ul{
            list-style: none;
        }
        .bottom-banner .bottom-banner-item{
            float: left;
            margin-left: 8px;
            width:294px;
            height:200px;

        }
        .bottom-banner .bottom-banner-item:last-child{
            margin-right: -8px;
        }
        .goods-container{
            width:100%;
            margin:4px auto 0;
        }
        .goods-card{
            position: relative;
            margin-top:55px;
            outline: none;
        }
        .card-header{
            position: relative;
            width:100%;
            background-color:#fff;
            border-bottom:none;
        }
        .card-header h2{
            color:#b2b2b2;
            font-size: 24px;
            font-weight: 200;
        }
        .card-body{padding:0px;margin-top:18px;}
        .view-more{
            position: absolute;
            right: 0;
            top:12px;
            color:#232323;
            font-size: 12px;
        }
        a{text-decoration: none;}
        .carouseo-to{
         position: relative;
          top:-2px;
          left: 19px;
        }
         .carouseo-to>li:first-child{
            position: absolute;
            width:10px;
            margin-left: 20px;
         }
          .carouseo-to>li:last-child{
              width:10px;
          }
        .m{width:464px;}
        .goods-body{
            position: relative;
            height:600px;
            float: left;
        }
        .m-list{
            margin-left: 480px;
        }
        .goods-list{
            height:300px;
        }
        .clearfix{
            list-style: none;
        }
        .goods-item{
            position: relative;
            float: left;
            width:240px;
            height:300px;
            text-align: center;
            box-sizing: border-box;
            overflow: hidden;
            border-right: 1px solid #e2e2e2;
            border-bottom: 1px solid #e2e2e2;
        }
        .movetop{
            transition: all 5s linear;
        }
        .figure{
            margin: 26px 30px;
            width:180px;
            height:170px;
        }
        .figure a{
            display: block;
            width:100%;
            height:100%;
        }
          .figure a img{
              width:100%;
              height:100%;
          }
          .goods-title{
              font-size: 14px;
              font-weight: 500;
              text-align: center;
          }
          .goods-title>.name-link{
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
          }
          .goods-title a{
               color:#232323;
           }
           .price{
               font-size: 14px;
               color:#ff4301;
           }
           .comment{
               font-size: 12px;
               color:#959595;
           }
           .slidd{
               transition: all .5s linear;
           }
           .key-worlds{
               box-sizing: border-box;
               position: absolute;
               bottom:-58px;
               left: 0;
               height:47px;
               width:100%;
               background-color:#F36C18;
               opacity: 0;
           }
            .key-worlds a{
                display: block;
                padding:12px 12px 6px;
                color:#fff;
                font-size: 12px;
                text-align: left;
            }
            .goods-item:hover .slidd{
                opacity: 1;
                bottom:0;
            }
             .movetop:hover{
                margin-top: 15px;
            }
            .movetop{transition: all .5s;}
            .goods-footer{
                margin-top: 55px;
                width:100%;
                height: 1px;
                border-bottom: 1px solid #e2e2e2;
                background-color: #e2e2e2;
            }
            .goods-card{
                position: relative;
                margin-top: 55px;
            }
            .card-header{
                position: relative;
                width:100%;
            }
            .card-header h2{
                color:#2B2B2B;
                font-size: 24px;
                font-weight: 200;
            }
            .view-more{
                position: absolute;
                right: 0;
                top:6px;
                color:#232323;
                font-size: 12px;
            }
            .carouseo-ti{
                position: absolute;
                top:0px;
                left:83px;
            }
            .carouseo-ti >li{
                width:11px;
            }
            .goods-banner{
                position: relative;
                float: left;
                height:300px;
            }
            .goods-card{
                position: relative;
                margin-top: 55px;
            }
            .card-header{
                position: relative;
                width:100%;
            }
            .card-header h2{
                color:#2b2b2b;
                font-size: 24px;
                font-weight: 200;
            }
            .view-more{
                position: absolute;
                right: 0;
                top:6px;
                color:#232323;
                font-size: 12px;
            }
            .la{
                width:710px;
            }
            .goods-bannar{
                position: relative;
                float: left;
                height:600px;
            }
            .video{
                width:100%;
                height:100%;
                overflow: hidden;
            }
            .goods-list{
                height:300px;
            }
            .la-list{
                margin-left: 720px;
            }
            .full{
                width:100%;
                border-right: 0;
                border-bottom:1px slid #e2e2e2;
            }
            .goods-item{
                position: relative;
                float: left;
                /* width:240px; */
                height:300px;
                text-align:center;
                box-sizing: border-box;
                overflow: hidden;
                border-radius: 1px solid #e2e2e2;
            }
            .movetop:hover{
                margin-top: 10px;
            }
            .full>.figure{
                width:420px;
            }
            .scale:hover{
                transform: matrix(1.03,0,0,1.03,0,0);
            }
            .card-header{
                width:100%;
                position: relative;
            }
            .goods-banner-item{
                width:100%;
                height:100%;
                /* overflow: hidden; */
            }
            .scale{transition: all .5s linear;}
          .clearfix:after{
              content:"";
              display: block;
              height:0;
              visibility: hidden;
              clear: both;
          }
          .card-footer{
              margin-top:55px;
              width:100%;
              height: 1px;
              background-color: #e2e2e2;
          }
          .haha{height:300px;}
          .goods-h{
              position: relative;
              margin-top: 55px;
              border-top:1px solid #e2e2e2;
          }
          .card-t{width:100%;height:20px;position:absolute;left:0}
          .card-t h2{
              color:#2b2b2b;
              font-size: 24px;
              font-weight: 200;
          }
          .sm-list{margin-left: 240px;}
          .goods-banner-item a{
              display: block;
          }
          .caed{
              margin-top:55px;
             width:100%;
             height:1px;
             background-color: #e2e2e2;
          }
          .service-card-body>.service-item{
              float: left;
              width:390px;
              height:262px;
              margin-right: 15px;
          }
          .service-item a{
              width:100%;
              display: block;
              height:100%;
              overflow: hidden;
          }
          .index-img{
              min-width: 100%;
              max-height: 100%;
              height: auto;
              border: 0;
              vertical-align: middle;
          }
          .service-card-body>.end-item{
              margin-right: 0px;
          }
          .video-item{
              float: left;
              width:395px;
              height:326px;
              margin-right: 7px;
          }
          .video-item.end-item{
              margin-right: 0px;
          }
          .video-card-body{height:356px;}
</style>
