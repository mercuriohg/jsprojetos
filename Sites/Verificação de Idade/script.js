function clickPessoa(){
    const genero = document.getElementById('masc')
    const generof = document.getElementById('feminino')
    const idade = document.getElementById('idadenum')
    let msg = document.getElementById('msg')
    let idadepessoa = Number(idade.value)
    let data = new Date()
    let ano = data.getFullYear()
    let conta = ano - idadepessoa
    if (idade.value.length == 0 || idade.value > ano ){
        window.alert('[Erro] Verifique os dados novamente')
    }else {
        const checksex = document.getElementsByName('gender')
        let checkidade = conta
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(checksex[0].checked){
            genero = 'Feminino'
            if (checkidade >=0 && checkidade < 10){
                img.setAttribute('src', 'img/criancafem.jpg' )
            } else if (checkidade > 10 && checkidade <= 18){
                img.setAttribute('src', 'img/jovemfem.jpg')
            }else if (checkidade > 18 && checkidade < 60){
                img.setAttribute('src', 'img/adultofem.jpg')
            }else{
                img.setAttribute('src', 'img/idosafem.jpg')
            }
        } else if (checksex[1].checked){
            genero = 'Masculino'
             if (checkidade >=0 && checkidade < 10){
                img.setAttribute('src', 'img/criancamasc.jpg' )
            } else if (checkidade > 10 && checkidade <= 18){
                img.setAttribute('src', 'img/jovemmasc.jpg')
            }else if (checkidade > 18 && checkidade < 60){
                img.setAttribute('src', 'img/adultomasc.jpg')
            }else{
                img.setAttribute('src', 'img/idosomasc.jpg')
            }
        }
        msg.innerHTML = `Detectamos o Gênero ${genero} e a idade de ${checkidade} anos.`
        msg.appendChild(img)
    }
}