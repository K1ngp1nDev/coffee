<template>
  <div>
    <div class="header__wrapper">
        <div class="heading__content">
            <h1>
                Our Coffee
            </h1>
        </div>
    </div>
    <article class="wrapper__about__our-coffee">
        <img :src="`${this.selectedImg}`" 
        alt="presentation" 
        class="presentation__img">
        <div>
            <h2>About it</h2>
            <p>
                <img src="../images/Beans_logo_black.jpg" alt="separator" />
            </p>
            <aside class="about-our-beans">
                <p v-if="this.selectedName != 'undefined'" >
                    <strong>Name: </strong> <span class="country">{{this.selectedName}}</span>
                </p>
                <p v-if="this.selectedCountry != 'undefined'" >
                    <strong>Country: </strong> <span class="country">{{this.selectedCountry}}</span>
                </p>
                <p v-if="this.selectedDescription">
                    <strong>Description: </strong> <span class="description">{{this.selectedDescription}}</span>
                </p>
                <p>
                    <strong>Price: </strong> <span class="price">{{this.selectedPrice}}</span>
                </p>
            </aside>
            <p>
            </p>
        </div>
    </article>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: "About",
    methods: {
        
    },
    computed: {
        ...mapActions(["asyncSetSelected"]),
        ...mapState(["data", 
                    "selectedName",
                    "selectedImg", 
                    "selectedPrice", 
                    "selectedCountry", 
                    "selectedDescription"
                    ]),
    },
    created() {
        this.asyncSetSelected;
    }
};
</script>

<style scoped>
    .header__wrapper {
        max-width: 1920px;
        width: 100%;
        max-height: 300px;
        background-image: url(../images/coffee-shop-bg.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 130px 0 80px 0;
    }
    .heading__content {
        display: flex;
        justify-content: center;
        color: #fff;
    }

    .presentation__img {
        max-width: 400px;
        width: 100%;
        min-width: 300px;
        min-height: auto;
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0);
    }

    .wrapper__about__our-coffee {
        display: flex; 
        justify-content: space-evenly;
        align-items: center;
        text-align: center; 
        margin: 80px 0 40px 0;
    }

    .about-our-beans {
        max-width: 400px;
        text-align: start; 
    }

    .wrapper__main__block {
        text-align: center;
        margin: 50px 0;
    }

    .separator-line {
        display: block;
        margin-bottom: 80px;
    }

    .main__block {
        display: flex;
        justify-content: space-evenly;
    }

    .search__input {
        border: 0;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        margin-left: 20px;
        width: 180px;
        height: 30px;
    }

    .search__input::placeholder {
        white-space: nowrap;
        font-family: 'Merienda';
        font-size: 12px;
        text-align: center;
        color: rgba(0, 0, 0, 0.5);
    }

    .buttons__filter { 
        opacity: 0;
    }

    .filter-block > label:first-of-type:after {
        content: "Brazil";
        display: inline-block;
        font-size: 12px;
        line-height: 20px;
        width: 75px;
        height: 23px;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25); 
        border-radius: 4px 0px 0px 4px; 
        cursor: pointer;
    }

    .filter-block > label:nth-child(3):after {
        content: "Kenya";
        display: inline-block;
        font-size: 12px;
        line-height: 20px;
        width: 75px;
        height: 23px;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25); 
        border-radius: 4px 0px 0px 4px; 
        cursor: pointer;
    }

    .filter-block > label:last-of-type:after {
        content: "Columbia";
        display: inline-block;
        font-size: 12px;
        line-height: 20px;
        width: 75px;
        height: 23px;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25); 
        border-radius: 4px 0px 0px 4px; 
        cursor: pointer;
    }

    .wrapper__our-best__list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .our-best__heading {
        display: block;
        text-align: center;
    }

    .best__item {
        max-width: 220px;
        max-height: 240px;
        background-color: rgba(255, 255, 255, 0.65);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        line-height: 20px;
        padding: 20px;
        box-sizing: border-box;
        margin-left: 70px;
        position: relative;
    }

    .card__img {
        max-width: 360px;
    }

    .price {
        font-weight: bold;
        font-size: 18px;
        line-height: 20px;
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
@media screen and (max-width: 900px) {
    .wrapper__about__our-coffee {
        flex-direction: column;
        margin: 40px 20px;
    }
    
}
    /* 
    .best__item {
        max-width: 500px;
    } */

    /* 
    .filter-block > button:first-of-type:after {
        width: 75px;
        height: 30px;
        border: 0;
    } */

</style>
