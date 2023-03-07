const $form = document.querySelector(".novoItem")
const $list = document.querySelector(".lista");
let itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach( elemento => {

})

$form.addEventListener("submit", e =>{
    e.preventDefault();

    const nome = e.target.elements['nome'].value;
    const quantidade = e.target.elements['quantidade'].value;

    criaElemento(nome, quantidade);

    nome.value = "";
    quantidade.value = "1";
})

function criaElemento(nome, quantidade){

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");
    
    const quantidadeItem = document.createElement('strong');
    quantidadeItem.innerHTML = quantidade;
    
    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += nome;

    $list.appendChild(novoItem);

    const itemAtual = {
        'nome': nome,
        'quantidade': quantidade,
    }

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));
}