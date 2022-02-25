$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    
})


//Como funciona cada elemento:
//loop: Conseguimos rolar todos os filmes sem limite, independente de chegar no ultimo.
//margin: espaçamento entre os elementos 
//nav: opção de rolar os filmes pela seta
/*responsive: caso aumentarmos o tamanho da tela, havará uma responsividade. Ex: caso aumentarmos a tela 
até 599px, ele mostrará somente um filme. De 600px há 999px, 3 filmes. Por fim, 1000px pra cima, 5 itens
*/