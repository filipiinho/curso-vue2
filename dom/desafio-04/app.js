new Vue({
	el: '#desafio',
	data: {
		classe01: 'destaque',
		c1: true,
		classe3: '',
		classe4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classe01 = this.classe01 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500)
		},
		setPerigo(event) {
			if(event.target.value == "true") {
				this.c1 = true
			}else if(event.target.value == "false")
				this.c1 = false
		}
	}	
})
