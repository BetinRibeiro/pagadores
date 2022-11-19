function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url, false)
    request.send()
    return request.responseText

}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function criaLinha(pagador){
    linha = document.createElement("tr");

    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdTelefone = document.createElement("td");

    tdId.innerHTML = pagador.id
    tdNome.innerHTML = pagador.nome
    tdTelefone.innerHTML = mtel(pagador.telefone)
        
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdTelefone);


    return linha;
}

function main(){
    let dados = fazGet("https://www.arsenalsystembr.com.br/api_banco/default/api/pagadores/0");
    let dadosconvertidos =  JSON.parse(dados);
    let lista = dadosconvertidos.pagadores
    let tabela = document.getElementById("tabela")
    dadosconvertidos.pagadores.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);

        
    });

    
}

main()