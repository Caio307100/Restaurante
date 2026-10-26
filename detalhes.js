document.addEventListener("DOMContentLoaded", async () => {
    const search = await new URLSearchParams(window.location.search)
    const id = search.get("id")
    if (id == null){
        let produtos = []
        class Produto{
            constructor(nome, imagem, descrisao){
                this.nome = nome
                this.imagem = imagem
                this.descrisao = descrisao
            }
        }
        const respostaBanco = await fetch("https://tech4produtos.fly.dev/produtos/restaurante=Santo Garfo")
        const json = await respostaBanco.json()
        for (let produto of json){
            produtos.push(new Produto(produto.nome, produto.imagem, produto.descricao))
        }
        for (let produto of produtos){
            let nome = produto.nome
            let palavras = nome.split(" ")
            let idProduto
            if (palavras.lenght == 0){
                idProduto = nome.toLowerCase()
            }
            else{
                for (palavra of palavras){
                    idProduto = palavra
                    break
                }
            }
            document.querySelector("main").innerHTML += `
            <div class="container-fluid mt-5 vh-75">
                <div class="d-flex gap-5" id="${idProduto}">
                    <img src="${produto.imagem}" alt="imagem ${produto.nome}" width="30%" class="imagem ms-3">

                    <div class="textos d-flex flex-column gap-4">
                        <h2 class="text-warning d-inline-flex" id="titulo-${idProduto}">
                            ${produto.nome}
                        </h2>

                        <p class="descrisao-prato">
                            ${produto.descrisao}
                        </p>

                        <a href="#cadastro">
                            <button type="button" class="btn btn-warning w-50 comprar">
                                Comprar
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            `
        }
    }
    else{
        const respostaBanco = await fetch(`https://tech4produtos.fly.dev/produtos/${id}`)
        const json = await respostaBanco.json()
        let nome = json.nome
        let palavras = nome.split(" ")
        let idProduto
        if (palavras.lenght == 0){
            idProduto = nome.toLowerCase()
        }
        else{
            for (palavra of palavras){
                idProduto = palavra
                break
            }
        }
        document.querySelector("main").innerHTML += `
            <div class="container-fluid mt-5 vh-75">
                <div class="d-flex gap-5" id="${idProduto}">
                    <img src="${json.imagem}" alt="imagem ${json.nome}" width="30%" class="imagem ms-3">

                    <div class="textos d-flex flex-column gap-4">
                        <h2 class="text-warning d-inline-flex" id="titulo-${idProduto}">
                            ${json.nome}
                        </h2>

                        <p class="descrisao-prato">
                            ${json.descricao}
                        </p>

                        <a href="#cadastro">
                            <button type="button" class="btn btn-warning w-50 comprar">
                                Comprar
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector("main").innerHTML += `
        <div class="container d-flex justify-content-center align-items-center h-75 flex-wrap flex-column mt-5" id="cadastro">
            <h1 class="mb-3 text-warning">Receber promoções abaixo</h1>
            <form action="" method="post" onsubmit="alert('Email cadastrado com sucesso!')">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-light">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                    <label class="form-check-label text-light" for="invalidCheck2">
                        Aceitar termos de uso
                    </label>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-warning mb-5">Confirmar email</button>
                </div>
            </form> 
        </div>
    `
})