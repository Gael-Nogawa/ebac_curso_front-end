const form = document.getElementById('form-input');
const valorDeA = document.getElementById('valor-a');
const valorDeB = document.getElementById('valor-b');
    

form.addEventListener('submit', function(e){
    e.preventDefault();
        
    const adicao = parseInt(valorDeA.value) + parseInt(valorDeB.value);
    const subtracao = valorDeA.value - valorDeB.value;
    const multiplicacao = valorDeA.value * valorDeB.value;
    const divisao = valorDeA.value / valorDeB.value;
    
    let msgSucesso = `Sucesso! O valor foi contabilizado.<br>O valor de A: ${valorDeA.value}, valor de B: ${valorDeB.value}.<br><br> Adição: ${adicao}<br>Subtração : ${subtracao}<br> Multiplicação: ${multiplicacao}<br> Divisão: ${divisao}`;
    let msgErro = `O valor de A precisa ser maior que o valor de B`;

    const aMaior = document.querySelector('.message-input');
    const bMaior = document.querySelector('.message-input');
    
    if (valorDeA.value > valorDeB.value ){
    
        aMaior.innerHTML = msgSucesso;
        aMaior.style.display = 'block';
        aMaior.style.backgroundColor = 'rgb(0, 68, 255)';

    } else {
    
        bMaior.innerHTML = msgErro;
        bMaior.style.display = 'block';
        bMaior.style.backgroundColor =  ' rgb(255, 77, 0)';
    
    }
    valorDeA.value = ' ';
    valorDeB.value = ' ';
})
