
// a função pesquisar, tudo oq agnt quer que aconteça, estara entre chaves, não é um laço de repetição(function) será feito apenas uma fez dentro daquela lista de dados
function pesquisar() {
    
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);  //getElement - é uma função ja embutida do JS para ser realizado
    // console.log fica registrado no console oq foi feito naquela variavel que esta entre parenteses do codigo

    let campoPesquisa = document.getElementById ("campo-pesquisa").value //o .value é que eu quero apenas o valor, onde é o valor que esta dentro da tag, no caso é o que digitar dentro do campo de pesquisa

    // a !, sig = se nada foi encontrado, se o resultado é vazio
    if(!campoPesquisa){
        section.innerHTML = "<p> Busca não encontrada</p>"
       return
    }

    //estou deixando tudo oq é digitado na variavel campoPesquisa em letra minuscula
    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        //se no dado.titulo estiver incluindo oq digitamos na variavel campoPesquisa entao ira criar no HTML e exibir na tela o resultado.
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //repetir o codigo dentro das aspas até terminar a lista de dados/criando um novo elemento
            resultados +=`
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    if(!campoPesquisa) {
        resultados = "<p> Busca não encontrada</p>"
    }


    // ira retornar na tela a variavel resultados que no caso é um campo de texto do "for"
    section.innerHTML = resultados;
}