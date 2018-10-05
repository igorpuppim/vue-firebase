//Criando a instancia do Vue e passando controle da div com id #app
new Vue({
  el: '#app',
  data: {
    title: 'Exercicio 5 - Eventos',
    name: 'Igor',
    coords:{
    	x:0,
    	y:0
    }
  },
  methods: {
	logEvent(e){
		console.log(e)
	},
	logCoords(e){
		this.coords.x = e.offsetX
		this.coords.y = e.offsetY
	},
	updateName(e){
		//console.log(e.target.value);   
		this.name= e.target.value;
	}
  }
})
