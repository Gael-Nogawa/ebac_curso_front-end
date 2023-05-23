
$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
        dots: true
    });

    
    
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    

    $("#campo-selected").on('change', function(index, value){
        let campoSelecionado = $("#campo-selected").val();
        
        let mascara;
        if( campoSelecionado === 'cpf'){
            mascara = $("#cpfCnpj").mask("000.000.000-00")
        } else {
            mascara = $("#cpfCnpj").mask("00.000.000/0000-00")
        }  
        
        $("#cpfCnpj").mask(mascara);
    })  

    $('#tel').mask('(00) 00000-0000',{
        placeholder: '(12) 12345-1234'
    });

    $('#cep').mask('00.000-000', {
        placeholder: '01.001-001'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira o nome',
            email: 'Por favor, insira o seu melhor e-mail',
            tel: 'Por favor, insira o seu número de telefone',
           // cpf: 'Por favor, insira o seu CPF',
            endereco: 'Por favor, insira o endereço',
            cep: 'Por favor, insira o CEP corretamente'
        },
        
        submitHandler: function(form){
            console.log(form);
        },

        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();

            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
           
        },
    });
});
