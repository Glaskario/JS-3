

function calcular(){
var txtv = window.document.getElementById('txtvel')
var res = window.document.querySelector('div#res')
var vel = Number(txtv.value)
res.innerHTML = `Sua velocidade atual é de ${vel}Km/h`
res.innerHTML += `<p> Dirija sempre em segurança!</p>`
if (vel > 60){
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong>. Você está acima da velocidade permitida. MULTADO!</p> `
    
}
}