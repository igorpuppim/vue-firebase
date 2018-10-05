//Criando a instancia do Vue e passando controle da div com id #app
new Vue({
  el: '#app',
  data: {
    title: 'Exercicio 6 - Eventos',
    showName: true,
    items: ['um','dois','tres']
  },
  methods: {
	logMessage(){
		alert('Olar Mundo');
	},
	toggleName(){
		this.showName = !this.showName
	}
  }
})

