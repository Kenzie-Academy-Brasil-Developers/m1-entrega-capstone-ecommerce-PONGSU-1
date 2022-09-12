let listaProdutos = document.getElementsByClassName('listaProdutos')[0]

let listaCarrinho = []
let produto = { foto: "", nome: "", preco: "" }
let totalCarrinho = 0

function totalCarrin() {
    totalCarrinho = 0
    for (let i = 0; i < listaCarrinho.length; i++) {
        totalCarrinho += parseFloat(listaCarrinho[i].preco.slice(3))
    }
    return totalCarrinho
}

let carrinho = document.getElementById('carrinho')

function carrin() {
    totalCarrin()
    if (listaCarrinho.length > 0) {
        carrinho.innerHTML = ''
        carrinho.insertAdjacentHTML('afterbegin', `
            <h4>Carrinho de compras</h4>
            <ul class="produtosCarrinho">
            </ul>   
        `)

        let produtosCarrinho = document.getElementsByClassName('produtosCarrinho')[0]
        for (let i = 0; i < listaCarrinho.length; i++) {
            produtosCarrinho.insertAdjacentHTML('beforeend', `
    <li class="produtoCarrinho">
                            <img src="${listaCarrinho[i].foto}" alt="">
                            <aside class="infoProdutoCarrinho">
                                <h4 class="infoNome">${listaCarrinho[i].nome}</h4>
                                <h5>${listaCarrinho[i].preco}</h5>
                                <button type="submit" class='removerProduto'>Remover Produto</button>
                            </aside>
                        </li> 
        `)
        }
        produtosCarrinho.insertAdjacentHTML('afterend', `                  
            <ul class="resumoCarrinho">
            <li>
                <h4>Quantidade:</h4>
                <h5>${listaCarrinho.length}</h5>
            </li>                        
            <li>
                <h4>Total:</h4>
                <h5>R$ ${totalCarrinho.toFixed(2)}</h5>
            </li>
            </ul>   
        `)
    } else {
        carrinho.innerHTML = ''
        carrinho.insertAdjacentHTML('afterbegin', `
            <h4>Carrinho de compras</h4>
            <div id="carrinhoVazio">
                <h3>Carrinho vázio</h3>
                <h5 style="font-weight: 400">Adicione itens</h5>
            </div>
        `)
    }
    removerProd()
}

function listarProdutos() {
    for (let i = data.length-1; i >= 0; i--) {
        listaProdutos.insertAdjacentHTML('afterbegin', `
        <li class="produto">
                            <div class="imgProduto">
                                <img class="img" src="${data[i].img}" alt="">
                            </div>
                            <div class="infoProduto">
                                <h6 class="categoria">${data[i].tag}</h6>
                                <h4 class='nome'>${data[i].nameItem}</h4>
                                <h5 class="desc">${data[i].description}</h5>
                                <h5 class="preco">R$ ${data[i].value.toFixed(2)}</h5>
                                <button class="addCarrinho" type="submit">Adicionar ao carrinho</button>
                            </div>
                        </li>
        `)
    }
}

function filtraProdutos(categoria) {

    for (let i = 0; i < data.length; i++) {
        if (data[i].tag == categoria) {
            listaProdutos.insertAdjacentHTML('afterbegin', `
        <li class="produto">
                            <div class="imgProduto">
                                <img class="img" src="${data[i].img}" alt="">
                            </div>
                            <div class="infoProduto">
                                <h6 class="categoria">${data[i].tag}</h6>
                                <h4 class='nome'>${data[i].nameItem}</h4>
                                <h5 class="desc">${data[i].description}</h5>
                                <h5 class="preco">R$ ${data[i].value.toFixed(2)}</h5>
                                <button class="addCarrinho" type="submit">Adicionar ao carrinho</button>
                            </div>
                        </li>
        `)
        }
    }
}

let todos = document.getElementById('todos')
let acessorios = document.getElementById('acessorios')
let calcados = document.getElementById('calcados')
let camisetas = document.getElementById('camisetas')

