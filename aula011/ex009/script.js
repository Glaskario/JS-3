

function calcular(){
var paiz = document.querySelector('input#pais')

var res = document.querySelector('div#res') 
 
if(paiz != 'Brasil'){
    res.innerHTML += 'Estrangeiro'
} else {
    res.innerHTML += 'Brasileiro'
}   
}

