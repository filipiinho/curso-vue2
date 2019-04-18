new Vue ({
    el: '#desafio',
    data: {
        nome: 'Filipe',
        idade: '22',  
        imagem: 'https://img.elo7.com.br/product/main/18134D3/quadro-decorativo-paisagem-onda-1-peca-paisagem.jpg'     
    },
    methods: {
       aleatorio: function() {
            numero = Math.random()
            return numero
     }
    }
})