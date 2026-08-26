const API_URL = "https://dragonball-api.com/api/characters";
const characterDetailContainer = document.getElementById("character-detail");
const params = new URLSearchParams(window.location.search);
const characterId = params.get("identifier");

async function getCharacterDetail() {
    const response = await fetch(API_URL + "/" + characterId);
    const data = await response.json();

    characterDetailContainer.innerHTML = "";

    //data.items.forEach(character => {
        const card = createCharacterCard(data);
        characterDetailContainer.appendChild(card);
    //});
}

function createCharacterCard(character) {
    const card = document.createElement("article");
    card.classList.add("character-card");

    card.innerHTML = `
        <img
            src="${character.image}"
            alt="${character.name}"
        >

        <h3>${character.id}</h3>
        <h2>${character.name}</h2>

        <p>
            Género: ${character.gender}
        </p>
    `;

    return card;
}

getCharacterDetail();