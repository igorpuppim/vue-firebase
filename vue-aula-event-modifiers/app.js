//Criando a instancia do Vue e passando controle da div com id #app
new Vue({
  el: '#app',
  data: {
    title: 'Exercicio 6 - Eventos',
    showName: true,
    items: ['um','dois','tres'],
    ninjas: [
      { name: 'Crystal', age: 25, belt: 'black' },
      { name: 'Robert', age: 30, belt: 'Red' },
      { name: 'Clark', age: 35, belt: 'Blue' }
    ]
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

