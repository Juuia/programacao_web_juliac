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

        if(cpf.length != 11 && cpf.length != 14) {
            alert("Formato inválido");
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

        // Iterar 9 primeiros digitos, respeitando a seguinte regra:
        let soma = 0;

        for(let i = 1; i <=9; i++) {
            //console.log(cpf.charAt(i-1));
            soma = soma + (cpf.charAt(i-1) * (10 - (i-1)));
        }
        console.log(soma);
        let resto = soma % 11;        // Recuperar o RESTO da divisão por 11

        if(resto < 2) {
            if(cpf.charAt(9) != 0) {
                alert("CPF inválido!");
                return false;
            }
           // return true;
        }
            // verificar se o primeiro digito verificador
            // (10º digito do cpf) é zero
            // 10º digito do cpf é recuperado com cpf.charAt(9)

        let digitoVerificador1 = 11 - resto;

        if (digitoVerificador1 != cpf.charAt(9)) {
            alert("CPF inválido");
            return false;
        }
        return true;
    }
     
