
const form = document.getElementById("incricao")

form.addEventListener("submit", function(event){
    event.preventDefault();
    const dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        ingresso: document.getElementById("tipo de ingresso").value
    };

    console.log(dados)
})