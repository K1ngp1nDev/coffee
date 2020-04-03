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
            <iframe src="https://www.youtube.com/embed/LkBOAvzWNfM" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            <p>
                <span> Lorem ipsum dolor sit amet.</span>
            </p>
        </div>
        <div class="video__gallery__card">
            <iframe src="https://www.youtube.com/embed/p9jY5clw3P0" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <p>
                <span> Lorem ipsum dolor sit amet.</span>
            </p>
        </div>
        <div class="video__gallery__card">
            <iframe src="https://www.youtube.com/embed/vFcS080VYQ0" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <p>
                <span> Lorem ipsum dolor sit amet.</span>    
            </p>
        </div>
        <div class="video__gallery__card">
            <iframe src="https://www.youtube.com/embed/mDidOqUDcRY" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <p>
                <span> Lorem ipsum dolor sit amet.</span>
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
  /* align-items: center; */
}
.video__gallery__card {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    margin: 20px;
}


</style>