// new Vue({
//   el: '#app',
//   data: {
//       message: "salut les gens",
//       link: "https://cdnjs.com/libraries/vue", 
//       success: true,
//       names: ["Michel", "Jean", "Diarit", "Maksym", "Louis"], 
//   },
//   methods: {
//     addPerson: function () {
//       this.names.push = ('Marion')
//     },
//   },
//   beforeCreate() {
//     console.log(this.$el)
//   },
// }); 

let vm = new Vue({
  el: "#App", 
  data: {
    seconds: 0 
  }, 
  mounted() {
    this.$interval = setInterval(() => {
      this.seconds++; 
    }, 1000); 
  },
  destroyed() {
    clearInterval(this.$tnterval)
  }
})