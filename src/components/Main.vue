<template>
  <div>
    <div class="header__wrapper">
      <main class="main__content">
        <h1> {{ $t('Everything You Love About Coffee') }} </h1>
        <p><img
            src="../images/Beans_logo_white.jpg"
            alt="separator" class="separator"/></p>
        <h2>
          {{ $t('We make every day full of energy and taste. Want to try our beans?') }}
        </h2>
        <router-link to="coffee" class="btn__more">{{ $t('More') }}</router-link>
      </main>
    </div>
    <article class="wrapper__about-us">
      <h2>About Us</h2>
      <p>
        <img src="../images/Beans_logo_black.jpg" alt="separator" />
      </p>
      <aside class="about-us">
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. Afraid at highly months do things on at. Situation
          recommend objection do intention so questions. As greatly removed
          calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song
          that held help face.
        </p>
        <p>
          Now residence dashwoods she excellent you. Shade being under his bed
          her, Much read on as draw. Blessing for ignorant exercise any yourself
          unpacked. Pleasant horrible but confined day end marriage. Eagerness
          furniture set preserved far recommend. Did even but nor are most gave
          hope. Secure active living depend son repair day ladies now.
        </p>
      </aside>
    </article>
    <h2 class="our-best__heading">Our best</h2>
    <article class="wrapper__our-best">
      <div class="wrapper__our-best__list"
      v-for="item in this.getData[0].bestsellers" 
      :key="item.name">
        <aside
          class="best__item"
          @click="saveData(
              `${item.name}`,
              `${item.url}`,
              `${item.price}`,
              `${item.country}`,
              `${item.description}`)">
          <router-link to="about">
            <Card
              :img="item.url"
              :name="item.name"
              :price="item.price"
            />
          </router-link>
        </aside>
      </div>
    </article>
  </div>
</template>

<script>
import About from "../components/About.vue";
import Card from "../components/Card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Main",
  components: {
    About,
    Card
  },
  methods: {
    saveData(name, img, price, country, description) {
      localStorage.setItem("name", name);
      localStorage.setItem("img", img);
      localStorage.setItem("price", price);
      localStorage.setItem("country", country);
      localStorage.setItem("description", description);
      this.asyncSetSelected;
    }
  },
  computed: {
    ...mapState(["data", "selected"]),
    ...mapActions(["asyncSetSelected"]),
    getData() {
      return this.data;
    }
  }
};
</script>



<style scoped>
.header__wrapper {
  max-width: 1920px;
  width: 100%;
  max-height: 640px;
  background-image: url(../images/header_bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  z-index: 5;
  padding-top: 150px;
}

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
  color: #fff;
}

.footer__navigation__link:link,
.footer__navigation__link:visited {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

#menu__toggle {
  opacity: 0;
}

.main__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.btn__more:link {
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  text-decoration: none;
  border: 1px solid #fff;
  padding: 5px 50px;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(202, 199, 199, 0.25);
  border-radius: 3px;
  margin: 100px 0;
}

.btn__more:visited {
  color: #fff;
  border: 1px solid #fff;
}

.btn__more:hover {
  opacity: 0.5;
  background-color: rgba(100, 43, 43, 0.445);
}

.wrapper__about-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 80px 0;
}
.about-us {
  max-width: 600px;
}

.wrapper__our-best {
  max-width: 1920px;
  max-height: 700px;
  width: 100%;
  padding: 50px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.wrapper__our-best__list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
}

.our-best__heading {
  /* align-self: center; */
  display: block;
  text-align: center;
}

.best__item {
  max-width: 200px;
  width: 100%;
  height: 260px;
  background-color: rgba(255, 255, 255, 1.65);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  padding: 20px;
  box-sizing: border-box;
  margin-left: 70px;
}

.card__img {
  width: 160px;
}

.best__item:first-child {
  margin-left: 0;
}

.best__item__description {
  white-space: nowrap;
  font-weight: normal;
}

.best__item__price {
  align-self: flex-end;
  font-weight: bold;
}

.footer__box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  box-sizing: border-box;
}

.footer__separator {
  display: block;
  text-align: center;
}

@media screen and (max-width: 900px) {
  .main__content {
    margin-top: 30px;
  }
  .btn__more:link {
    margin-bottom: 50px;
  }
  .wrapper__about-us {
    margin: 30px 0;
  }
  .about-us {
    max-width: 400px;
    font-size: 20px;
  }
  .wrapper__our-best {
    max-height: 2000px;
    box-sizing: border-box;
    max-height: auto;
    padding: 30px 0;
  }
  .wrapper__our-best__list {
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .best__item {
    margin: 20px 0;
  }
  .btn__more:link {
    margin: 50px 0;
  }
  .header__logo {
    margin: 20px 5px;
  }
}

@media screen and (min-width: 601px) {
  #menu__toggle:checked ~ .header__navigation__list {
    flex-direction: row;
  }
}

@media screen and (max-width: 600px) {
  .menu__btn {
    background: rgba(180, 175, 158, 0.5);
  }

  .header__navigation__list {
    opacity: 0.2;
    background: rgba(180, 175, 158, 0.5);
  }

  #menu__toggle:not(checked) ~ .burger {
    opacity: 1;
  }

  #menu__toggle:not(checked) ~ .header__navigation__list {
    opacity: 0;
  }

  #menu__toggle:checked ~ .header__navigation__list {
    opacity: 1;
  }

  .header__navigation__link:link,
  .header__navigation__link:visited {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  .header__navigation__item {
    margin: 10px 10px 10px 40px;
  }

  .header__box {
    padding-left: 5px;
  }

  .about-us {
    max-width: 300px;
  }
}

@media screen and (max-width: 400px) {
  .footer__box {
    display: flex;
    flex-direction: column;
  }

  .footer__navigation__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    box-sizing: border-box;
  }

  .footer__navigation__item {
    margin: 0 0 10px 0;
  }
}
</style>
