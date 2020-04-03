<template>
    <div class="wrapper">
        <div class="home">
            <header class="header__box">
            <span class="header__logo">
                <a href="#"><img src="../images/Union.png" alt="home logo"></a>
            </span>
            <nav class="header__navigation">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn burger" for="menu__toggle">
                    <span></span>
                </label>
                <ul class="header__navigation__list">
                    <li class="header__navigation__item">
                        <router-link to="/" class="header__navigation__link">Coffee house</router-link>
                    </li>
                    <li class="header__navigation__item">
                        <router-link to="/coffee" class="header__navigation__link">Our coffee</router-link>
                    </li>
                    <li class="header__navigation__item">
                        <router-link to="/pleasure" class="header__navigation__link">For your pleasure</router-link>
                    </li>
                    <li class="header__navigation__item">
                        <router-link to="/video" class="header__navigation__link">Video</router-link>
                    </li>
                    <li class="header__navigation__item">
                        <router-link to="/gallery" class="header__navigation__link">Gallery</router-link>
                    </li>
                </ul>
            </nav>
            </header>
        </div>
        <router-view />
        <div>
            <footer class="footer__box">
            <span class="footer__logo">
                <a href="#"><img src="../images/coffee-beans.png" alt="home logo"></a>
            </span>
            <nav class="footer__navigation">
                <ul class="footer__navigation__list">
                    <li class="footer__navigation__item">
                        <router-link to="/" class="footer__navigation__link">Coffee house</router-link>
                    </li>
                    <li class="footer__navigation__item">
                        <router-link to="/coffee" class="footer__navigation__link">Our coffee</router-link>
                    </li>
                    <li class="footer__navigation__item">
                        <router-link to="/pleasure" class="footer__navigation__link">For your pleasure</router-link>
                    </li>
                    <li class="footer__navigation__item">
                        <router-link to="/video" class="footer__navigation__link">Video</router-link>
                    </li>
                    <li class="footer__navigation__item">
                        <router-link to="/gallery" class="footer__navigation__link">Gallery</router-link>
                    </li>
                </ul>
            </nav>
            </footer>
            <p class="footer__separator">
                <img src="../images/Beans_logo_black.jpg" alt="separator" />
            </p>
        </div>
    </div>
</template>

<script>

import Coffee from '../components/Coffee.vue'
import Pleasure from '../components/Pleasure.vue'
import Main from '../components/Main.vue'
import Video from '../components/Video.vue'
import About from '../components/About.vue'
import Gallery from '../components/Gallery.vue'

export default {
    name: 'Header',
    components: {
        Main,
        Coffee,
        Pleasure,
        Video,
        About,
        Gallery
    }
}
</script>

<style scoped>
.home {
    position: absolute;
    z-index: 111;
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

.header__navigation__list {
    padding: 0;
}

.header__navigation__item {
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    list-style-type: none;
    margin-left: 40px;
    /* z-index: 13; */
}


.header__navigation__link:link, 
.header__navigation__link:visited {
    text-decoration: none;
}

.header__navigation__link:hover,
.footer__navigation__link:hover {
    font-weight: 900;
}

#menu__toggle {
	opacity: 0;
}


.menu__btn {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	align-items: center;
	position: fixed;
	width: 40px;
	height: 40px;
	cursor: pointer;
    z-index: 5;
    margin-top: 15px;
    padding-left: 8px;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
	display: block;
	position: absolute;
	width: 60%;
	height: 2px;
    background-color: #ffffff;
    /* z-index: 5; */
}

.menu__btn > span::before {
	content: '';
	top: -8px;
	width: 100%;
}

.menu__btn > span::after {
	content: '';
	top: 8px;
	width: 100%;
}

.header__navigation__list {
	list-style: none;
	/* z-index: 135; */
}

.header__navigation__link {
	text-decoration: none;
	color: #ffffff;
	letter-spacing: 0.54px;
    /* z-index: 55; */
}

#menu__toggle:not(checked) ~ .burger {
    opacity: 0;
}

#menu__toggle:checked ~ .menu__btn > span {
    transform: rotate(45deg);
}

#menu__toggle:checked ~ .menu__btn > span::before {
	top: 0;
	transform: rotate(0);
}

#menu__toggle:checked ~ .menu__btn > span::after {
	top: 0;
	transform: rotate(90deg);
}

#menu__toggle:checked ~ .header__navigation__list {
    display: flex;
    flex-direction: column;
	position: fixed;
	transition-delay: 0.1s;
	transition-duration: 0.2s;
    box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
}

#menu__toggle:checked ~ .header__navigation__item {
    display: block;
    padding: 20px;
}

.footer__logo {
    display: block;
    /* margin-top: 40px; */
}

.footer__box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;
    box-sizing: border-box;
}

.footer__navigation__list {
    padding: 0;
}

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

.footer__navigation__link:link, 
.footer__navigation__link:visited {
    /* font-family: 'Merienda', cursive; */
    text-decoration: none;
    color: #000;
}

.footer__separator {
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
    }
    .wrapper__our-best {
        max-height: 900px;
        padding: 30px 0;
    }
    .wrapper__our-best__list {
        flex-direction: column;
    }
    .best__item {
        margin: 30px 0;
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
    .footer__navigation__list,
    .footer__logo {
        display: none;
    }
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
        margin-left: 15px;
    }
    .header__navigation__item {
        margin: 10px 10px 10px 40px;
    }
    .header__box {
        padding-left: 5px;
    }
    .footer__box {
        padding: 0;
    }
}

</style>
