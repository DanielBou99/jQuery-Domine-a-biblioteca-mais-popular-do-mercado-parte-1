function inserePlacar() {
    
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Daniel";
    var numPalavras = $("#contador-palavras").text();
    
    var linha = novaLinha(usuario, numPalavras);

    // Encontrar elemento dentro de linha com a classe botao-remover e adicionar um evento de click
    linha.find(".botao-remover").click(removeLinha);
    
    corpoTabela.prepend(linha);
}

function removeLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
}

function novaLinha(usuario, numPalavras) {
    
    var linha = $("<tr>"); // Cria o elemento e retorna
    
    // Cria a coluna usuario
    var colunaUsuario = $("<td>").text(usuario);
    
    // Cria a coluna palavras
    var colunaPalavras = $("<td>").text(numPalavras);
    
    // Cria a coluna com botão remover
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");
    link.append(icone);
    colunaRemover.append(link);

    // Juntar a linha dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;

}