<template>
    <div>
        <div class="header__wrapper">
            <div class="heading__content">
                <h1>
                    Our Coffee
                </h1>
            </div>
        </div>
        <article class="wrapper__our-goods">
            <img src="../images/pleasureCup.png" 
            alt="presentation" 
            class="presentation__cup">
            <div>
                <h2>About our goods</h2>
                <p>
                    <img src="../images/Beans_logo_black.jpg" alt="separator" />
                </p>
                <aside class="about-our-beans">
                    <p>
                        Extremity sweetness difficult behaviour he of. 
                        On disposal of as landlord horrible. 
                        Afraid at highly months do things on at. 
                        Situation recommend objection do intention so questions. 
                        As greatly removed calling pleased improve an. 
                        Last ask him cold feel met spot shy want. 
                        Children me laughing we prospect answered followed.
                        At it went is song that held help face.
                    </p>
                </aside>
                <p>
                </p>
            </div>
        </article>
        <main class="grid__items">
            <div class="wrapper__card"
            v-for="item in this.getData[0].goods" 
            :key="item.name">
                <router-link to="about">
                <Card
                :img="item.url"
                :name="item.name"
                :price="item.price"
                />
            </router-link>
            </div>
        </main>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Card from '../components/Card.vue'

export default {
    name: 'Pleasure',
    components: {
        Card
    },
    computed: {
            ...mapState(["data"]),
            ...mapActions(["asyncSetSelected"]),
            getData() {
                return this.data;
            }
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
    }
}
</script>

<style scoped>

.header__wrapper {
    max-width: 1920px;
    width: 100%;
    max-height: 300px;
    background-image: url(../images/bgHeaderPleasure.png);
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

.presentation__cup {
    max-width: 300px;
    width: 100%;
    height: auto;
    box-shadow: 10px 5px 30px rgba(0, 0, 0, 0.25);
    margin: 25px 40px 0 0;
}

.wrapper__our-goods {
    display: flex; 
    justify-content: center;
    /* align-items: center; */
    text-align: center; 
    margin: 80px 0 40px 0;
}

.about-our-beans {
    max-width: 350px;
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

.grid__items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.wrapper__card {
  margin: 30px;
}

@media screen and (max-width: 900px) {
    .wrapper__our-goods {
        flex-direction: column;
        align-items: center;
        margin: 40px 0;
    }
    .main__block {
        flex-direction: column;
    }
    .presentation__cup {
        margin:  0;
        max-width: 200px;
    }
    .about-our-beans {
        font-size: 20px;
    }
}

</style>