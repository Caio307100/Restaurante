let produtos = []
let pratos1 = document.querySelector("#pratos1")
let pratos2 = document.querySelector("#pratos2")
class Produto{
    constructor(nome, imagem, descrisao){
        this.nome = nome
        this.imagem = imagem
        this.descrisao = descrisao
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    let respostaBanco = await fetch("https://tech4produtos.fly.dev/produtos/restaurante=Santo Garfo")
    let json = await respostaBanco.json()
    for (produtoJ of json){
        produtos.push(new Produto(produtoJ.nome, produtoJ.imagem, produtoJ.descricao))
    }
    let i = 0
    for (produtoL of produtos){
        if (i >= 3){
            let nome = produtoL.nome
            let palavras = nome.split(" ")
            let id
            for (palavra of palavras){  
                id = palavra.toLowerCase()
                break
            } 
            pratos2.innerHTML += `
            <div class="col d-flex justify-content-center">
                <div class="card border border-0" style="width: 18rem;" id="${id}">
                    <img src="${produtoL.imagem}" class="card-img-top" alt="Imagem ${produtoL.nome}">
                    <div class="card-body bg-black rounded-bottom">
                        <h5 class="card-title text-light">${produtoL.nome}</h5>
                        <p class="card-text text-dark-emphasis">${produtoL.descrisao}</p>

                        <a href="detalhes.html" class="d-flex justify-content-center">
                            <button type="button" class="btn btn-warning w-100">
                                Ver detalhes
                            </button>
                        </a>
                    </div>
                </div>
            </div>`
        }
        else{
            let nome = produtoL.nome
            let id = nome.toLowerCase()
            pratos1.innerHTML += `
            <div class="col d-flex justify-content-center">
                <div class="card border border-0" style="width: 18rem;" id="${id}">
                    <img src="${produtoL.imagem}" class="card-img-top" alt="Imagem ${produtoL.nome}">
                    <div class="card-body bg-black rounded-bottom">
                        <h5 class="card-title text-light">${produtoL.nome}</h5>
                        <p class="card-text text-dark-emphasis">${produtoL.descrisao}</p>

                        <a href="detalhes.html" class="d-flex justify-content-center">
                            <button type="button" class="btn btn-warning w-100">
                                Ver detalhes
                            </button>
                        </a>
                    </div>
                </div>
            </div>`
            i++
        }
    }
})