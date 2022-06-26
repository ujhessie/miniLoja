// usar paramentros no auxilio do carrinho

var produtos = [
	// {desc: "", valor: "", cod: ""}
	{desc: "Item 1", valor: "R$ 15, 00", cod: "01"},
]

var divProdutos = document.querySelector('.produtos')

function gerarItens() {
	for (var i = 0; i < 8; i++) {
		divProdutos.innerHTML += `
		<div class="produto">
    			<img src="" class="img-produto"/>
    			<p class="desc-p">Descricao do produto</p>
    			<span class="span-p">
    				<p class="valor-p">R$ 90, 00</p>
    				<a href="#" class="add-cart">+</a>
    			</span>
    		</div>
`
	}
}
gerarItens()
