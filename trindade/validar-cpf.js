import { cpf, cnpj } from 'cpf-cnpj-validator'

function validarCPF(cpfDigito){
    if(cpf.isValid(cpfDigito)){
        console.log("o CPF É valido" )
    }else{
        console.log("o CPF não é valido" )
    }
}

export default validarCPF