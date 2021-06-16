var app = new Vue({
  el: '#app',
  
  data: {
    welcome: "Hello world",
    p1: "Officia nisi et incididunt fugiat. Et magna eiusmod amet labore aliquip est est incididunt magna occaecat. Velit ullamco excepteur magna enim dolore dolore laboris minim. Exercitation ad tempor voluptate cupidatat commodo officia irure Lorem ut ex ut aute ex. Minim exercitation incididunt pariatur ipsum sit elit sint eu consectetur ea et. Fugiat exercitation Lorem qui consectetur culpa quis laborum ea minim. Ea ad non ad enim voluptate aliquip incididunt do ut aliqua sit.",
    ps: [
      "Officia nisi et incididunt fugiat. Et magna eiusmod amet labore aliquip est est incididunt magna occaecat. Velit ullamco excepteur magna enim dolore dolore laboris minim. Exercitation ad tempor voluptate cupidatat commodo officia irure Lorem ut ex ut aute ex. Minim exercitation incididunt pariatur ipsum sit elit sint eu consectetur ea et. Fugiat exercitation Lorem qui consectetur culpa quis laborum ea minim. Ea ad non ad enim voluptate aliquip incididunt do ut aliqua sit.",
      "Officia nisi et incididunt fugiat. Et magna eiusmod amet labore aliquip est est incididunt magna occaecat. Velit ullamco excepteur magna enim dolore dolore laboris minim. Exercitation ad tempor voluptate cupidatat commodo officia irure Lorem ut ex ut aute ex. Minim exercitation incididunt pariatur ipsum sit elit sint eu consectetur ea et. Fugiat exercitation Lorem qui consectetur culpa quis laborum ea minim. Ea ad non ad enim voluptate aliquip incididunt do ut aliqua sit.",
      "Officia nisi et incididunt fugiat. Et magna eiusmod amet labore aliquip est est incididunt magna occaecat. Velit ullamco excepteur magna enim dolore dolore laboris minim. Exercitation ad tempor voluptate cupidatat commodo officia irure Lorem ut ex ut aute ex. Minim exercitation incididunt pariatur ipsum sit elit sint eu consectetur ea et. Fugiat exercitation Lorem qui consectetur culpa quis laborum ea minim. Ea ad non ad enim voluptate aliquip incididunt do ut aliqua sit.",
      "Officia nisi et incididunt fugiat. Et magna eiusmod amet labore aliquip est est incididunt magna occaecat. Velit ullamco excepteur magna enim dolore dolore laboris minim. Exercitation ad tempor voluptate cupidatat commodo officia irure Lorem ut ex ut aute ex. Minim exercitation incididunt pariatur ipsum sit elit sint eu consectetur ea et. Fugiat exercitation Lorem qui consectetur culpa quis laborum ea minim. Ea ad non ad enim voluptate aliquip incididunt do ut aliqua sit."
    ],
    showPs: false
  },

  methods: {
    malert: () => alert('me hiciste click'),

    reverserd: function() {
      this.welcome = this.welcome.split('').reverse().join('')
    }
  },

  mounted: function() {
    this.$nextTick(function () {
      getAll()
    })
  }

})

function getAll() {
  console.log("hola function ")
  app.welcome = "Hola mundo"
}