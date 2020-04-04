<template>
    <div>
        <div class="header__wrapper">
            <div class="heading__content">
                <h1>
                    Our Video
                </h1>
            </div>
        </div>
        <section class="video__gallery">
        <div class="video__gallery__card">
            <iframe
                src="https://www.youtube.com/embed/LkBOAvzWNfM"
                srcdoc="<style>
                    *{padding:0;margin:0;overflow:hidden}html, body {height:100%} 
                    img, span {position:absolute;width:100%;top:0;bottom:0;margin:auto}
                    span {height:1.5em;text-align:center;font:48px/1.5 sans-serif;
                    color:white;text-shadow:0 0 0.5em black}</style>
                    <a href=https://www.youtube.com/embed/LkBOAvzWNfM?autoplay=1>
                    <img src=https://img.youtube.com/vi/LkBOAvzWNfM/hqdefault.jpg 
                    alt='Coffee types explained.'>
                    <span>▶</span></a>"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <p>
                <span> Coffee types explained.</span>
            </p>
        </div>
        <div class="video__gallery__card">
            <iframe
                src="https://www.youtube.com/embed/p9jY5clw3P0"
                srcdoc="<style>
                    *{padding:0;margin:0;overflow:hidden}html, body {height:100%} 
                    img, span {position:absolute;width:100%;top:0;bottom:0;margin:auto}
                    span {height:1.5em;text-align:center;font:48px/1.5 sans-serif;
                    color:white;text-shadow:0 0 0.5em black}</style>
                    <a href=https://www.youtube.com/embed/p9jY5clw3P0?autoplay=1>
                    <img src=https://img.youtube.com/vi/p9jY5clw3P0/hqdefault.jpg 
                    alt='Video about coffee'>
                    <span>▶</span></a>"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <p class="video__title">
                <span> Cappuchino, Latte, Flat white, Mochadsaadasdads.</span>
            </p>
        </div>
        <div class="video__gallery__card">
            <iframe
                src="https://www.youtube.com/embed/vFcS080VYQ0"
                srcdoc="<style>
                    *{padding:0;margin:0;overflow:hidden}html, body {height:100%} 
                    img, span {position:absolute;width:100%;top:0;bottom:0;margin:auto}
                    span {height:1.5em;text-align:center;font:48px/1.5 sans-serif;
                    color:white;text-shadow:0 0 0.5em black}</style>
                    <a href=https://www.youtube.com/embed/vFcS080VYQ0?autoplay=1>
                    <img src=https://img.youtube.com/vi/vFcS080VYQ0/hqdefault.jpg 
                    alt='Video about coffee'>
                    <span>▶</span></a>"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="The basics about coffee"></iframe>
            <p>
                <span> The basics about coffee.</span>
            </p>
        </div>
        <div class="video__gallery__card">
            <iframe
                src="https://www.youtube.com/embed/mDidOqUDcRY"
                srcdoc="<style>
                    *{padding:0;margin:0;overflow:hidden}html, body {height:100%} 
                    img, span {position:absolute;width:100%;top:0;bottom:0;margin:auto}
                    span {height:1.5em;text-align:center;font:48px/1.5 sans-serif;
                    color:white;text-shadow:0 0 0.5em black}</style>
                    <a href=https://www.youtube.com/embed/mDidOqUDcRY?autoplay=1>
                    <img src=https://img.youtube.com/vi/mDidOqUDcRY/hqdefault.jpg 
                    alt='Video about coffee'>
                    <span>▶</span></a>"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Coffee presentation."></iframe>
            <p>
                <span> Presentation.</span>
            </p>
        </div>
    </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Video',
    methods: {
    },
    computed: {
        ...mapState(["data", "selectedName", "selectedImg", "selectedPrice"])
    },
    created() {
        // console.log(this.getData);
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

.video__gallery {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    text-align: center;
}

.video__gallery__card {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    margin: 20px;
    max-width: 300px;
}

.video__title {
    padding: 0 10px;
    white-space: nowrap; /* Отменяем перенос текста */
    overflow: hidden;
    text-overflow: ellipsis;
}



</style>