import { reactive } from "@vue/reactivity";

const state = reactive({
  isActive: false,
})

const methods = {
  toggleBtn() {
    const body = document.querySelector("body");
    state.isActive = !state.isActive;
    body.classList.toggle("activeDark");
  }
}


const skills = [
  {
    name: 'Languajes',
    skillName: ['html', 'css', 'javascript(ES6+)']
  },
  {
    name: 'Frameworks',
    skillName: ['vuejs', 'strapi']
  },
  {
    name: 'Libraries',
    skillName: ['chartjs', 'Puppeteer', 'gsap', 'bootstrap']
  },
  {
    name: 'Tools',
    skillName: [
      'bash', 'firebase', 'npm', 'git & github', 'debugging', 'devtools',
      'Gulp & Grunt', 'webpack'
    ]
  },
  {
    name: 'Others',
    skillName: [
      'responsive design',
      'bem',
      'web components',
      'atomic design'
    ]
  }
]

const projects = [
  {
    name: 'Centro Urbano',
    description: 'Full redesign of website, improving UI and UX, performing SEO.',
    img: require("@/assets/centro_urbano.png"),
    url: 'https://centrourbano.com/'
  },
  {
    name: 'quadratin',
    description: 'Creation of components',
    img: require("@/assets/quadratin.png"),
    url: 'https://www.quadratin.com.mx/'
  },
  {
    name: 'Linde',
    description: 'Creation of components',
    img: require("@/assets/linde.png"),
    url: 'https://www.linde.mx/'
  }
]

const sideProjects = [
  {
    name: 'Strapi app',
    description: 'Crud app made making use of strapi as backend and vue as frontend',
    // img:,
    url: 'https://github.com/echb/simple_strapi_app',
    techs: ['vue', 'strapi', 'async / await', 'Axios', 'js', 'css', 'html']
  },
  {
    name: 'Music Player',
    description: 'app created on my free time to use mostly js, and web audio native api.',
    img: require("@/assets/music_make.gif"),
    url: 'https://echb.github.io/music_player/',
    techs: ['javaScript', 'html', 'css', 'local api', 'fech', 'vs code']
  },
  {
    name: 'Linkedin Clone',
    description: 'Still working on it, using static json, and async/await.',
    img: require("@/assets/linkedin_clone.png"),
    url: 'https://echb.github.io/linkedin_clone/',
    techs: ['vuejs', 'html', 'css', 'vs code']
  },
  {
    name: 'Air Quality',
    description: 'App made with waqi api, also as search api to display data of air quality.',
    img: require("@/assets/air_quality.png"),
    url: 'https://echb.github.io/air_quality/',
    techs: ['javaScript', 'html', 'css', 'waqi api', 'fech', 'vs code']
  },
  {
    name: 'Adventure Text Game',
    description: "Simple game based on decisions, also displays where you are in the path.",
    img: require("@/assets/adventure_game.png"),
    url: 'https://echb.github.io/adventure_text_game/',
    techs: ['javaScript', 'html', 'css', 'local api', 'fech', 'vs code']
  },
  {
    name: 'Turtles Race',
    description: 'Simple game making use of css transitions, js timers, so just a really small game.',
    img: require("@/assets/turtle_game.png"),
    url: 'https://echb.github.io/turtles_race/',
    techs: ['javaScript', 'html', 'css', 'vs code']
  },
  {
    name: 'Quiz Game',
    description: 'Simple quiz game',
    img: require("@/assets/quiz_game.png"),
    url: 'https://echb.github.io/quiz_game/',
    techs: ['javaScript', 'html', 'css', 'vs code']
  },
  {
    name: 'specialized page',
    description: 'Simple really simple imitation of the website with the same name',
    img: require("@/assets/specialized.png"),
    url: 'https://specialized-8670c.web.app/',
    techs: ['javaScript', 'html', 'css', 'firebase']
  },
  {
    name: 'Burguers page',
    description: 'Tring to imitate a website',
    img: require("@/assets/burguer.png"),
    url: 'https://backyard-burguer.web.app/',
    techs: ['javaScript', 'html', 'css', 'firebase']
  },
]

export default {
  state,
  methods,
  projects,
  skills,
  sideProjects,
}