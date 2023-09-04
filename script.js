






//VARIÁVEIS
const form = document.querySelector('form')
const cnpj = document.querySelector('#cnpj')
const razaosocial = document.querySelector('#razaosocial')
const cpf = document.querySelector('#cpf')
const nome = document.querySelector('#nome')
const saudacao = document.querySelector('#saudacao')
const qdtfun = document.querySelector('#qdt-fun')
const fatu = document.querySelector('#fatu')

let cnpjv = cnpj.value
let rzv = razaosocial.value
let cpfv = cpf.value 
let nomev = nome.value
let saudacaov = saudacao.value
let qdtfunv = qdtfun.value
let fatuv = fatu.value


const btn = document.querySelector('#btn')
const input = document.querySelectorAll('form', '#cnpj', '#razaosocial', '#cpf', '#nome', '#saudacao', '#qdt-fun', '#fatu')




btn.disabled = true

const btncheck = () => {
    if (!input.value) {
    } else {
        btn.disabled = false
    }
}

/* parte que maneja os dados inseridos 
anteriormente quando você volta para corrigir algum dado*/
cnpj.value = localStorage.getItem('cnpj')
cnpjv = cnpj.value
razaosocial.value = localStorage.getItem('rz')
rzv = razaosocial.value
cpf.value = localStorage.getItem('cpf')
cpfv = cpf.value
nome.value = localStorage.getItem('nome')
nomev = nome.value
saudacao.value = localStorage.getItem('sau')
saudacaov = saudacao.value
qdtfun.value = localStorage.getItem('qdt')
qdtfunv = qdtfun.value
fatu.value = localStorage.getItem('fatu')
fatuv = fatu.value











// VALIDAÇÕES
const validateinputcnpj = () => {
    if(!cnpj.value) {
        cnpj.classList.add('invalid')
        cnpj.nextElementSibling.classList.remove('erro')

    }else {
        return true
    }
}

const validateinputrazaosocial = () => {
    if (!razaosocial.value) {
        razaosocial.classList.add('invalid')
        razaosocial.nextElementSibling.classList.remove('erro')
    }else {
        return true
    }
}

const validateinputcpf = () => {
    if(!cpf.value) {
        cpf.classList.add('invalid')
        cpf.nextElementSibling.classList.remove('erro')
    }else {
        return true
    }
}

const validateinputnome = () => {
    if(!nome.value) {
        nome.classList.add('invalid')
        nome.nextElementSibling.classList.remove('erro')
    }else {
        return true
    }
}

const validateinputsaudacao = () => {
    if(!saudacao.value) {
        saudacao.classList.add('invalid')
        saudacao.nextElementSibling.classList.remove('erro')
    }else {
        return true
    }
}

const validateinputqdtfun = () => {
    if(!qdtfun.value) {
        qdtfun.classList.add('invalid')
        qdtfun.nextElementSibling.classList.remove('erro')
    }else {
        return true
    }
}

const validateinputfatu = () => {
    if(!fatu.value) {
        fatu.classList.add('invalid')
        fatu.nextElementSibling.classList.remove('erro')
    }else {
        return true
    }
}


















//EVENT LISTENER
cnpj.addEventListener ('input', ()=> {
    cnpj.classList.remove('invalid')
    cnpj.nextElementSibling.classList.add('erro')
    cnpjv = cnpj.value
    btn.disabled = false
})

razaosocial.addEventListener('input', () => {
    razaosocial.classList.remove('invalid')
    razaosocial.nextElementSibling.classList.add('erro')
    rzv = razaosocial.value
    btn.disabled = false
})

cpf.addEventListener('input', () => {
    cpf.classList.remove('invalid')
    cpf.nextElementSibling.classList.add('erro')
    cpfv = cpf.value 
    btn.disabled = false
})

nome.addEventListener('input', () => {
    nome.classList.remove('invalid')
    nome.nextElementSibling.classList.add('erro')
    nomev = nome.value
    btn.disabled = false
})

saudacao.addEventListener('input', () => {
    saudacao.classList.remove('invalid')
    saudacao.nextElementSibling.classList.add('erro')
    saudacaov = saudacao.value
    btn.disabled = false
})

qdtfun.addEventListener('input', () => {
    qdtfun.classList.remove('invalid')
    qdtfun.nextElementSibling.classList.add('erro')
    qdtfunv = qdtfun.value
    btn.disabled = false
})

fatu.addEventListener('input', () => {
    fatu.classList.remove('invalid')
    fatu.nextElementSibling.classList.add('erro')
    fatuv = fatu.value
    btn.disabled = false
})





//submit
form.addEventListener("submit", (e) => {
    e.preventDefault()
   let valcnpj = validateinputcnpj()
   let valrz = validateinputrazaosocial()
   let valcpf = validateinputcpf()
   let valn = validateinputnome()
   let valsau = validateinputsaudacao()
   let valqdtfun = validateinputqdtfun()
   let valfatu =  validateinputfatu()

   localStorage.setItem('cnpj',cnpjv)
   localStorage.setItem('rz',rzv)
   localStorage.setItem('cpf',cpfv)
   localStorage.setItem('nome',nomev)
   localStorage.setItem('sau',saudacaov)
   localStorage.setItem('qdt',qdtfunv)
   localStorage.setItem('fatu',fatuv)
   
   if (valcnpj & valrz & valcpf & valn & valsau & valqdtfun & valfatu == true) {
       window.location.href = form.action = 'index2.html'
   }  

})










