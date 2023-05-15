$(document).ready(function(){

    $('header button').click(function(e){
        $('.container').slideDown();

    })
    
    $('#recolher').click(function(){
        $('.container').slideUp();
    })

    $('.container').on('submit', function(e){
        e.preventDefault();

        const inputTarefa = $('#colocando-nova-tarefa').val();

        console.log(inputTarefa)
        const novaTarefa = $(`<li>${inputTarefa}</li>`);
        $(novaTarefa).appendTo('ul');
        console.log('elemento1');
        
        $(novaTarefa).on('click', function(){
            const liRisc = $(novaTarefa).toggleClass('riscado');
            console.log('elemento2')
        })
        $('#colocando-nova-tarefa').val(' ');
       
    })

   

})
