

const form = document.querySelector('form')
const cnpj2 = document.querySelector('#cnpj2')
const razaosocial2 = document.querySelector('#razaosocial2')
const cpf2 = document.querySelector('#cpf2')
const nome2 = document.querySelector('#nome2')
const saudacao2 = document.querySelector('#saudacao2')
const qdtfun2 = document.querySelector('#qdt-fun2')
const fatu2 = document.querySelector('#fatu2')



cnpj2.value = localStorage.getItem('cnpj')
razaosocial2.value = localStorage.getItem('rz')
cpf2.value = localStorage.getItem('cpf')
nome2.value = localStorage.getItem('nome')
saudacao2.value = localStorage.getItem('sau')
qdtfun2.value = localStorage.getItem('qdt')
fatu2.value = localStorage.getItem('fatu')




let btnvoltar = document.querySelector('#btn-voltar')
console.log(btnvoltar)

btnvoltar.addEventListener ('click', () => {
    window.location.href = 'index.html'
})