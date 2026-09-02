const Desafio = [
    "Resolver problemas lógicos",  
    "Aprender funções novas",
    "Encontrar padrões",
    "Criar novas soluções",
    "Analiasar erros"
];

function iniciarDesafio(){
    const name = document.getElementById("name").value;

    if (name === ""){
        alert("digite seu nome primeiro antes de começar")   
        return;
    }
    const numeros = Math.floor(Math.randon() * desafios.length);
    const desafio = desafios[numeros];

    document.getElementById("resposta").innerHTML=`
    <h2> Olá ${name}</h2>`
    `<h2> Seu Desafio é: ${desafio}</h2>`    
}
