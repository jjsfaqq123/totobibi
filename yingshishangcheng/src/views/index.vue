<template>
   <div class="container">
    <div id="demo" class="carousel" data-ride="carousel">
        <!-- 1.轮播图片-->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img  class=" d-block" src="../../public/img/index/1.jpg"/>
            </div>
            <div class="carousel-item">
                <img  class=" d-block" src="../../public/img/index/2.jpg"/>
            </div>
            <div class="carousel-item">
                <img  class=" d-block" src="../../public/img/index/3.jpg"/>
            </div>
            <div class="carousel-item">
                <img  class=" d-block" src="../../public/img/index/4.jpg"/>
            </div>
             <div class="carousel-item">
                <img  class=" d-block" src="../../public/img/index/5.jpg"/>
            </div>
             <div class="carousel-item">
                <img  class=" d-block" src="../../public/img/index/6.jpg"/>
            </div>
             <div class="carousel-item">
                <img  class=" d-block" src="../../public/img/index/7.jpg"/>
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
            <li data-target="#demo" data-slide-to="6"></li>
        </ul>
        </div>
    </div>
    <div class="bottom-banner">
        <ul class="clearfix">
            <li class="bottom-banner-item">
                <a href="#">
                    <img src="../../public/img/index/8.jpg" alt="">
                </a>
            </li>
            <li class="bottom-banner-item">
                <a href="#">
                    <img src="../../public/img/index/9.jpg" alt="">
                </a>
            </li>
            <li class="bottom-banner-item">
                <a href="#">
                    <img src="../../public/img/index/10.jpg" alt="">
                </a>
            </li>
            <li class="bottom-banner-item last-item">
                <a href="#">
                    <img src="../../public/img/index/11.jpg" alt="">
                </a>
            </li>
        </ul>
    </div>
    <div class="goods-container">
        <div class="goods-card" id="shop-card">
            <div class="card-header">
                <h2>店铺必备</h2>
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
        #demo:hover{
            /* transition: all .5s linear; */
            transform: scale(1.01)
        }
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
        .bottom-banner .bottom-banner-item.last-item{
            margin-right: -8px;
        }
</style>
