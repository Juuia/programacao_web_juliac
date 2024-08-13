let titulo = document.getElementById("titulo").value;

console.log(titulo);

function submeter() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;

    console.log(cpf);
    console.log(validaCPF(cpf))
}

function validaCPF(cpf) {
    if(cpf == "") {
        alert("Campo CPF não pode ser vazio");
        return false;
    }

        cpf = cpf.trim();

        if(/[a-zA-Z]/.test(cpf)){
            console.log("Não pode conter letras");
            return false
        }

        //verificar se é composto SOMENTE de números, "." ou "-"
        if(!/^[\d.-]+$/.test(cpf)) {
            alert("CPF só pode conter números, '.' ou '-'");
            return false;
        }
        //    console.log("O CPF só tem números ou pontos ou hífen");
        //}
        //else {
        //    console.log("Tem caracter inválido!")
        //}

        //Continuar a validação
        //Formatos CPFs válidos:
        //123.456.789-10
        //12345678910

    return true;
}