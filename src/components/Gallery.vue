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
        <swiper-slide class="slide-10 swiper"></swiper-slide>
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
        <swiper-slide class="slide-10 swiper"></swiper-slide>
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
  background-image: url("../images/img/1.jpg");
}
.slide-2 {
  background-image: url("../images/img/2.jpg");
}
.slide-3 {
  background-image: url("../images/img/3.jpg");
}
.slide-4 {
  background-image: url("../images/img/4.jpg");
}
.slide-5 {
  background-image: url("../images/img/5.jpg");
}
.slide-6 {
  background-image: url("../images/img/6.jpg");
}
.slide-7 {
  background-image: url("../images/img/7.jpg");
}
.slide-8 {
  background-image: url("../images/img/8.jpg");
}
.slide-9 {
  background-image: url("../images/img/9.jpg");
}
.slide-10 {
  background-image: url("../images/img/10.jpg");
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
