function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    
    var hora = data.getHours()

    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min} horas`

    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#f3d6b4'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#9d7870'
    }else{
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#cfe78f'
    }
}