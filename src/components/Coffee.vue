<template>
  <div>
    <div class="header__wrapper">
        <div class="heading__content">
            <h1>
                Our Coffee
            </h1>
        </div>
    </div>
    <article class="wrapper__about-our-beans">
        <img src="../images/girldAndCup.png" alt="presentation" class="presentation__girl-with-cup">
        <div>
            <h2>About our beans</h2>
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
    <div class="wrapper__main__block">
        <p>
            <img src="../images/Beans_logo_black.jpg" alt="separator" />
        </p>
        <main class="main__block">
            <div class="search-block">
                <label for="search__input">
                    Looking for
                    <input type="text" class="search__input" id="search__input" placeholder="start typing here...">
                </label>
            </div>
            <div class="filter-block">
                <span>Or filter</span>
                <label for="button__brazil" class="btn__filter">
                    <input type="button" id="button__brazil" class="btn__hidden">
                </label>
                <label for="button__kenya" class="btn__filter">
                    <input type="button" id="button__kenya" class="btn__hidden">
                </label>
                <label for="button__columbia" class="btn__filter">
                    <input type="button" id="button__columbia" class="btn__hidden">
                </label>
                <!-- <button>Kenya</button>
                <button>Columbia</button> -->
            </div>
            
        </main>
        <section class="filtered__section" v-if="this.filtered.length == 0">
            <aside class="filtered__item"
            @click="saveData(`${getData[0].coffee[0].name}`, 
                             `${getData[0].coffee[0].url}`,
                             `${getData[0].coffee[0].price}`,
                             `${getData[0].coffee[0].country}`,
                             `${getData[0].coffee[0].description}`)">
                <router-link to="about">
                <Card :img="getData[0].coffee[0].url"
                :name="getData[0].coffee[0].name"
                :price="getData[0].coffee[0].price"
                :country="getData[0].coffee[0].country"
                :description="getData[0].coffee[0].description"
                />
            </router-link>
            </aside>
            <aside class="filtered__item"
            @click="saveData(`${getData[0].coffee[1].name}`, 
                             `${getData[0].coffee[1].url}`,
                             `${getData[0].coffee[1].price}`,
                             `${getData[0].coffee[1].country}`,
                             `${getData[0].coffee[1].description}`)">
                <router-link to="about">
                <Card :img="getData[0].coffee[1].url"
                :name="getData[0].coffee[1].name"
                :price="getData[0].coffee[1].price"
                :country="getData[0].coffee[1].country"
                :description="getData[0].coffee[1].description"/>
            </router-link>
            </aside>
            <aside class="filtered__item"
            @click="saveData(`${getData[0].coffee[2].name}`, 
                             `${getData[0].coffee[2].url}`,
                             `${getData[0].coffee[2].price}`,
                             `${getData[0].coffee[2].country}`,
                             `${getData[0].coffee[2].description}`)">
                <router-link to="about">
                <Card :img="getData[0].coffee[2].url"
                :name="getData[0].coffee[2].name"
                :price="getData[0].coffee[2].price"
                :country="getData[0].coffee[2].country"
                :description="getData[0].coffee[2].description"/>
            </router-link>
            </aside>
            <aside class="filtered__item"
            @click="saveData(`${getData[0].coffee[3].name}`, 
                             `${getData[0].coffee[3].url}`,
                             `${getData[0].coffee[3].price}`,
                             `${getData[0].coffee[3].country}`,
                             `${getData[0].coffee[3].description}`)">
                <router-link to="about">
                <Card :img="getData[0].coffee[3].url"
                :name="getData[0].coffee[3].name"
                :price="getData[0].coffee[3].price"
                :country="getData[0].coffee[3].country"
                :description="getData[0].coffee[3].description"/>
            </router-link>
            </aside>
            <aside class="filtered__item"
            @click="saveData(`${getData[0].coffee[4].name}`, 
                             `${getData[0].coffee[4].url}`,
                             `${getData[0].coffee[4].price}`,
                             `${getData[0].coffee[4].country}`,
                             `${getData[0].coffee[4].description}`)">
                <router-link to="about">
                <Card :img="getData[0].coffee[4].url"
                :name="getData[0].coffee[4].name"
                :price="getData[0].coffee[4].price"
                :country="getData[0].coffee[4].country"
                :description="getData[0].coffee[4].description"/>
            </router-link>
            </aside>
            <aside class="filtered__item"
            @click="saveData(`${getData[0].coffee[5].name}`, 
                             `${getData[0].coffee[5].url}`,
                             `${getData[0].coffee[5].price}`,
                             `${getData[0].coffee[5].country}`,
                             `${getData[0].coffee[5].description}`)">
                <router-link to="about">
                <Card :img="getData[0].coffee[5].url"
                :name="getData[0].coffee[5].name"
                :price="getData[0].coffee[5].price"
                :country="getData[0].coffee[5].country"
                :description="getData[0].coffee[5].description"/>
            </router-link>
            </aside>
        </section>
        <section class="filtered__section" v-else>
            <h1>test</h1>
        </section>
    </div>

  </div>
</template>

<script>
import Card from '../components/Card.vue'
import { mapState, mapActions} from 'vuex';

export default {
    name: 'Coffee',
    components: {
        Card
    },
    computed: {
        ...mapState(["data", "filtered"]),
        ...mapActions(["asyncFiltered", "asyncSetSelected"]),
        getData() {
            // console.log(this.data[0].bestsellers[0].country);
            return this.data;
        }
    },
    methods: {
        filter(key) {
            let result = [];

            this.asyncFiltered(result);
        },
        saveData(name, img, price, country, description) {
           localStorage.setItem('name', name);
           localStorage.setItem('img', img);
           localStorage.setItem('price', price);
           localStorage.setItem('country', country);
           localStorage.setItem('description', description);
           this.asyncSetSelected;
      }
        // this.asyncFiltered(user);
    }
}
</script>

<style scoped>
.filtered__section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px;
}
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

.presentation__girl-with-cup {
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0);
}

.wrapper__about-our-beans {
    display: flex; 
    justify-content: center;
    align-items: center;
    text-align: center; 
    margin: 80px 0 40px 0;
}

.about-our-beans {
    max-width: 350px;
    font-size: 18px;
}

.wrapper__main__block {
    text-align: center;
    margin: 50px 0;
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

.btn__hidden { 
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
@media screen and (max-width: 900px) {
    .wrapper__about-our-beans {
        flex-direction: column;
        margin: 40px 0;
    }
    .main__block {
        flex-direction: column;
        font-size: 20px;
    }
    
}

/* 
.filter-block > button:first-of-type:after {
    width: 75px;
    height: 30px;
    border: 0;
} */

</style>