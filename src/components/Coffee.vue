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
                    <input type="text" 
                    class="search__input" 
                    id="search__input" 
                    placeholder="start typing here..." 
                    v-model="input"
                    v-on:input="search()">
                </label>
            </div>
            <div class="filter-block">
                <span>Or filter</span>
                <label for="button__brazil" class="btn__filter" >
                    <input type="button" id="button__brazil" class="btn__hidden" @click="filter('brazil')">
                </label>
                <label for="button__kenya" class="btn__filter"  >
                    <input type="button" id="button__kenya" class="btn__hidden" @click="filter('kenya')">
                </label>
                <label for="button__columbia" class="btn__filter"  >
                    <input type="button" id="button__columbia" class="btn__hidden" @click="filter('columbia')">
                </label>
            </div>
        </main>
        <section class="filtered__section" v-if="this.filtered.length == 0 && this.input == ''">
            <aside class="filtered__item" v-for="item in this.getData[0].coffee" :key="item.name"
            @click="saveData(`${item.name}`, 
                            `${item.url}`,
                            `${item.price}`,
                            `${item.country}`,
                            `${item.description}`)">
                <router-link to="about">
                <Card :img="item.url"
                :name="item.name"
                :price="item.price"
                :country="item.country"
                :description="item.description"/>
                </router-link>
            </aside>
        </section>
        <section class="filtered__section" v-else-if="this.filtered.length > 0">
            <aside class="filtered__item" v-for="item in this.getFiltered" :key="item.name"
            @click="saveData(`${item.name}`, 
                            `${item.url}`,
                            `${item.price}`,
                            `${item.country}`,
                            `${item.description}`)">
                <router-link to="about">
                <Card :img="item.url"
                :name="item.name"
                :price="item.price"
                :country="item.country"
                :description="item.description"/>
                </router-link>
            </aside>
        </section>
        <h2 v-else>Ничего не найдено</h2>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import { mapState, mapActions} from 'vuex';

export default {
    name: 'Coffee',
    data() {
        return {
            input: ''
        }
    },
    components: {
        Card
    },
    computed: {
        ...mapState(["data", "filtered", "filteredKey"]),
        getData() {
            return this.data;
        },
        getFiltered() {
            return this.filtered;
        }
    },
    methods: {
        ...mapActions(["asyncFiltered", "asyncSetSelected", "asyncSetFilteredKey"]),
        filter(key) {
            this.input = key;

            let result = [];
            for( let i = 0; i < this.getData[0].coffee.length; i++ ) {
                if ( this.getData[0].coffee[i].country.toLowerCase() == key.toLowerCase() ) {
                    result.push(this.getData[0].coffee[i]);
                }
            }
            this.asyncFiltered(result);
        },
        search(){
            let result = [];
            for( let i = 0; i < this.getData[0].coffee.length; i++ ) {
                if ( this.input && this.getData[0].coffee[i].country.toLowerCase().includes(this.input.toLowerCase()) ) {
                    result.push(this.getData[0].coffee[i]);
                }
            }
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
</style>