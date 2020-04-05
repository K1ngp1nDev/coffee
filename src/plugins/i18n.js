import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en' : {
    'Все что Вы любите в кофе' 
    : 'Everything You Love About Coffee',
    'Мы делаем каждый день полным энергии и вкуса. Хотите попробовать наши бобы?'
    : 'We make every day full of energy and taste. Want to try our beans?',
    'Подробнее'
    : 'More'
  },
  'ru' : {
    'Everything You Love About Coffee' 
    : 'Все что Вы любите в кофе',
    'We make every day full of energy and taste. Want to try our beans?' 
    : 'Мы делаем каждый день полным энергии и вкуса. Хотите попробовать наши бобы?',
    'More'
    : 'Подробнее'
  }
}

export let i18n = new VueI18n({
  locale: 'en',
  silentTranslationWarn: true,
  // fallbackLocale: 'en',
  // formatFallbackMessages: true,
  messages
})

// export const i18n = new VueI18n({
//     locale: 'en',
//     messages: {
//         en: {
//             mainH1Text: 'Everything You Love About Coffee',
//             mainH2Text: 'We make every day full of energy and taste <br> Want to try our beans?',
//             welcomeMsg: 'Wellcome to Coffee site'
//         },
//         ru: {
//             mainH1Text: 'Все что Вы любите в кофе.',
//             mainH2Text: 'Мы делаем каждый день полным энергии и вкуса. <br> Хотите попробовать наши зерна?',
//             welcomeMsg: 'Добро пожаловать на сайте Кофе'
//         }
//     }
// })
// const messages = {
//   en: {
//     home: {
//         mainH1Text: 'Everything You Love About Coffee',
//         mainH2Text: 'We make every day full of energy and taste <br> Want to try our beans?',
//         welcomeMsg: 'Wellcome to Coffee site'
//     }
//   },
//   ru: {
//     home: {
//         mainH1Text: 'Все что Вы любите в кофе.',
//         mainH2Text: 'Мы делаем каждый день полным энергии и вкуса. <br> Хотите попробовать наши зерна?',
//         welcomeMsg: 'Добро пожаловать на сайте Кофе'
//     }
//   }
// }

