<template>
  <div class="index">
    <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
      <swiper-slide><div class="ID-Photo swiper-img"></div></swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
    <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="goAppt" @click="goAppt">
      <img src="/static/imgs/cat.png" alt="">
      <div class="text">
        <p class="small">Hell...</p>
        <p class="big">预约拍摄服务</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { pageGo } from '@/utils/index'
export default {
  name: 'index',
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        loop: true,
        speed:1000,//设置速度
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods:{
    goAppt(){
      pageGo('/apptList')
    },
  },
  mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@function rem( $px) {
  @return $px*(1/100)*1rem;
}
.index{
  height:100%;
  display:flex;
  flex-direction:column ;
}
.swiper{
  width:100%;
  flex:1;
}
.goAppt{
  width:100%;
  height:rem(300);
  display:flex;
  justify-content:flex-start;
  align-items:center;
  img{
    width:rem(190);
    height:rem(164);
    margin-left:rem(116);
  }
  .text{
    margin-left:rem(36);
    text-align:left;
    .small{
      font-size:18px;
      font-weight:bold;
      margin-top:rem(24);
      margin-bottom:rem(36);
    }
    .big{
      font-size:20px;
    }
  }
}
.swiper-img{
  height:100%;
  background-size:100% 100%;
}
.ID-Photo{
  background-image:url(/static/imgs/ID-Photo-swiper.png);
}


</style>
