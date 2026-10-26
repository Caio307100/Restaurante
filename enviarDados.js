document.addEventListener("DOMContentLoaded", async () => {
    let respostaBanco = await fetch("https://tech4produtos.fly.dev/produtos/restaurante=Santo Garfo")
    let json = await respostaBanco.json()
    document.body.innerHTML += `<select></select>`
    for (produto of json){
        document.querySelector("select").innerHTML += `<option>${produto.nome}</option>`
    }
    console.log("Iniciou tudo")
})

async function adicionar(){
    const Adnome = document.querySelector("#Adnome")
    const Adrestaurante = document.querySelector("#Adrestaurante")
    const Adimagem = document.querySelector("#Adimagem")
    const Adproduto = document.querySelector("#Adproduto")
    const Addescrisao = document.querySelector("#Addescrisao")
    fetch("https://tech4produtos.fly.dev/produtos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nome: Adnome.value,
            restaurante: Adrestaurante.value,
            imagem: Adimagem.value,
            produto: Adproduto.value,
            descricao: Addescrisao.value
        })
    })
    console.log("Adicionei")
}
async function editar(){
    const Ednome = document.querySelector("#Ednome")
    const Edrestaurante = document.querySelector("#Edrestaurante")
    const Edimagem = document.querySelector("#Edimagem")
    const Edproduto = document.querySelector("#Edproduto")
    const Eddescrisao = document.querySelector("#Eddescrisao")
    const select = document.querySelector("select")
    let respostaBanco = await fetch("https://tech4produtos.fly.dev/produtos/restaurante=Santo Garfo")
    let json = await respostaBanco.json()
    for (produtoJ of json){
        if (produtoJ.nome == select.value){
            fetch(`https://tech4produtos.fly.dev/produtos/${produtoJ.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    nome: Ednome.value != "" ? Ednome.value : produtoJ.nome,
                    restaurante: Edrestaurante.value != "" ? Edrestaurante.value : produtoJ.restaurante,
                    imagem: Edimagem.value != "" ? Edimagem.value : produtoJ.imagem,
                    produto: Edproduto.value != "" ? Edproduto.value : produtoJ.produto,
                    descricao: Eddescrisao.value != "" ? Eddescrisao.value : produtoJ.descricao
                })
            })
        }
    }
    console.log("Editei")
}