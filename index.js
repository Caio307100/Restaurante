const cronometro = document.querySelector("#Cronometro").querySelector("p")
setInterval(() => {
    const data = new Date()
    let horasAtual = data.getHours()
    let segundosAtual = data.getSeconds()
    let minutosAtual = data.getMinutes()
    let horaRestante = 0
    let minutoRestante = 0
    let segundosRestante = 0
    while (true) {
        if (horasAtual == 24){
            break
        }
        else{
            horasAtual++ 
            horaRestante++
        }
    }
    while (true){
        if (minutosAtual == 60){
            break
        }
        else{
            minutosAtual++
            minutoRestante++
        }
    }
    while (true){
        if (segundosAtual == 60){
            break
        }
        else{
            segundosAtual++
            segundosRestante++
        }
    }
    cronometro.innerText = `Ofertas exclusivas até ${horaRestante - 1 < 10 ? `0${horaRestante - 1}` : horaRestante - 1}:${minutoRestante < 10 ? `0${minutoRestante}` : minutoRestante}:${segundosRestante < 10 ? `0${segundosRestante}` : segundosRestante}`
}, 1000);