function Enviar() {
    const Nome = document.getElementById("Nome").value;
    const Altura = document.getElementById("Altura").value;
    const Descricao = document.getElementById("Descricao").value;

    const Mostro = {
        "nome": Nome,
        "altura": Altura,
        "Habilidade": Descricao,
    }

if(Nome != '' && Altura != '' && Descricao != ''){

    var Dados = JSON.parse(localStorage.getItem("jsonData")) || [];

    Dados.push(Mostro);

    localStorage.setItem("jsonData", JSON.stringify(Dados));

    MostrarDados(Dados);

} else{
    alert("ERRO, está faltando informações, digite novamente");
}

}

    const Tema = document.getElementById("Tema");

    Tema.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
    });


function MostrarDados(Dados){
    const TodosOsMostros = document.querySelector('.Mostros');

    TodosOsMostros.innerHTML = "";

    Dados.forEach(function(Dado, index) {

        const Row = document.createElement('div');
        const LinhaNome = document.createElement('p');
        const LinhaFoto = document.createElement('img');
        const LinhaAltura = document.createElement('p');
        const LinhaHabilidade = document.createElement('p');
        const Excluir = document.createElement("div");

        LinhaNome.innerHTML = '<spam class="Descricao">Nome:<br></spam>' + Dado.nome;
        LinhaFoto.src = `https://robohash.org/${Dado.nome}`;
        LinhaAltura.innerHTML = '<spam class="Descricao">Altura:<br></spam>' + Dado.altura + ' Metros';
        LinhaHabilidade.innerHTML = '<spam class="Descricao">Habilidade:<br> </spam>' + Dado.Habilidade;
        Excluir.innerHTML = '<img class="Lixeira" src="Imagem/Lixeira.png"></img>';

        Excluir.addEventListener("click", function(){
            ExcluirItens(index);
        })

        Row.appendChild(LinhaNome);
        Row.appendChild(LinhaFoto);
        Row.appendChild(LinhaAltura);
        Row.appendChild(LinhaHabilidade);
        Row.appendChild(Excluir);

        TodosOsMostros.appendChild(Row);
});
}

    function ExcluirItens(index){
        const Dados = JSON.parse(localStorage.getItem("jsonData")) || [];
        Dados.splice(index, 1);
        localStorage.setItem("jsonData", JSON.stringify(Dados))
        MostrarDados(Dados);
}

document.addEventListener("DOMContentLoaded", function(){
    const Dados = JSON.parse(localStorage.getItem("jsonData")) || [];
    MostrarDados(Dados);
});