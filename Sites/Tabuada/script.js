function criarTabuada(){
    let numero = document.getElementById('num')
    const msg = document.getElementById('msg')
    if (numero.value.length == 0){
        window.alert('[Erro] Insira um valor')
    }else{
        msg.innerHTML = ''
        for(let c = 1; c <= 10; c ++){
            const resul = Number(numero.value) * c
            msg.innerHTML += `${numero.value} x ${c} = ${resul} <br> `
    }
    }

}
