function carregar(){
    let msg = document.getElementById('msg')
    const img = document.getElementById('img')
    const data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Agora é ${hora}h ${minutos} min ${segundos} s\n Bom dia!!!`
        img.src = 'img/dia-redimensionado.jpg'
    } else if (hora >= 12  && hora <= 18){
        msg.innerHTML = `Agora é ${hora}h ${minutos} min ${segundos} s\n Boa Tarde!!!`
        img.src = 'img/tarde-redimensionado.jpg'
        document.body.style.background = '#efb810'
    } else {
        msg.innerHTML = `Agora é ${hora}h ${minutos} min ${segundos} s\n Boa Tarde!!!`
        document.body.style.background = '#03318c'
        img.src = 'img/noite-redimensionado.jpg'
    }
}