todos.addEventListener('click', function () {
    listaProdutos.innerHTML = ''
    listarProdutos()
    addCarr()
})
acessorios.addEventListener('click', function () {
    listaProdutos.innerHTML = ''
    filtraProdutos('Acessórios')
    addCarr()
})
calcados.addEventListener('click', function () {
    listaProdutos.innerHTML = ''
    filtraProdutos('Calçados')
    addCarr()
})
camisetas.addEventListener('click', function () {
    listaProdutos.innerHTML = ''
    filtraProdutos('Camisetas')
    addCarr()
})

function addCarr() {
    let addCarrinho = document.getElementsByClassName('addCarrinho')
    for (let i = 0; i < addCarrinho.length; i++) {
        addCarrinho[i].addEventListener('click', function () {
            produto = { foto: `${this.parentNode.parentNode.getElementsByClassName('img')[0].src}`, nome: `${this.parentNode.getElementsByClassName('nome')[0].innerText}`, preco: `${this.parentNode.getElementsByClassName('preco')[0].innerText}` }
            listaCarrinho.push(produto)
            carrin()
        })
    }
}

function removerProd() {
    let removerProduto = document.getElementsByClassName('removerProduto')
    for (let i = 0; i < removerProduto.length; i++) {
        removerProduto[i].addEventListener('click', function () {
            console.log(carrinho);
            console.log(this.parentNode.getElementsByClassName('infoNome')[0].innerText);
            for (let i = 0; i < listaCarrinho.length; i++) {
                if (this.parentNode.getElementsByClassName('infoNome')[0].innerText == listaCarrinho[i].nome) {
                    listaCarrinho.splice(i, 1)
                    return carrin()
                }

            }
        })
    }
}

removerProd()
carrin()
listarProdutos()
addCarr()

let pesquisa = document.getElementById('pesquisar')
let botaoPesquisa = document.getElementById('botaoPesquisar')

botaoPesquisa.addEventListener('click', function () {
    console.log(pesquisa.value);
    listaProdutos.innerHTML = ''
    for (let i = 0; i < data.length; i++) {
        if (data[i].nameItem.toLowerCase().indexOf(pesquisa.value.toLowerCase()) != -1 || data[i].description.toLowerCase().indexOf(pesquisa.value.toLowerCase()) != -1 || data[i].tag[0].toLowerCase().indexOf(pesquisa.value.toLowerCase()) != -1) {
            listaProdutos.insertAdjacentHTML('afterbegin', `
                <li class="produto">
                    <div class="imgProduto">
                        <img class="img" src="${data[i].img}" alt="">
                    </div>
                    <div class="infoProduto">
                        <h6 class="categoria">${data[i].tag}</h6>
                        <h4 class='nome'>${data[i].nameItem}</h4>
                        <h5 class="desc">${data[i].description}</h5>
                        <h5 class="preco">R$ ${data[i].value.toFixed(2)}</h5>
                        <button class="addCarrinho" type="submit">Adicionar ao carrinho</button>
                    </div>
                </li>
            `)
        }
    }
    if (listaProdutos.innerHTML == '') {
        listaProdutos.insertAdjacentHTML('afterbegin', `<h2 style='color: #333333'>Nenhum produto encontrado</h2>`)
    }
    addCarr()
})

pesquisa.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        listaProdutos.innerHTML = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].nameItem.toLowerCase().indexOf(pesquisa.value.toLowerCase()) != -1 || data[i].description.toLowerCase().indexOf(pesquisa.value.toLowerCase()) != -1 || data[i].tag[0].toLowerCase().indexOf(pesquisa.value.toLowerCase()) != -1) {
                listaProdutos.insertAdjacentHTML('afterbegin', `
                    <li class="produto">
                        <div class="imgProduto">
                            <img class="img" src="${data[i].img}" alt="">
                        </div>
                        <div class="infoProduto">
                            <h6 class="categoria">${data[i].tag}</h6>
                            <h4 class='nome'>${data[i].nameItem}</h4>
                            <h5 class="desc">${data[i].description}</h5>
                            <h5 class="preco">R$ ${data[i].value.toFixed(2)}</h5>
                            <button class="addCarrinho" type="submit">Adicionar ao carrinho</button>
                        </div>
                    </li>
                `)
            }
        }
    }
    if (listaProdutos.innerHTML == '') {
        listaProdutos.insertAdjacentHTML('afterbegin', `<h2 style='color: #333333'>Nenhum produto encontrado</h2>`)
    }
    addCarr()
});
