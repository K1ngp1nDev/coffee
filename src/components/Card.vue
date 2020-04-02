<template>
    <div>
        <article class="wrapper__card">
            <aside class="best__item" 
            @click="saveData()" >
                <span class="best__item__img" >
                    <img :src="`${this.img}`" 
                    alt="img"
                    class="card__img">
                </span>
                <span class="best__item__name">
                    {{this.name}}
                </span>
                <span v-if="this.country" class="best__item__country">
                    {{this.country}}
                </span>
                <span class="best__item__price">
                    {{this.price}}
                </span>
            </aside>
        </article>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Card',
    props: ["img", "name", "price", "country", "descr"],
    methods: {
        saveData() {
            localStorage.setItem('name', this.name);
            localStorage.setItem('img', this.img);
            localStorage.setItem('price', this.price);
            localStorage.setItem('country', this.country);
            localStorage.removeItem('description');
            this.asyncSetSelected;
        }
    },
    computed: {
        ...mapActions(["asyncSetSelected"]),
    }
}
</script>

<style scoped>
.wrapper__card {
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
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    width: 100%;
    height: 260px;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    padding: 20px;
    box-sizing: border-box;
    margin: 20px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
}

.card__img {
    width: 160px;
}

.best__item:first-child {
    margin-left: 0;
}

.best__item__name {
    font-weight: normal;
}

.best__item__price {
    font-size: 20px;
}

.best__item__name,
.best__item__price {
    color: #000;
    text-decoration: none;
}
.best__item__price,
.best__item__country {
    align-self: flex-end;
    font-weight: bold;
    color: #000;
}

@media screen and (max-width: 900px) {
    .best__item__name,
    .best__item__price,
    .best__item__country {
        font-size: 18px;
    }
}

</style>