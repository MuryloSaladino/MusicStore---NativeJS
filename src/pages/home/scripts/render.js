export const renderAlbums = (div, albums) => {
    div.innerHTML = ""

    albums.forEach(album => {
        div.insertAdjacentHTML("beforeend", musicToCardHtml(album))
    });
}


const musicToCardHtml = (album) => `
    <li class="music-container__item">
        <img src="../../assets/img/${album.discography}" alt="${album.name}">
        <div class="music-container__item__info">
            <h5>${album.name} - ${album.artist}</h5>
            <h5 class="price">Only $ ${album.price.toFixed(2).replace(".", ",")}</h5>
            <b>${album.genre}</b>
            ${
                album.featured.length > 0 ?
                `<div class="music-container__item__featured-list">
                    <h6>Featured:</h6>
                    <p>${album.featured.join(", ")}</p>
                </div>` : ""
            }
            <button class="primary">Add to Cart</button>
        </div>
    </li>
`