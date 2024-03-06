function adicionarItem(){
    // obter valores dos campos (input)
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quant = document.getElementById("quant").value;
    
    // validar informações inseridas
    if (!nome || !valor || !quant) {
        alert("Preencha todos os campos");
        return;

    }

    // criar uma linha na tabela com 3 celulas
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    var celulaNome = novaLinha.insertCell(0);
    var celulaValor = novaLinha.insertCell(1);
    var celulaQuant = novaLinha.insertCell(2);

    // atribuir as celulas os valores digitados
    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuant.innerHTML = quant;

    // limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quant").value = "";
}
