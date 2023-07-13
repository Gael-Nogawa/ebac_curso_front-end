document.addEventListener("DOMContentLoaded", function () {
    const jogador1 = "X";
    const jogador2 = "O";
    let jogadorAtual = jogador2;
    let gameOver = false;
    

    atualizaMostrador();
    inicializar();

    function atualizaMostrador() {
        if (gameOver) {
            return;
        };
        if (jogadorAtual == jogador1) {
            let jogador = document.querySelectorAll("div img")[0];
            jogador.setAttribute("src", "../images/x.png");

        } else {
            let jogador = document.querySelectorAll("div img")[0];
            jogador.setAttribute("src", "../images/o.png");

        };
    }

    function inicializar() {
        let espacos = document.getElementsByClassName("espaco");
        for (let i = 0; i < espacos.length; i++) {
            espacos[i].addEventListener("click", function() {
                
                
                if (gameOver) {
                    return;
                };
                
                if (this.getElementsByTagName("img").length == 0) {
                    if (jogadorAtual == jogador1) {
                        this.innerHTML = "<img src='../images/x.png'>";
                        this.setAttribute("jogada", jogador1);
                        jogadorAtual = jogador2;
                        console.log("clicou no x");
                    } else {
                        this.innerHTML = "<img src='../images/o.png'>";
                        this.setAttribute("jogada", jogador2);
                        jogadorAtual = jogador1;
                        console.log('Clicou no O')
                    };
                    atualizaMostrador();
                    verificarVencedor();
                }
            });
        }
    }

    function verificarVencedor(){

        let a1 = document.getElementById('a1').getAttribute('jogada');
        let a2 = document.getElementById('a2').getAttribute('jogada');
        let a3 = document.getElementById('a3').getAttribute('jogada');

        let b1 = document.getElementById('b1').getAttribute('jogada');
        let b2 = document.getElementById('b2').getAttribute('jogada');
        let b3 = document.getElementById('b3').getAttribute('jogada');

        let c1 = document.getElementById('c1').getAttribute('jogada');
        let c2 = document.getElementById('c2').getAttribute('jogada');
        let c3 = document.getElementById('c3').getAttribute('jogada');


        let vencedor = "";

        if(((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || ( a1 == b2 && a1 == c3))&& a1 != ""){
            vencedor = a1;
        } else if (((b2 == b1 && b2 == b3) || (b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1))&& b2 != ""){
            vencedor = b2;
        } else if (((c3 == c1 && c3 == c2)|| (c3 == b3 && c3 == c1))&& c3 != "")  {
            vencedor = c3;
        }
        if (vencedor != ""){
            
            gameOver = true;
            
            setTimeout(function(){

                if (vencedor == jogador1){
                    document.getElementById('msg-vencedor').innerHTML += `Parabéns! O ganhador foi o '${jogador1}'</br> Jogador 1 `;
                } else {
                    document.getElementById('msg-vencedor').innerHTML += `Parabéns! O ganhador foi o '${jogador2}'</br> Jogador 2 `;
                } 
                
            }, 1000)
        }
        
        

    }
    
});
