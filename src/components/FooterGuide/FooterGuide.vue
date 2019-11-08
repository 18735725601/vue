<template>
  <div id="footerGuideContainer">
    <div class="guideItem" :class="{active:$route.path === '/msite'}" @click="goPath('/msite')">
      <span>
        <i class="iconfont icon-fonts-shouye"></i>
      </span>
      <span>
        首页
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path ==='/search'}" @click="goPath('/search')">
      <span>
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>
        搜索
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path ==='/order'}" @click="goPath('/order')">
      <span>
        <i class="iconfont icon-6"></i>
      </span>
      <span>
        订单
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path ==='/profile'}" @click="goPath('/profile')">
      <span>
        <i class="iconfont icon-wo"></i>
      </span>
      <span>
        我的
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goPath(path){
     this.$route.path !== path && this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus">
 @import "../../common/stylus/mixins.styl" 
  #footerGuideContainer
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    box-sizing border-box
    display flex
    background #fff
    .guideItem
      width 25%
      height 100%
      text-align center
      display flex
      flex-direction column
      span 
        i 
          font-size 20px
        &:first-child
            margin 6px 0

      &.active
        color $green

      
</style>