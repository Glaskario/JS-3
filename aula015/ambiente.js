/*let num = [5, 6, 7, 9, 1]
num.push(2)
num.push(9)
num.sort()

console.log(num)
console.log(`O vetor tem  ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)*/

let valores = [8, 1, 7, 4, 2]

console.log(valores)
valores.sort()


/*for(let pos=0; pos < valores.length; pos++){

    console.log(`A posição ${valores.length} tem o valor ${valores[pos]}`)
}*/

for( let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


