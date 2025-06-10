
function clicar(){ 
    const ini = document.getElementById('txt1')
    const fim = document.getElementById('txt2')
    const passo = document.getElementById('txt3')
    const msg = document.getElementById('msg')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       window.alert('[Erro!]')
    }else{
        msg.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        for(let c = i; c <= f; c += p){
            msg.innerHTML += `${c} `
    }

    }
}