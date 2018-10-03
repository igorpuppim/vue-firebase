//Criando a instancia do Vue e passando controle da div com id #app
new Vue({
  el: '#app',
  data: {
    title: 'Exercicio 4',
	texto: 'aula 8',
	musica: ' i miss you: ',
	url: 'https://www.youtube.com',
	classes: ['one','two']
  },
  methods: {
	greet(param){
		
		return `${param} - ${this.musica} HELLO THERE, THE ANGEL FROM MY NIGHTMARE`
	}  
  }
})
