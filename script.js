

//VARIÁVEIS
const form = document.querySelector('form')
const cnpj = document.querySelector('#cnpj')
const razaosocial = document.querySelector('#razaosocial')
const cpf = document.querySelector('#cpf')
const nome = document.querySelector('#nome')
const saudacao = document.querySelector('#saudacao')
const qdtfun = document.querySelector('#qdt-fun')
const fatu = document.querySelector('#fatu')





// VALIDAÇÕES
const validateinputcnpj = () => {
    if(!cnpj.value) {
        cnpj.classList.add('invalid')
        cnpj.nextElementSibling.classList.remove('erro')

    }
}

const validateinputrazaosocial = () => {
    if (!razaosocial.value) {
        razaosocial.classList.add('invalid')
        razaosocial.nextElementSibling.classList.remove('erro')
    }
}

const validateinputcpf = () => {
    if(!cpf.value) {
        cpf.classList.add('invalid')
        cpf.nextElementSibling.classList.remove('erro')
    }
}

const validateinputnome = () => {
    if(!nome.value) {
        nome.classList.add('invalid')
        nome.nextElementSibling.classList.remove('erro')
    }
}

const validateinputsaudacao = () => {
    if(!saudacao.value) {
        saudacao.classList.add('invalid')
        saudacao.nextElementSibling.classList.remove('erro')
    }
}

const validateinputqdtfun = () => {
    if(!qdtfun.value) {
        qdtfun.classList.add('invalid')
        qdtfun.nextElementSibling.classList.remove('erro')
    }
}

const validateinputfatu = () => {
    if(!fatu.value) {
        fatu.classList.add('invalid')
        fatu.nextElementSibling.classList.remove('erro')
    }
}


















//EVENT LISTENER
cnpj.addEventListener ('input', ()=> {
    cnpj.classList.remove('invalid')
    cnpj.nextElementSibling.classList.add('erro')
})

razaosocial.addEventListener('input', () => {
    razaosocial.classList.remove('invalid')
    razaosocial.nextElementSibling.classList.add('erro')
})

cpf.addEventListener('input', () => {
    cpf.classList.remove('invalid')
    cpf.nextElementSibling.classList.add('erro')
})

nome.addEventListener('input', () => {
    nome.classList.remove('invalid')
    nome.nextElementSibling.classList.add('erro')
})

saudacao.addEventListener('input', () => {
    saudacao.classList.remove('invalid')
    saudacao.nextElementSibling.classList.add('erro')
})

qdtfun.addEventListener('input', () => {
    qdtfun.classList.remove('invalid')
    qdtfun.nextElementSibling.classList.add('erro')
})

fatu.addEventListener('input', () => {
    fatu.classList.remove('invalid')
    fatu.nextElementSibling.classList.add('erro')
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateinputcnpj()
    validateinputrazaosocial()
    validateinputcpf()
    validateinputnome()
    validateinputsaudacao()
    validateinputqdtfun()
    validateinputfatu()
})