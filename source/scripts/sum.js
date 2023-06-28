function somar (a, b){
    return a+ b;
}

function somarArray(array){
    let soma = 0;

    for (let i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma;
}

module.exports = {
    somar,
    somarArray
}