<template>
  <div class="home">
    <Header/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style scoped>
.header__logo {
    display: block;
    margin-top: 40px;
}

.header__box {
    display: flex;
    flex-direction: row;
    padding-left: 60px;
    box-sizing: border-box;
}

.header__navigation__list,
.footer__navigation__list {
    padding: 0;
}

.header__navigation__item,
.footer__navigation__item {
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    list-style-type: none;
    margin-left: 40px;
}

.footer__navigation__item:first-child {
    margin-left: 0;
}

.header__navigation__link:link, 
.header__navigation__link:visited {
    text-decoration: none;
}

.footer__navigation__link:link, 
.footer__navigation__link:visited {
    text-decoration: none;
    color: rgb(0, 0, 0);
}

#menu__toggle {
	opacity: 0;
}

</style>