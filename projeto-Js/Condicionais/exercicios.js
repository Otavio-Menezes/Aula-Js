// Peça a cor do semáfaro (`"verde"`, `"amarelo"`, `"vermelho"`) e diga a ação.

// const farol = prompt("Cor do semáforo (verde/amarelo/vermelho");

// if (farol === "verde" || farol === "Verde") {
//     console.log("Pode ir!");

// } else if (farol === "amarelo" ||  farol === "Amarelo") {
//     console.log("Tenha cuidado");

// } else if (farol === "vermelho" || farol === "Vermelho") {
//     console.log("Pare e espere o farol abrir");
// } else {
//     console.log("Cor inválida");
// }

// --------------

// const nota = Number(prompt("Digite sua nota:"));

// if (nota < 0 || nota < 60) {
//     console.log("Você foi reprovado, que pena!");
// } else if (nota >= 60 && nota <= 79) {
//     console.log("Você está de recuperação, boa sorte!");
// } else if (nota >= 80 && nota <= 100) {
//     console.log("Parabéns, você foi aprovado");
// } else  {
//     console.log("Nota Inválida.");
// }

/* -----------
Login com && e ||
Acesso liberado se (usuário é `admin` OU `gerente`) E senha é `1234`.
**Exemplo:** `admin` e `1234` → `Acesso liberado` · `admin` e `0000` → `Acesso negado`
*/

const user = prompt("Usúario: ");
const pass = prompt("Digite sua senha");

const perfilOk = (user === "Admin" || user === "Gerente");

const senhaOk = (pass === "1234");

if (perfilOk && senhaOk) {
    console.log("Ben-vindo: "+ user);
} else {
    console.log("Acesso negado");
}