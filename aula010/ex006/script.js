var a = window.document.getElementById('area') 
var b = window.document.getElementById('clique')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', enterr)
a.addEventListener('mouseout', saiu)
b.addEventListener('click', clicou)
function clicar() {
  
   a.innerHTML = 'CLICOU!'
   a.style.background = 'red'
}
function enterr(){
a.innerHTML = 'ENTROU!'

}

function saiu(){
    a.innerHTML = 'SAIU!'
}
function clicou(){
    a.innerHTML = 'interaja...'
    a.style.background = 'rgb(135, 212, 116)'
}