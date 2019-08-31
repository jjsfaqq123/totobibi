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
         transition: all .15s
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
</style>
