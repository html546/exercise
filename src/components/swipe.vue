<template>
  <swiper :options="swiperOption" class="swipe">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" alt="" width="100%" style="height:15.4vh;">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop:true
      },
      swiperSlides: [
        "http://b.hiphotos.baidu.com/image/h%3D300/sign=a919d7dfe524b899c13c7f385e071d59/d52a2834349b033bda94010519ce36d3d439bdd5.jpg",
        "http://c.hiphotos.baidu.com/image/h%3D300/sign=a01da5ed77f40ad10ae4c1e3672d1151/d439b6003af33a87433692cfca5c10385243b588.jpg",
        "http://e.hiphotos.baidu.com/image/h%3D300/sign=33392af08682b90122adc533438fa97e/4e4a20a4462309f76c97acc57e0e0cf3d6cad669.jpg"
      ]
    };
  },
  mounted() {
    /* setInterval(() => {
      console.log("simulate async data");
      if (this.swiperSlides.length < 10) {
        this.swiperSlides.push(this.swiperSlides.length + 1);
      }
    }, 3000); */
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style>
.swipe{
    margin-bottom: .266667rem!important;
}
</style>
