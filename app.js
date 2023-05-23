const { createApp } = Vue
createApp({
    data() {
        return {
            title: 'Aluguel de filmes!',
            
            products: [
                {
                    title : 'Homem Aranha',
                    description: 'Filme orginal da primeira franquia',
                    image : 'assets/images/Spide-Man_Poster.jpg',
                    stars: 5
                },
                {
                    title : 'O Espetacular Homem Aranha',
                    description: 'Filme orginal da segunda franquia',
                    image : 'assets/images/espetacular-homem-aranha.jpeg',
                    stars: 4
                },
                {
                    title : 'Homem Aranha - De volta Pra Casa',
                    description: 'Filme orginal da terceira franquia - UCM',
                    image : 'assets/images/de-volta-ao-lar.jpeg',
                    stars: 5
                },
                {
                    title : 'Vingadores - Guerra Infinita',
                    description: 'Primeiro filme de conclusão da saga do Infinito no UCM',
                    image : 'assets/images/infinite-war.jpg',
                    stars: 5
                },
                {
                    title : 'Vingadores - Ultimato',
                    description: 'Segundo filme de conclusão da saga do Infinito no UCM',
                    image : 'assets/images/ultimato.jpg',
                    stars: 5
                },
            ],
            cart: [],
            themePage: {
                theme: 'black',
                message: 'Tema Branco?',
                
            } ,
            styles: {
                backgroundColor: '#1f1f1f',
                color: '#fff',
                transition: '1s'
            }
        }
    },

    methods: {
        addCart (product) {
            this.cart.push(product)
        },
        inCart (product) {
            return this.cart.indexOf(product) != -1
        },
        removeCart (product) {
            this.cart = this.cart.filter((prod, index) => product != prod )
        },
        alteraTema() {
           
            if (this.themePage.theme == 'black') {
                this.themePage.theme = 'white'
                this.themePage.message = 'Tema Escuro?'
                this.styles.backgroundColor = '#fff'
                this.styles.color = '#1f1f1f'

                return
            } 
            
            if (this.themePage.theme == 'white') {
                this.themePage.theme = 'black'
                this.themePage.message = 'Tema Claro?'
                this.styles.backgroundColor = '#1f1f1f'
                this.styles.color = '#fff'

                return
            }
        }
    }
}).mount('#app')