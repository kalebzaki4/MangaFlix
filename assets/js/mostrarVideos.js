import { conectaApi } from "./conectaAPI.js"

const lista = document.querySelector("[data-lista]")

function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("a")
    video.className = "videos__item"
    video.innerHTML = `<a href="${url}">
    <div class="Manga">
        <img class="card-img1 image" src="${imagem}" alt="manga">
        <span class="txt-manga">${titulo}</span>
        <div class="avaliacao">${descricao}</div>
    </div>
</a>`

    return video;
}

async function listaVideos() {
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

}

listaVideos();