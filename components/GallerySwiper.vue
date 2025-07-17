<template>
  <div class="swiper my-16 py-5">
    <ClientOnly>
      <swiper-container
        :modules="[Autoplay, FreeMode]"
        :loop="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }"
        :free-mode="true"
        :free-mode-momentum="false"
        :speed="3000"
        :slides-per-view="1"
        :allow-touch-move="false"
        :space-between="10"
        :breakpoints="{
          '640': { slidesPerView: 2, spaceBetween: 10 },
          '1024': { slidesPerView: 3, spaceBetween: 10 },
        }"
      >
        <swiper-slide v-for="(img, i) in swiperImages" :key="i">
          <v-img
            :src="img"
            alt="Images of Gallery"
            width="200px"
            height="200px"
            rounded="lg"
            class="swiper-img my-5"
            :class="i % 2 === 0 ? 'rotate-pos' : 'rotate-neg'"
            cover
          ></v-img>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode } from "swiper/modules";
import { swiperImages } from "~/utils/galleryElements";
</script>
<style>
.swiper-img {
  border: 3px solid #e7462f !important;
  outline: 1px solid #fff !important;
}

.rotate-pos {
  transform: rotate(4deg) !important;
}
.rotate-neg {
  transform: rotate(-4deg) !important;
}
</style>
