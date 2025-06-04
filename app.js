// jason - javascript object notation

let filme1 = {
    titulo: "Jurassic Park",
    foto: "filme1.webp",
    avaliacao: "10/10",
    duracao: "2h02"
}

let filme2 = {
    titulo: "Karate Kid Lendas",
    foto: "filme2.jpg",
    avaliacao: "8/10",
    duracao: "1h34"
}

let filme3 = {
    titulo: "Lilo e Stitch",
    foto: "filme3.jpg",
    avaliacao: "6/10",
    duracao: "1h48"
}

let filme4 = {
    titulo: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "9/10",
    duracao: "2h17"
}

function fnMontarCartao(filmeAtual){
    document.querySelector(".lista-filmes").innerHTML =`
        <div class="card-filme">
        <img src="img/${filmeAtual.foto}">
        <h3> ${filmeAtual.titulo} </h3>
        <span> ⭐ ${filmeAtual.avaliacao} </span>
        </div>`
        }

    fnMontarCartao(filme1)
    fnMontarCartao(filme2)
    fnMontarCartao(filme3)
    fnMontarCartao(filme4)
