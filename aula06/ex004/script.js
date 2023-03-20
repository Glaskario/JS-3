var nome = window.String(prompt('Qual é seu nome?'))

document.write(`<h1>Seja bem-vindo ${nome}</h1>`)//.write serve para escrever no html
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}`)