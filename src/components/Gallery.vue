<template>
  <div>
    <div class="thumb-example">
      <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
        <swiper-slide class="slide-1 swiper"></swiper-slide>
        <swiper-slide class="slide-2 swiper"></swiper-slide>
        <swiper-slide class="slide-3 swiper"></swiper-slide>
        <swiper-slide class="slide-4 swiper"></swiper-slide>
        <swiper-slide class="slide-5 swiper"></swiper-slide>
        <swiper-slide class="slide-6 swiper"></swiper-slide>
        <swiper-slide class="slide-7 swiper"></swiper-slide>
        <swiper-slide class="slide-8 swiper"></swiper-slide>
        <swiper-slide class="slide-9 swiper"></swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1 swiper"></swiper-slide>
        <swiper-slide class="slide-2 swiper"></swiper-slide>
        <swiper-slide class="slide-3 swiper"></swiper-slide>
        <swiper-slide class="slide-4 swiper"></swiper-slide>
        <swiper-slide class="slide-5 swiper"></swiper-slide>
        <swiper-slide class="slide-6 swiper"></swiper-slide>
        <swiper-slide class="slide-7 swiper"></swiper-slide>
        <swiper-slide class="slide-8 swiper"></swiper-slide>
        <swiper-slide class="slide-9 swiper"></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 10, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 10, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>

<style scoped>
.header__wrapper {
  max-width: 1920px;
  width: 100%;
  max-height: 200px;
  background: rgb(89, 199, 200);
  background: linear-gradient(
    0deg,
    rgba(89, 199, 200, 0.7262255243894433) 0%,
    rgba(25, 20, 6, 1) 100%
  );
  text-align: center;
  padding: 130px 0 80px 0;
}

.heading__content {
  display: flex;
  justify-content: center;
  color: #fff;
}
.thumb-example {
  height: 720px;
  background-color: black;
}

.swiper {
cursor: pointer;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.slide-1 {
  background-image: url("../images/img/boat_sea_view_from_above_water_119937_2031x2031.jpg");
}
.slide-2 {
  background-image: url("../images/img/fractal_flower_glow_130134_3840x2160.jpg");
}
.slide-3 {
  background-image: url("../images/img/headphones_installation_music_104587_1920x1080.jpg");
}
.slide-4 {
  background-image: url("../images/img/tree_new_year_christmas_snow_holiday_night_garland_36467_5600x3720.jpg");
}
.slide-5 {
  background-image: url("../images/img/pier_sea_silhouette_140684_3840x2160.jpg");
}
.slide-6 {
  background-image: url("../images/img/plouzane-1758197_1920.jpg");
}
.slide-7 {
  background-image: url("../images/img/rose-729509_1920.jpg");
}
.slide-8 {
  background-image: url("../images/img/street_sunset_palm_trees_122106_1280x720.jpg");
}
.slide-9 {
  background-image: url("../images/img/sunrise-1756274_1920.jpg");
}

.gallery-top {
  height: 80%;
  width: 100%;
}
.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: gap 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.3;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>
