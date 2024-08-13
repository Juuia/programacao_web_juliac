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
            console.log("Contém letras");
            return false
        }

    return true;
}